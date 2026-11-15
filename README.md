# Mars Colony: 100 Weeks to Survival

A browser-based, Reigns-style narrative strategy game built for the **2026 NASA Space Apps Challenge**.

🚀 **Play the game:** [https://b0ss0034.github.io/mars-colony/](https://b0ss0034.github.io/mars-colony/)  
💻 **Repository:** [https://github.com/B0SS0034/mars-colony](https://github.com/B0SS0034/mars-colony)

---

## About the Game
A Martian colony of 150 people depends on supply ships from Earth that arrive only once every two years—when the planetary transfer window opens. This time, the supply ship never arrived, and the previous commander vanished without a trace.

Elected as the new **Captain**, you must manage dwindling rations, failing life-support systems, and crew morale. Every decision has a cost. Survive **100 Martian weeks** until the next launch window opens, or watch the colony fall to one of 8 catastrophic endings.

## How to Play
* **Swipe Left or Right** (or use the `←` / `→` arrow keys) on incoming problem cards to make a decision.
* **Watch the Meters:** Dragging a card highlights which of the four vital resources will be affected (**Oxygen**, **Food**, **Energy**, **Morale**), though the exact impact remains hidden.
* **Keep the Balance:** If *any* meter hits **0** or **100** (e.g., an oxygen-rich atmosphere causing a fire, or reckless overconfidence leading to safety violations), the game ends.
* **Goal:** Reach **Week 100** to secure the next supply shipment from Earth.

## NASA Challenge & Scientific Accuracy
* **Challenge:** [Junior Astronaut Mission Trainer (NASA Space Apps 2026)](https://www.spaceappschallenge.org/2026/challenges/junior-astronaut-mission-trainer/)
* **Martian Reality:** Designed as an interactive mission-training simulator, the game grounds every crisis in real Martian environmental and orbital constraints:
  * **Transfer Windows & Time:** 1 turn equals 1 Martian week (7 sols, ~24h 39m each). Surviving 100 weeks (~719 Earth days) reflects the ~26-month synodic period between Earth–Mars launch opportunities.
  * **Water & Atmospheric Loss:** Resource dilemmas reflect Mars's thin atmosphere, water scarcity, and ongoing atmospheric escape dynamics.
  * **Surface Hazards:** Events incorporate dust storms blocking solar arrays, radiation exposure, and communication delays between Mars and Mission Control.
* **NASA Data & Sources:**
  * [Mars Facts & Planetary Data – NASA Science](https://science.nasa.gov/mars/facts/)
  * [NASA's Hubble & MAVEN Help Solve the Mystery of Mars' Escaping Water – NASA Science](https://science.nasa.gov/solar-system/planets/mars/nasas-hubble-maven-help-solve-the-mystery-of-mars-escaping-water/)

## Tech Stack & Architecture
Built with zero external dependencies, frameworks, or build steps so it runs directly in any browser and via GitHub Pages:
* `index.html` & `style.css` — Mobile-first responsive UI with a dark Martian theme.
* `engine.js` — Core state machine, deck shuffling, and ending conditions.
* `ui.js` — Touch/mouse swipe physics, keyboard controls, and DOM rendering.
* `cards_a.js` & `cards_b.js` — Event decks, intro narrative, and 9 ending scenarios.

## Team & AI Disclosure
Built for the NASA Space Apps Challenge by our team of 4:
* **Serhii Shamian** — Game Engine & Architecture (`engine.js`)
* **David Sakulov** — UI/UX, Swipe Mechanics & Styling (`ui.js`, `style.css`)
* **Maksym Katrevych** — Survival & Infrastructure Events (`cards_a.js`)
* **Ivan Bezrukov** — Narrative, Crew Events, Endings & Documentation (`cards_b.js`, `README.md`)

**AI Tools Used:** In accordance with hackathon guidelines, we used **Claude** to assist with JavaScript code generation and contract validation, and **Gemini** to brainstorm and format event cards based on our custom game balance rules.