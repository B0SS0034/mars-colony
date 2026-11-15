(function () {
  "use strict";

  const SWIPE_THRESHOLD = 80;
  const MAX_DRAG_X = 135; // Ограничение ухода карты влево и вправо
  const RESULT_DELAY_MS = 2600; // Достаточное время для чтения последствий
  const METER_KEYS = ["oxygen", "food", "energy", "morale"];

  // Фолбэк-портреты персонажей (если для конкретной карты нет отдельной картинки)
  const CHARACTER_PORTRAITS = {
    "Mei Tanaka": "images/chars/botanist.png",
    "Elena Voss": "images/chars/engineer.png",
    "Dr. Amara Okafor": "images/chars/doctor.png",
    "Tomasz Kowalski": "images/chars/cook.png",
    "Nadia Vance": "images/chars/miner.png",
    "Mission Control": "images/chars/command.png"
  };

  // DOM references
  const sceneBg = document.getElementById("scene-bg");
  const BG_SOURCES = {
    greenhouse: "images/bg-greenhouse.jpg",
    engineering: "images/bg-engineering.jpg",
    medbay: "images/bg-medbay.jpg",
    habitat: "images/bg-habitat.jpg",
    surface: "images/bg-surface.jpg",
    command: "images/bg-command.jpg"
  };

  let bgLayerA = document.getElementById("bg-layer-a");
  if (!bgLayerA && sceneBg) {
    bgLayerA = document.createElement("img");
    bgLayerA.id = "bg-layer-a";
    bgLayerA.className = "bg-layer";
    bgLayerA.alt = "";
    sceneBg.appendChild(bgLayerA);
  }
  // Убираем «запасной» CSS-фон, который просвечивает при затухании картинки
if (sceneBg) {
  sceneBg.removeAttribute("data-bg");
  sceneBg.style.setProperty("background-image", "none", "important");
}

  let currentBgKey = "";

  function preloadBackgrounds() {
    Object.values(BG_SOURCES).forEach((src) => {
      const img = new Image();
      img.src = src;
      if (img.decode) {
        img.decode().catch(() => {});
      }
    });
  }

  // Картинки карточек целиком
  const cardFace = document.getElementById("card-face");
  const okFaces = new Set();

  function preloadCardFaces() {
    const all = []
      .concat(typeof CARDS_A !== "undefined" ? CARDS_A : [])
      .concat(typeof CARDS_B !== "undefined" ? CARDS_B : []);
    all.forEach((c) => {
      if (!c.image) return;
      const img = new Image();
      img.onload = () => okFaces.add(c.image);
      img.src = c.image;
    });
  }

  function setFace(on, src) {
    if (on) cardFace.src = src;
    cardEl.classList.toggle("has-face", on);
    cardEl.parentElement.classList.toggle("has-face", on);
  }

  function updateCardFace(card) {
    const src = card && card.image;
    if (!src) return setFace(false);
    if (okFaces.has(src)) return setFace(true, src);
    setFace(false);
    const probe = new Image();
    probe.onload = () => {
      okFaces.add(src);
      if (currentCard === card) setFace(true, src);
    };
    probe.src = src;
  }
  // Best result = completed weeks, stored in localStorage
  var BEST_KEY = "marsColonyBestWeeks";
  function loadBest() {
    try { return parseInt(localStorage.getItem(BEST_KEY), 10) || 0; } catch (e) { return 0; }
  }
  // Call after every Game.choose(); returns the current best
  function saveBestIfHigher() {
    var weeks = Game.getState().week - 1;   // completed weeks
    var best = loadBest();
    if (weeks > best) {
     best = weeks;
      try { localStorage.setItem(BEST_KEY, String(best)); } catch (e) {}
    }
    return best;
  }
// Audio: procedural SFX + ambient Mars music (Web Audio API, no files, no network)
  var Sound = (function () {
    var SAVE_KEY = "marsColonySound";
    var ctx = null, master = null, sfxBus = null, musicBus = null;
    var settings = { music: 0.5, sfx: 0.7, muted: false };
    var music = null;        // music graph (built once)
    var musicOn = false;     // music loop running
    var tension = 0;         // 1 = a meter is in danger (darker harmony)
    var timer = null;        // note scheduler

    // Minor-pentatonic notes for calm play, dissonant notes for danger
    var CALM = [220, 261.63, 293.66, 329.63, 392, 440, 523.25];
    var TENSE = [220, 233.08, 311.13, 329.63];

    function clamp01(v) { v = Number(v); return isNaN(v) ? 0 : Math.max(0, Math.min(1, v)); }

    // Load saved settings (localStorage may be blocked, so always try/catch)
    try {
      var raw = localStorage.getItem(SAVE_KEY);
      if (raw) {
        var s = JSON.parse(raw);
        settings.music = clamp01(s.music);
        settings.sfx = clamp01(s.sfx);
        settings.muted = !!s.muted;
      }
    } catch (e) {}

    function save() {
      try { localStorage.setItem(SAVE_KEY, JSON.stringify(settings)); } catch (e) {}
    }

    // Push the current settings into the gain nodes
    function applyVolumes() {
      if (!ctx) return;
      var t = ctx.currentTime;
      master.gain.setTargetAtTime(settings.muted ? 0 : 1, t, 0.05);
      sfxBus.gain.setTargetAtTime(settings.sfx, t, 0.05);
      musicBus.gain.setTargetAtTime(settings.music * 0.6, t, 0.1);
    }

    // Create the context lazily (browsers need a user gesture first)
    function ensure() {
      if (!ctx) {
        var AC = window.AudioContext || window.webkitAudioContext;
        if (!AC) return null;
        ctx = new AC();
        master = ctx.createGain();
        sfxBus = ctx.createGain();
        musicBus = ctx.createGain();
        sfxBus.connect(master);
        musicBus.connect(master);
        master.connect(ctx.destination);
        applyVolumes();
      }
      if (ctx.state === "suspended" && !document.hidden) ctx.resume();
      return ctx;
    }

    // One short sound effect note
    function tone(freq, start, dur, type, vol) {
      var c = ensure();
      if (!c || settings.muted || settings.sfx === 0) return;
      var t = c.currentTime + start;
      var o = c.createOscillator(), g = c.createGain();
      o.type = type || "sine";
      o.frequency.setValueAtTime(freq, t);
      g.gain.setValueAtTime(0.0001, t);
      g.gain.exponentialRampToValueAtTime(vol || 0.15, t + 0.01);
      g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
      o.connect(g); g.connect(sfxBus);
      o.start(t); o.stop(t + dur + 0.02);
    }

    var sounds = {
      swipe:   function () { tone(320, 0, 0.07, "triangle"); tone(240, 0.05, 0.09, "triangle"); },
      warning: function () { tone(180, 0, 0.15, "square", 0.08); tone(180, 0.2, 0.15, "square", 0.08); },
      rare:    function () { tone(784, 0, 0.18, "sine", 0.1); tone(1175, 0.12, 0.35, "sine", 0.1); },
      win:     function () { [523, 659, 784, 1047].forEach(function (f, i) { tone(f, i * 0.15, 0.3, "sine"); }); },
      lose:    function () { [392, 330, 262, 196].forEach(function (f, i) { tone(f, i * 0.2, 0.35, "sawtooth", 0.1); }); }
    };

    // ----- music -----

    // Cheap reverb: a decaying noise burst used as an impulse response
    function makeReverb(c) {
      var len = Math.floor(c.sampleRate * 3);
      var buf = c.createBuffer(2, len, c.sampleRate);
      for (var ch = 0; ch < 2; ch++) {
        var d = buf.getChannelData(ch);
        for (var i = 0; i < len; i++) d[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / len, 2.5);
      }
      var conv = c.createConvolver();
      conv.buffer = buf;
      return conv;
    }

    // Build the always-on drone and the shared effect buses
    function buildMusic(c) {
      var reverb = makeReverb(c);
      var wet = c.createGain(); wet.gain.value = 0.7;
      reverb.connect(wet); wet.connect(musicBus);
      var dry = c.createGain(); dry.gain.value = 0.6;
      dry.connect(musicBus);

      // Low drone: detuned saws through a slowly moving low-pass filter
      var filter = c.createBiquadFilter();
      filter.type = "lowpass"; filter.frequency.value = 400; filter.Q.value = 2;
      var droneGain = c.createGain(); droneGain.gain.value = 0;
      filter.connect(droneGain); droneGain.connect(dry); droneGain.connect(reverb);
      [[55, 0], [55, 7], [82.41, -5]].forEach(function (p) {
        var o = c.createOscillator();
        o.type = "sawtooth"; o.frequency.value = p[0]; o.detune.value = p[1];
        o.connect(filter); o.start();
      });
      var lfo = c.createOscillator(), lfoGain = c.createGain();
      lfo.frequency.value = 0.07; lfoGain.gain.value = 180;
      lfo.connect(lfoGain); lfoGain.connect(filter.frequency); lfo.start();

      return { reverb: reverb, dry: dry, filter: filter, droneGain: droneGain };
    }

    // One long soft pad note
    function pad(freq) {
      var t = ctx.currentTime;
      var o = ctx.createOscillator(), g = ctx.createGain();
      o.type = "sine"; o.frequency.value = freq;
      g.gain.setValueAtTime(0.0001, t);
      g.gain.linearRampToValueAtTime(0.07, t + 2.5);
      g.gain.linearRampToValueAtTime(0.0001, t + 7);
      o.connect(g); g.connect(music.dry); g.connect(music.reverb);
      o.start(t); o.stop(t + 7.2);
    }

    // Pick notes every few seconds; darker notes and a brighter filter under tension
    function schedule() {
      if (!musicOn) return;
      if (!document.hidden) {
        var set = tension ? TENSE : CALM;
        pad(set[Math.floor(Math.random() * set.length)]);
        if (Math.random() < 0.4) pad(set[Math.floor(Math.random() * set.length)] * 2);
        music.filter.frequency.setTargetAtTime(tension ? 700 : 400, ctx.currentTime, 2);
      }
      timer = setTimeout(schedule, 3500 + Math.random() * 3500);
    }

    // Stop the audio while the tab is hidden
    document.addEventListener("visibilitychange", function () {
      if (!ctx) return;
      if (document.hidden) ctx.suspend(); else ctx.resume();
    });

    return {
      play: function (name) { if (sounds[name]) sounds[name](); },
      startMusic: function () {
        var c = ensure();
        if (!c || musicOn) return;
        musicOn = true;
        if (!music) music = buildMusic(c);
        music.droneGain.gain.setTargetAtTime(0.05, c.currentTime, 3);  // slow fade in
        schedule();
      },
      stopMusic: function () {
        musicOn = false;
        clearTimeout(timer);
        if (music && ctx) music.droneGain.gain.setTargetAtTime(0, ctx.currentTime, 1);
      },
      setTension: function (on) { tension = on ? 1 : 0; },
      getSettings: function () { return { music: settings.music, sfx: settings.sfx, muted: settings.muted }; },
      setMusicVolume: function (v) { settings.music = clamp01(v); applyVolumes(); save(); },
      setSfxVolume: function (v) { settings.sfx = clamp01(v); applyVolumes(); save(); },
      setMuted: function (m) { settings.muted = !!m; applyVolumes(); save(); }
    };
  })();
  // True if any meter is close to 0 or 100
  function isAnyMeterDanger(s) {
    return METER_KEYS.some(function (k) { return s[k] <= 15 || s[k] >= 85; });
  }

  // Show the saved best result on the start screen (hidden if no game played yet)
  function renderStartBest() {
    const best = loadBest();
    startBest.textContent = best > 0 ? `Best result: ${best} weeks` : "";
  }

      


  
  
  const startScreen = document.getElementById("start-screen");
  const startBest = document.getElementById("start-best");
  const gameScreen = document.getElementById("game-screen");
  const endScreen = document.getElementById("end-screen");

  const introTitle = document.getElementById("intro-title");
  const introText = document.getElementById("intro-text");
  const startBtn = document.getElementById("start-btn");

  const weekCounter = document.getElementById("week-counter");
  const cardEl = document.getElementById("card");
  const cardBadge = document.getElementById("card-badge");
  const cardBadgeText = document.getElementById("card-badge-text");
  const cardWho = document.getElementById("card-who");
  const cardRole = document.getElementById("card-role");
  const skipResultsEl = document.getElementById("skip-results"); // checkbox on start screen
  const cardText = document.getElementById("card-text");
  const cardArtWrap = document.getElementById("card-art-wrap");
  const cardImage = document.getElementById("card-image");
  const choiceLeftEl = document.getElementById("choice-left");
  const choiceRightEl = document.getElementById("choice-right");

  const resultBox = document.getElementById("result-box");
  const resultText = document.getElementById("result-text");

  const endTitle = document.getElementById("end-title");
  const endText = document.getElementById("end-text");
  const endWeeks = document.getElementById("end-weeks");
  const restartBtn = document.getElementById("restart-btn");
  const continueBtn = document.getElementById("continue-btn");
  const settingsBtn = document.getElementById("settings-btn");
  const settingsPanel = document.getElementById("settings-panel");
  const settingsClose = document.getElementById("settings-close");
  const musicVol = document.getElementById("music-vol");
  const sfxVol = document.getElementById("sfx-vol");
  const muteAll = document.getElementById("mute-all");
  const endBest = document.getElementById("end-best");

  const meterEls = {};
  METER_KEYS.forEach((key) => {
    const root = document.querySelector(`.meter[data-meter="${key}"]`);
    meterEls[key] = {
      root,
      fill: root.querySelector(".meter-fill")
    };
  });

  // UI state
  let currentCard = null;
  let isDragging = false;
  let isLocked = false;
  let startX = 0;
  let clampedDeltaX = 0;
  let resultTimer = null;
  let pendingOutcome = null;

  function showScreen(screen) {
    [startScreen, gameScreen, endScreen].forEach((s) => s.classList.remove("active"));
    screen.classList.add("active");
  }

  // Определение локации фона для карты (поддерживает и cards_a.js, и cards_b.js)
  function resolveCardBg(card) {
    if (card && card.bg) return card.bg;
    const who = (card && card.who ? card.who : "").toLowerCase();
    const text = (card && card.text ? card.text : "").toLowerCase();

    if (who.includes("botanist") || /algae|crop|greenhouse|wheat|potato|plant|bamboo|melon/.test(text)) {
      return "greenhouse";
    }
    if (who.includes("doctor") || /medical|oxygen|insomnia|bronchitis|vitamin|quarantine/.test(text)) {
      return "medbay";
    }
    if (who.includes("cook") || /stew|ration|cheese|bread|porridge|meat|freezer|pantry/.test(text)) {
      return "habitat";
    }
    if (who.includes("miner") || /dust storm|tunnel|drill|rover|ore|vent|lava|outside/.test(text)) {
      return "surface";
    }
    if (who.includes("mission control") || /earth|flare|telemetry|firmware|radar|orbital/.test(text)) {
      return "command";
    }
    return "engineering";
  }

  let bgSwitchTimer = null;

  function updateSceneBackground(card) {
    const key = resolveCardBg(card);
    if (key === currentBgKey) return;

    const src = BG_SOURCES[key] || BG_SOURCES.command;
    const isFirstLoad = currentBgKey === "";
    currentBgKey = key;

    if (bgSwitchTimer) {
      clearTimeout(bgSwitchTimer);
      bgSwitchTimer = null;
    }

    // При самом первом открытии игры показываем фон сразу без мерцания
    if (isFirstLoad) {
      bgLayerA.src = src;
      bgLayerA.classList.add("active");
      return;
    }

    // 1. Плавно гасим текущий фон (0.15 с)
    bgLayerA.classList.remove("active");

    // 2. Через 0.15 с подставляем новый и плавно проявляем его (ещё 0.15 с)
    bgSwitchTimer = setTimeout(() => {
      bgLayerA.src = src;
      const show = () => {
        bgLayerA.classList.add("active");
       bgSwitchTimer = null;
     };
      if (bgLayerA.decode) {
       bgLayerA.decode().then(show).catch(show);
      } else {
       show();
      }
    }, 50);
  }

  // Загрузка иллюстрации карточки с фолбэком на портрет персонажа
  function updateCardArtwork(card) {
    if (!cardArtWrap || !cardImage) return;

    const who = card && card.who ? card.who : "";
    const charKey = Object.keys(CHARACTER_PORTRAITS).find((name) => who.includes(name));
    const fallbackSrc = charKey ? CHARACTER_PORTRAITS[charKey] : "";
    const primarySrc = (card && card.image) || fallbackSrc;

    if (!primarySrc) {
      cardArtWrap.classList.add("hidden");
      cardImage.removeAttribute("src");
      return;
    }

    let triedFallback = primarySrc === fallbackSrc;
    cardImage.onerror = function () {
      if (!triedFallback && fallbackSrc) {
        triedFallback = true;
        cardImage.src = fallbackSrc;
      } else {
        cardArtWrap.classList.add("hidden");
      }
    };
    cardImage.onload = function () {
      cardArtWrap.classList.remove("hidden");
    };
    cardImage.src = primarySrc;
  }

  // Render meter bars and week counter from Game.getState()
  function renderState() {
    const state = Game.getState();
    METER_KEYS.forEach((key) => {
      const value = Math.max(0, Math.min(100, Number(state[key]) || 0));
      const { root, fill } = meterEls[key];
      fill.style.width = `${value}%`;
      root.classList.toggle("critical", value <= 15 || value >= 85);
    });
    const displayWeek = Math.min(state.week, 100);
    weekCounter.textContent = `Week ${displayWeek} of 100`;
    Extras.setSky(displayWeek);
  }

  // Highlight dots above meters affected by the previewed side
  function updateEffectDots(side) {
    const effects =
      side && currentCard && currentCard[side] && currentCard[side].effects
        ? currentCard[side].effects
        : {};

    METER_KEYS.forEach((key) => {
      const affected = effects[key] !== undefined && effects[key] !== 0;
      meterEls[key].root.classList.toggle("affected", affected);
    });
  }

  // Reset card position and preview indicators
  function resetCardVisuals(animate) {
    cardEl.style.transition = animate ? "transform 0.25s ease, opacity 0.2s ease" : "none";
    cardEl.style.transform = "translateX(0px) rotate(0deg) scale(1)";
    cardEl.style.opacity = "1";
    cardEl.style.pointerEvents = "auto";
    cardBadge.style.opacity = "0";
    cardBadge.classList.remove("swipe-left", "swipe-right");
    choiceLeftEl.classList.remove("active");
    choiceRightEl.classList.remove("active");
    updateEffectDots(null);
  }

 function loadNextCard() {
    currentCard = Game.nextCard();
    if (!currentCard) return;

    resultBox.classList.add("hidden");
    updateSceneBackground(currentCard);
    updateCardFace(currentCard); 
    // Rare Mission Control cards get the golden look
    const isRareCard = String(currentCard.who).indexOf("Mission Control") !== -1;
    cardEl.classList.toggle("rare", isRareCard);
    cardEl.parentElement.classList.toggle("rare", isRareCard); // .arena
    if (isRareCard) Sound.play("rare");
    updateCardArtwork(currentCard);

    // "Mei Tanaka, Botanist" -> name + role on separate lines
    const whoParts = currentCard.who.split(",");
    cardWho.textContent = whoParts[0].trim();
    cardRole.textContent = whoParts.slice(1).join(",").trim();
    cardText.textContent = currentCard.text;
    choiceLeftEl.textContent = currentCard.left.label;
    choiceRightEl.textContent = currentCard.right.label;

    // Сбрасываем индикаторы и ставим карточку в стартовую позицию для плавного появления
    resetCardVisuals(false);
    cardEl.style.opacity = "0";
    cardEl.style.transform = "translateY(14px) scale(0.96)";

    // Запускаем плавную анимацию проявления
    void cardEl.offsetWidth;
    cardEl.style.transition = "transform 0.28s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.25s ease";
    cardEl.style.opacity = "1";
    cardEl.style.transform = "translateX(0px) rotate(0deg) scale(1)";

    isLocked = false;
  }

  function showEndScreen(endingKey) {
    const ending = ENDINGS[endingKey] || { title: "Mission Over", text: "" };
    // Completed weeks (same rule as the best score)
    const survived = Math.max(Game.getState().week - 1, 0);

    endTitle.textContent = ending.title;
    endText.textContent = ending.text;
    endWeeks.textContent = `Weeks survived: ${survived}`;
    endBest.textContent = `Best: ${loadBest()} weeks`;
    // Continue is offered only after victory
    continueBtn.classList.toggle("hidden", endingKey !== "victory");
    showScreen(endScreen);
    Extras.onGameEnd(endingKey);
    isLocked = false;
  }

  // Keep playing after week 100 (no Game.start, state is kept)
  function continueGame() {
    showScreen(gameScreen);
    renderState();
    loadNextCard();
  }

  function finishResultStep() {
    if (!pendingOutcome) return;
    if (resultTimer) {
      clearTimeout(resultTimer);
      resultTimer = null;
    }
    const outcome = pendingOutcome;
    pendingOutcome = null;

    if (outcome.gameOver) {
      showEndScreen(outcome.endingKey);
    } else {
      loadNextCard();
    }
  }

  // Apply chosen side, show optional result sentence, then advance
  function commitChoice(side) {
    if (isLocked || !currentCard) return;
    isLocked = true;
    isDragging = false;
    Extras.hideTutorial();

    const chosenData = currentCard[side];
    const flyX = side === "left" ? -140 : 140;
    const flyRot = side === "left" ? -12 : 12;

    // Плавно уводим и скрываем карточку, чтобы она не конфликтовала с панелью последствий
    cardEl.style.transition = "transform 0.22s ease, opacity 0.2s ease";
    cardEl.style.transform = `translateX(${flyX}px) rotate(${flyRot}deg) scale(0.95)`;
    cardEl.style.opacity = "0";
    cardEl.style.pointerEvents = "none";
    updateEffectDots(null);

    const outcome = Game.choose(side);
    renderState();
    // Sounds and best score
    Sound.play("swipe");
    if (outcome.gameOver) Sound.play(outcome.endingKey === "victory" ? "win" : "lose");
    else if (isAnyMeterDanger(Game.getState())) Sound.play("warning");
    saveBestIfHigher();
    Sound.setTension(isAnyMeterDanger(Game.getState()));

    const message = chosenData && chosenData.result ? chosenData.result.trim() : "";
    const isRare = String(currentCard.who).indexOf("Mission Control") !== -1;

    setTimeout(() => {
      if (message && (!skipResultsEl.checked || isRare)) {
        pendingOutcome = outcome;
        resultText.textContent = message;
        resultBox.classList.remove("hidden");
        resultTimer = setTimeout(finishResultStep, RESULT_DELAY_MS);
      } else if (outcome.gameOver) {
        showEndScreen(outcome.endingKey);
      } else {
        loadNextCard();
      }
    }, 220);
  }

  // Вычисление допустимого предела свайпа, чтобы карта не уходила за границы экрана
  function getMaxDragDistance() {
    const safeViewportLimit = Math.max(105, (window.innerWidth - cardEl.offsetWidth) / 2 - 12);
    return Math.min(MAX_DRAG_X, safeViewportLimit);
  }

  // Drag handlers (mouse & touch via Pointer Events)
  function onPointerDown(e) {
    if (isLocked || !gameScreen.classList.contains("active")) return;
    isDragging = true;
    startX = e.clientX;
    clampedDeltaX = 0;
    cardEl.style.transition = "none";
  }

  function onPointerMove(e) {
    if (!isDragging || isLocked || !currentCard) return;
    const rawDeltaX = e.clientX - startX;
    const limit = getMaxDragDistance();
    clampedDeltaX = Math.max(-limit, Math.min(limit, rawDeltaX));

    const rotate = Math.max(-14, Math.min(14, clampedDeltaX * 0.08));
    const ratio = Math.min(Math.abs(clampedDeltaX) / SWIPE_THRESHOLD, 1);

    cardEl.style.transform = `translateX(${clampedDeltaX}px) rotate(${rotate}deg)`;

    if (clampedDeltaX < -12) {
      cardBadgeText.textContent = currentCard.left.label;
      cardBadge.classList.add("swipe-left");
      cardBadge.classList.remove("swipe-right");
      cardBadge.style.opacity = String(ratio);

      choiceLeftEl.classList.add("active");
      choiceRightEl.classList.remove("active");
      updateEffectDots("left");
    } else if (clampedDeltaX > 12) {
      cardBadgeText.textContent = currentCard.right.label;
      cardBadge.classList.add("swipe-right");
      cardBadge.classList.remove("swipe-left");
      cardBadge.style.opacity = String(ratio);

      choiceRightEl.classList.add("active");
      choiceLeftEl.classList.remove("active");
      updateEffectDots("right");
    } else {
      cardBadge.style.opacity = "0";
      cardBadge.classList.remove("swipe-left", "swipe-right");
      choiceLeftEl.classList.remove("active");
      choiceRightEl.classList.remove("active");
      updateEffectDots(null);
    }
  }

  function onPointerUp() {
    if (!isDragging) return;
    isDragging = false;

    if (clampedDeltaX <= -SWIPE_THRESHOLD) {
      commitChoice("left");
    } else if (clampedDeltaX >= SWIPE_THRESHOLD) {
      commitChoice("right");
    } else {
      resetCardVisuals(true);
    }
  }

  // Keyboard support
  function onKeyDown(e) {
    // While the settings panel is open, the game ignores the keyboard
    if (!settingsPanel.classList.contains("hidden")) {
      if (e.key === "Escape") closeSettings();
      return;
    }
    if (!gameScreen.classList.contains("active")) return;

    // Если открыта панель последствий — пробел или Enter сразу закрывают её
    if (!resultBox.classList.contains("hidden") && (e.key === " " || e.key === "Enter")) {
      e.preventDefault();
      finishResultStep();
      return;
    }

    if (isLocked || isDragging) return;
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      updateEffectDots("left");
      commitChoice("left");
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      updateEffectDots("right");
      commitChoice("right");
    }
  }

  function startNewGame() {
    if (resultTimer) {
      clearTimeout(resultTimer);
      resultTimer = null;
    }
    pendingOutcome = null;
    Game.start();
    Sound.setTension(false);
    renderState();
    showScreen(gameScreen);
    Extras.onGameStart();
    loadNextCard();
  }

  function openSettings() { settingsPanel.classList.remove("hidden"); }
  function closeSettings() {
    settingsPanel.classList.add("hidden");
    settingsBtn.blur();
  }

  // Load saved audio settings into the controls and wire them up
  function initSettings() {
    const s = Sound.getSettings();
    musicVol.value = Math.round(s.music * 100);
    sfxVol.value = Math.round(s.sfx * 100);
    muteAll.checked = s.muted;

    settingsBtn.addEventListener("click", openSettings);
    settingsClose.addEventListener("click", closeSettings);
    settingsPanel.addEventListener("click", function (e) {
      if (e.target === settingsPanel) closeSettings(); // click outside the card
    });
    musicVol.addEventListener("input", function () { Sound.setMusicVolume(musicVol.value / 100); });
    sfxVol.addEventListener("input", function () { Sound.setSfxVolume(sfxVol.value / 100); });
    sfxVol.addEventListener("change", function () { Sound.play("swipe"); }); // preview
    muteAll.addEventListener("change", function () { Sound.setMuted(muteAll.checked); });
  }

// Extras: endings gallery, "Did you know?" facts, first-run hint, sky tint
  var Extras = (function () {
    var ENDING_KEYS = [
      "oxygen_low", "oxygen_high", "food_low", "food_high",
      "energy_low", "energy_high", "morale_low", "morale_high", "victory"
    ];
    var ENDINGS_SAVE = "marsColonyEndings";
    var TUTORIAL_SAVE = "marsColonyTutorialSeen";

    var FACTS = [
      "A sol, one Martian day, lasts 24 hours and 39 minutes.",
      "Radio signals take from about 3 to 22 minutes to travel between Mars and Earth.",
      "Martian soil contains toxic perchlorates, so it must be treated before farming.",
      "NASA's MOXIE experiment on Perseverance made oxygen from Martian carbon dioxide.",
      "The Martian air is about 95% carbon dioxide, and its pressure is under 1% of Earth's.",
      "Global dust storms can darken Mars for weeks and starve solar panels of light.",
      "Mars has no global magnetic field, so its surface gets much more radiation than Earth's.",
      "Gravity on Mars is only about 38% of Earth's.",
      "Transfer windows between Earth and Mars open roughly every 26 months.",
      "Water ice lies under the surface of Mars at mid and high latitudes.",
      "A year on Mars lasts 687 Earth days.",
      "The average surface temperature on Mars is around -60 degrees Celsius."
    ];

    // Sky tint: one phase per 4 weeks, repeating every 20 weeks
    // day, dusty haze, sunset, night, dawn
    var SKY = [
      "rgba(0, 0, 0, 0)",
      "rgba(200, 120, 60, 0.18)",
      "rgba(150, 50, 30, 0.30)",
      "rgba(8, 12, 45, 0.50)",
      "rgba(90, 60, 110, 0.25)"
    ];

    var el = {};

    // ----- saved data (localStorage may be blocked, so always try/catch) -----
    function loadFound() {
      try {
        var a = JSON.parse(localStorage.getItem(ENDINGS_SAVE));
        return Array.isArray(a) ? a : [];
      } catch (e) { return []; }
    }
    function saveFound(a) {
      try { localStorage.setItem(ENDINGS_SAVE, JSON.stringify(a)); } catch (e) {}
    }
    function randomFact() {
      return FACTS[Math.floor(Math.random() * FACTS.length)];
    }

    // Short hint shown for an ending, built from its key
    function hintFor(key) {
      if (key === "victory") return "Survive 100 weeks";
      var parts = key.split("_");
      var name = parts[0].charAt(0).toUpperCase() + parts[0].slice(1);
      return name + (parts[1] === "low" ? " too low" : " too high");
    }

    // Rebuild the endings list and the counters
    function renderGallery() {
      var found = loadFound();
      if (el.btn) el.btn.textContent = "Endings " + found.length + " / " + ENDING_KEYS.length;
      if (!el.list) return;
      el.list.innerHTML = "";
      ENDING_KEYS.forEach(function (key) {
        var unlocked = found.indexOf(key) !== -1 && ENDINGS[key];
        var li = document.createElement("li");
        li.className = unlocked ? "found" : "locked";
        var title = document.createElement("strong");
        title.textContent = unlocked ? ENDINGS[key].title : "???";
        var sub = document.createElement("span");
        sub.textContent = unlocked ? hintFor(key) : "Hint: " + hintFor(key);
        li.appendChild(title);
        li.appendChild(sub);
        el.list.appendChild(li);
      });
    }

    return {
      // Call once from init()
      init: function () {
        el.btn = document.getElementById("endings-btn");
        el.panel = document.getElementById("endings-panel");
        el.close = document.getElementById("endings-close");
        el.list = document.getElementById("endings-list");
        el.startFact = document.getElementById("start-fact");
        el.endFact = document.getElementById("end-fact");
        el.endNew = document.getElementById("end-new");
        el.endCount = document.getElementById("end-count");
        el.tutorial = document.getElementById("tutorial-hint");
        el.sky = document.getElementById("sky-tint");

        if (el.btn && el.panel) el.btn.addEventListener("click", function () {
          renderGallery();
          el.panel.classList.remove("hidden");
        });
        if (el.close && el.panel) el.close.addEventListener("click", function () {
          el.panel.classList.add("hidden");
        });
        if (el.panel) el.panel.addEventListener("click", function (e) {
          if (e.target === el.panel) el.panel.classList.add("hidden"); // click outside
        });
        if (el.startFact) el.startFact.textContent = "Did you know? " + randomFact();
        renderGallery();
      },

      // Sky tint follows the week
      setSky: function (week) {
        if (!el.sky) return;
        el.sky.style.background = SKY[Math.floor(((week - 1) % 20) / 4)];
      },

      // First-run hint: shown until the player makes the first choice
      onGameStart: function () {
        if (!el.tutorial) return;
        var seen = false;
        try { seen = localStorage.getItem(TUTORIAL_SAVE) === "1"; } catch (e) {}
        el.tutorial.classList.toggle("hidden", seen);
      },
      hideTutorial: function () {
        if (!el.tutorial || el.tutorial.classList.contains("hidden")) return;
        el.tutorial.classList.add("hidden");
        try { localStorage.setItem(TUTORIAL_SAVE, "1"); } catch (e) {}
      },

      // End screen: record the ending, show counters and a fact
      onGameEnd: function (endingKey) {
        var found = loadFound();
        var isNew = found.indexOf(endingKey) === -1;
        if (isNew) { found.push(endingKey); saveFound(found); }
        if (el.endNew) el.endNew.classList.toggle("hidden", !isNew);
        if (el.endCount) el.endCount.textContent = "Endings found: " + found.length + " / " + ENDING_KEYS.length;
        if (el.endFact) el.endFact.textContent = "Did you know? " + randomFact();
        renderGallery();
      }
    };
  })();

  // Initialize start screen and event listeners
  function init() {
    introTitle.textContent = INTRO.title;
    introText.textContent = INTRO.text;
      
    initSettings();

    startBtn.addEventListener("click", function () {
      Sound.startMusic(); // first click: the browser allows audio now
      startNewGame();
    });
    restartBtn.addEventListener("click", startNewGame);
    continueBtn.addEventListener("click", continueGame);
    resultBox.addEventListener("click", finishResultStep);

    cardEl.addEventListener("pointerdown", onPointerDown);
    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerup", onPointerUp);
    window.addEventListener("pointercancel", onPointerUp);
    window.addEventListener("keydown", onKeyDown);

    Extras.init();
    renderStartBest();
    showScreen(startScreen);
    preloadBackgrounds();
    preloadCardFaces();
  }

  init();
})();