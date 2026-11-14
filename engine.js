// engine.js: game logic only. No DOM, no alerts, no logging.
var Game = (function () {
  // ----- private state -----
  var state = { oxygen: 50, food: 40, energy: 50, morale: 50, week: 1 };
  var deck = [];          // shuffled cards
  var pos = 0;            // index of the next card in the deck
  var current = null;     // card currently shown to the player
  var last = null;        // last card returned (to avoid repeats)
  var over = false;       // true after the game has ended
  var finalKey = null;    // ending key once the game has ended

  var METERS = ["oxygen", "food", "energy", "morale"];

  // Fisher-Yates shuffle (in place)
  function shuffle(arr) {
    for (var i = arr.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = arr[i]; arr[i] = arr[j]; arr[j] = t;
    }
    return arr;
  }

  // Build a fresh shuffled deck from both card files
  function buildDeck() {
    deck = shuffle(CARDS_A.concat(CARDS_B));
    pos = 0;
    // Do not start the new deck with the card we just showed
    if (last && deck.length > 1 && deck[0] === last) {
      var k = 1 + Math.floor(Math.random() * (deck.length - 1));
      var t = deck[0]; deck[0] = deck[k]; deck[k] = t;
    }
  }

  // Keep a meter inside 0..100
  function clamp(v) {
    return Math.max(0, Math.min(100, v));
  }

  // Return the ending key if any meter hit 0 or 100, else null
  function checkEnding() {
    for (var i = 0; i < METERS.length; i++) {
      var m = METERS[i];
      if (state[m] <= 0) return m + "_low";
      if (state[m] >= 100) return m + "_high";
    }
    return null;
  }

  return {
    // Reset the game and shuffle a new deck
    start: function () {
      state = { oxygen: 50, food: 40, energy: 50, morale: 50, week: 1 };
      current = null;
      last = null;
      over = false;
      finalKey = null;
      buildDeck();
    },

    // Return a copy so the UI cannot change the state by accident
    getState: function () {
      return {
        oxygen: state.oxygen,
        food: state.food,
        energy: state.energy,
        morale: state.morale,
        week: state.week
      };
    },

    // Next card from the deck; reshuffles when the deck runs out
    nextCard: function () {
      if (deck.length === 0 || pos >= deck.length) buildDeck();
      current = deck[pos++];
      last = current;
      return current;
    },

    // Apply the chosen side, check endings, advance the week
    choose: function (side) {
      // Game already finished: repeat the final result, change nothing
      if (over) return { gameOver: true, endingKey: finalKey };
      // No card shown yet or invalid side: ignore
      if (!current || (side !== "left" && side !== "right")) {
        return { gameOver: false, endingKey: null };
      }

      var effects = current[side].effects || {};
      for (var i = 0; i < METERS.length; i++) {
        var m = METERS[i];
        state[m] = clamp(state[m] + (Number(effects[m]) || 0));
      }

      var key = checkEnding();
      if (!key) {
        state.week += 1;
        if (state.week > 100) key = "victory";
      }

      current = null; // this card is used
      if (key) {
        over = true;
        finalKey = key;
        return { gameOver: true, endingKey: key };
      }
      return { gameOver: false, endingKey: null };
    }
  };
})();