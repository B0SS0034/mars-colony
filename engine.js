// engine.js: game logic only. No DOM, no alerts, no logging.
var Game = (function () {
  var METERS = ["oxygen", "food", "energy", "morale"];
  var MAX_WEEKS = 100;
  var MC_MIN_GAP = 10;   // Mission Control card every 10..15 weeks
  var MC_EXTRA = 5;
  var MAX_SCALE = 0.3;   // negative effects grow up to +30% by week 100

  // ----- private state -----
  var state = { oxygen: 50, food: 40, energy: 50, morale: 50, week: 1 };
  var regular = { cards: [], pos: 0 };  // normal cards
  var mcDeck = { cards: [], pos: 0 };   // rare Mission Control cards
  var nextMcWeek = 0;     // week from which a Mission Control card may appear
  var current = null;     // card currently shown
  var last = null;        // last card returned
  var over = false;       // true after a losing ending
  var won = false;        // true after victory (game may continue)
  var finalKey = null;

  // Fisher-Yates shuffle (in place)
  function shuffle(arr) {
    for (var i = arr.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = arr[i]; arr[i] = arr[j]; arr[j] = t;
    }
    return arr;
  }

  // Mission Control cards are detected by the speaker name
  function isMC(card) {
    return String(card.who).indexOf("Mission Control") !== -1;
  }

  // Draw a card: never the same card twice, avoid the same speaker in a row
  function draw(d) {
    for (var attempt = 0; attempt < 2; attempt++) {
      if (d.pos >= d.cards.length) { shuffle(d.cards); d.pos = 0; }
      var pick = -1, soft = -1;
      for (var i = d.pos; i < d.cards.length; i++) {
        var c = d.cards[i];
        if (c === last) continue;                          // same card
        if (last && c.who === last.who) {                  // same speaker
          if (soft < 0) soft = i;
          continue;
        }
        pick = i; break;
      }
      if (pick < 0) pick = soft;       // only same-speaker cards left: allow
      if (pick >= 0) {
        var t = d.cards[d.pos]; d.cards[d.pos] = d.cards[pick]; d.cards[pick] = t;
        return d.cards[d.pos++];
      }
      d.pos = d.cards.length;          // only "last" remained: reshuffle, retry
    }
    d.pos = 1;                         // one-card pool: nothing else to show
    return d.cards[0];
  }

  // Rising difficulty: negative effects grow from x1.0 (week 1) to x1.3 (week 100+)
  function scaled(v) {
    if (v >= 0) return v;
    var w = Math.min(state.week - 1, MAX_WEEKS - 1);
    return Math.round(v * (1 + MAX_SCALE * w / (MAX_WEEKS - 1)));
  }

  function clamp(v) { return Math.max(0, Math.min(100, v)); }

  // Ending key if any meter hit 0 or 100, else null
  function checkEnding() {
    for (var i = 0; i < METERS.length; i++) {
      var m = METERS[i];
      if (state[m] <= 0) return m + "_low";
      if (state[m] >= 100) return m + "_high";
    }
    return null;
  }

  return {
    // Reset the game and build the decks
    start: function () {
      state = { oxygen: 50, food: 40, energy: 50, morale: 50, week: 1 };
      current = null; last = null; over = false; won = false; finalKey = null;
      var all = CARDS_A.concat(CARDS_B);
      mcDeck.cards = shuffle(all.filter(isMC));
      regular.cards = shuffle(all.filter(function (c) { return !isMC(c); }));
      if (regular.cards.length === 0) regular.cards = shuffle(all.slice()); // fallback
      mcDeck.pos = 0; regular.pos = 0;
      nextMcWeek = MC_MIN_GAP + Math.floor(Math.random() * (MC_EXTRA + 1));
    },

    // Copy of the state (week can be above 100 after victory)
    getState: function () {
      return {
        oxygen: state.oxygen, food: state.food,
        energy: state.energy, morale: state.morale, week: state.week
      };
    },

    // Next card; occasionally a Mission Control card
    nextCard: function () {
      var useMc = mcDeck.cards.length > 0 && state.week >= nextMcWeek;
      if (useMc) {
        nextMcWeek = state.week + MC_MIN_GAP + Math.floor(Math.random() * (MC_EXTRA + 1));
      }
      current = draw(useMc ? mcDeck : regular);
      last = current;
      return current;
    },

    // Apply the chosen side, check endings, advance the week
    choose: function (side) {
      if (over) return { gameOver: true, endingKey: finalKey };
      if (!current || (side !== "left" && side !== "right")) {
        return { gameOver: false, endingKey: null };
      }

      var effects = current[side].effects || {};
      for (var i = 0; i < METERS.length; i++) {
        var m = METERS[i];
        state[m] = clamp(state[m] + scaled(Number(effects[m]) || 0));
      }

      var key = checkEnding();
      if (!key) {
        state.week += 1;
        // "victory" is returned only once; the game can go on afterwards
        if (state.week > MAX_WEEKS && !won) { won = true; key = "victory"; }
      }

      current = null;
      if (key === "victory") return { gameOver: true, endingKey: key };
      if (key) { over = true; finalKey = key; return { gameOver: true, endingKey: key }; }
      return { gameOver: false, endingKey: null };
    }
  };
})();