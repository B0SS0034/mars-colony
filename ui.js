(function () {
  "use strict";

  const SWIPE_THRESHOLD = 80;
  const RESULT_DELAY_MS = 1100;
  const METER_KEYS = ["oxygen", "food", "energy", "morale"];

  // DOM references
  const startScreen = document.getElementById("start-screen");
  const gameScreen = document.getElementById("game-screen");
  const endScreen = document.getElementById("end-screen");

  const introTitle = document.getElementById("intro-title");
  const introText = document.getElementById("intro-text");
  const startBtn = document.getElementById("start-btn");

  const weekCounter = document.getElementById("week-counter");
  const cardEl = document.getElementById("card");
  const cardBadge = document.getElementById("card-badge");
  const cardWho = document.getElementById("card-who");
  const cardText = document.getElementById("card-text");
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
  let currentX = 0;

  function showScreen(screen) {
    [startScreen, gameScreen, endScreen].forEach((s) => s.classList.remove("active"));
    screen.classList.add("active");
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
    cardEl.style.transition = animate ? "transform 0.25s ease" : "none";
    cardEl.style.transform = "translateX(0px) rotate(0deg)";
    cardBadge.style.opacity = "0";
    choiceLeftEl.classList.remove("active");
    choiceRightEl.classList.remove("active");
    updateEffectDots(null);
  }

  function loadNextCard() {
    currentCard = Game.nextCard();
    if (!currentCard) return;

    resultBox.classList.add("hidden");
    cardWho.textContent = currentCard.who;
    cardText.textContent = currentCard.text;
    choiceLeftEl.textContent = currentCard.left.label;
    choiceRightEl.textContent = currentCard.right.label;
    resetCardVisuals(false);
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

  // Apply chosen side, show optional result sentence, then advance
  function commitChoice(side) {
    if (isLocked || !currentCard) return;
    isLocked = true;
    isDragging = false;

    const chosenData = currentCard[side];
    const flyX = side === "left" ? -380 : 380;
    const flyRot = side === "left" ? -20 : 20;

    cardEl.style.transition = "transform 0.25s ease";
    cardEl.style.transform = `translateX(${flyX}px) rotate(${flyRot}deg)`;
    updateEffectDots(null);

    const outcome = Game.choose(side);
    renderState();

    const message = chosenData && chosenData.result ? chosenData.result.trim() : "";

    setTimeout(() => {
      if (message) {
        resultText.textContent = message;
        resultBox.classList.remove("hidden");
        setTimeout(() => {
          if (outcome.gameOver) {
            showEndScreen(outcome.endingKey);
          } else {
            loadNextCard();
          }
        }, RESULT_DELAY_MS);
      } else if (outcome.gameOver) {
        showEndScreen(outcome.endingKey);
      } else {
        loadNextCard();
      }
    }, 220);
  }

  // Drag handlers (mouse & touch via Pointer Events)
  function onPointerDown(e) {
    if (isLocked || !gameScreen.classList.contains("active")) return;
    isDragging = true;
    startX = e.clientX;
    currentX = startX;
    cardEl.style.transition = "none";
  }

  function onPointerMove(e) {
    if (!isDragging || isLocked || !currentCard) return;
    currentX = e.clientX;
    const deltaX = currentX - startX;
    const rotate = Math.max(-16, Math.min(16, deltaX * 0.06));
    const ratio = Math.min(Math.abs(deltaX) / SWIPE_THRESHOLD, 1);

    cardEl.style.transform = `translateX(${deltaX}px) rotate(${rotate}deg)`;

    if (deltaX < -12) {
      cardBadge.textContent = currentCard.left.label;
      cardBadge.style.opacity = String(ratio);
      choiceLeftEl.classList.add("active");
      choiceRightEl.classList.remove("active");
      updateEffectDots("left");
    } else if (deltaX > 12) {
      cardBadge.textContent = currentCard.right.label;
      cardBadge.style.opacity = String(ratio);
      choiceRightEl.classList.add("active");
      choiceLeftEl.classList.remove("active");
      updateEffectDots("right");
    } else {
      cardBadge.style.opacity = "0";
      choiceLeftEl.classList.remove("active");
      choiceRightEl.classList.remove("active");
      updateEffectDots(null);
    }
  }

  function onPointerUp() {
    if (!isDragging) return;
    isDragging = false;
    const deltaX = currentX - startX;

    if (deltaX <= -SWIPE_THRESHOLD) {
      commitChoice("left");
    } else if (deltaX >= SWIPE_THRESHOLD) {
      commitChoice("right");
    } else {
      resetCardVisuals(true);
    }
  }

  // Keyboard support
  function onKeyDown(e) {
    if (!gameScreen.classList.contains("active") || isLocked || isDragging) return;
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

    cardEl.addEventListener("pointerdown", onPointerDown);
    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerup", onPointerUp);
    window.addEventListener("pointercancel", onPointerUp);
    window.addEventListener("keydown", onKeyDown);

    showScreen(startScreen);
  }

  init();
})();