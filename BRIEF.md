PROJECT
We are a team of 4 building a browser game for the NASA Space Apps Challenge: a Reigns-style swipe card game about leading a Mars colony. Everything in the project must be in English: code comments, UI text, card text.

STORY
A Mars colony of about 150 people depends on supply ships from Earth that arrive only once every two years, because the transfer window opens that rarely. This time the supply ship never arrived. The previous captain has vanished without a trace, and the colonists have just elected the player as the new Captain. Food is running short, and every week new problems land on the Captain's desk. If the colony survives 100 weeks, the next supply window opens and the game is won.

GAME RULES
- The player is the Captain. Each turn (one Martian week, 7 sols), a colonist, a specialist or Mission Control shows a card with a problem and two choices.
- The player swipes the card left or right. Each choice changes some of four meters: oxygen, food, energy, morale.
- Each meter is 0-100. All start at 50, except food, which starts at 40. If any meter reaches 0 or 100, the game ends (8 different endings). The goal is balance.
- One card = one week. Surviving 100 weeks wins the game (ending "victory").
- While the player drags a card, the UI highlights which meters the choice affects (no numbers, no direction).

CAST (speakers for cards)
Elena Voss, Chief Engineer; Dr. Amara Okafor, Colony Doctor; Mei Tanaka, Botanist; Mission Control (Earth). Other colonists (a cook, a miner, a teacher, a pilot) are allowed.

TECH
Plain HTML, CSS and JavaScript. No frameworks, no libraries, no build step, no network requests. It must work by opening index.html directly and on GitHub Pages. Files: index.html, style.css, engine.js, ui.js, cards_a.js, cards_b.js. Scripts load in this order: cards_a.js, cards_b.js, engine.js, ui.js. Use global variables, no import/export.

CONTRACT (do not change it)
Card: { id, who, text, left: { label, effects, result }, right: { label, effects, result } }
- id: unique string; starts with "a_" in cards_a.js and "b_" in cards_b.js
- who: speaker name and role from the CAST
- text: up to 140 characters, addressed to the Captain
- label: up to 3 words
- effects: object with any of oxygen, food, energy, morale; integers from -25 to 25 (typically 5-15)
- result (optional): one short sentence shown after the choice
Data: CARDS_A (in cards_a.js) and CARDS_B (in cards_b.js) are arrays of cards.
INTRO (in cards_b.js) is { title, text }, shown on the start screen.
ENDINGS (in cards_b.js) is an object with keys oxygen_low, oxygen_high, food_low, food_high, energy_low, energy_high, morale_low, morale_high, victory. Each value is { title, text }.
Engine API (engine.js):
  Game.start()                  resets the game
  Game.getState()               returns { oxygen, food, energy, morale, week }
  Game.nextCard()               returns the next card object
  Game.choose("left"|"right")   applies the choice, returns { gameOver, endingKey } (endingKey is null while the game goes on)
The UI uses ONLY these functions and variables. The engine never touches the DOM.

HOW TO ANSWER
Be concise. For a new file give the complete code. For later changes give only the changed functions or lines and say where they go. Never rename anything from the contract and never add libraries. If my request conflicts with the contract, tell me instead of changing the contract. Add short English comments.
