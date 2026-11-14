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
    const cardFace = document.getElementById("card-face");
    const okFaces = new Set();

    // Заранее грузим картинки карточек, чтобы они появлялись мгновенно
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
  }
  const startScreen = document.getElementById("start-screen");
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
    const state = Game.getState();
    const survived = endingKey === "victory" ? 100 : Math.min(state.week, 100);

    endTitle.textContent = ending.title;
    endText.textContent = ending.text;
    endWeeks.textContent = `Weeks survived: ${survived}`;
    showScreen(endScreen);
    isLocked = false;
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

    const message = chosenData && chosenData.result ? chosenData.result.trim() : "";

    setTimeout(() => {
      if (message && !skipResultsEl.checked) {
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
    renderState();
    showScreen(gameScreen);
    loadNextCard();
  }

  // Initialize start screen and event listeners
  function init() {
    introTitle.textContent = INTRO.title;
    introText.textContent = INTRO.text;

    startBtn.addEventListener("click", startNewGame);
    restartBtn.addEventListener("click", startNewGame);
    resultBox.addEventListener("click", finishResultStep);

    cardEl.addEventListener("pointerdown", onPointerDown);
    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerup", onPointerUp);
    window.addEventListener("pointercancel", onPointerUp);
    window.addEventListener("keydown", onKeyDown);

    showScreen(startScreen);
    preloadBackgrounds();
    preloadCardFaces();
  }

  init();
})();