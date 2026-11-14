// Temporary test mock — remove once cards_a.js, cards_b.js, and engine.js are ready
const INTRO = {
  title: "ARES-4: NO RELIEF",
  text: "The Earth supply ship never arrived, and the previous Captain has vanished. Lead 150 colonists through 100 Martian weeks until the next transfer window."
};

const ENDINGS = {
  oxygen_low: { title: "Suffocation", text: "Scrubbers failed and oxygen dropped to zero." },
  oxygen_high: { title: "Flash Fire", text: "Pure oxygen ignited a fatal hab fire." },
  food_low: { title: "Starvation", text: "The greenhouses ran dry and famine took the colony." },
  food_high: { title: "Spoilage Plague", text: "Overstocked bio-vats bred a toxic mold." },
  energy_low: { title: "Deep Freeze", text: "Reactors went dark and Mars froze the domes." },
  energy_high: { title: "Grid Meltdown", text: "Overloaded capacitors ruptured the main hab." },
  morale_low: { title: "Mutiny", text: "The colonists locked you out of Command." },
  morale_high: { title: "Reckless Euphoria", text: "Overconfident crews ignored safety protocols." },
  victory: { title: "Supply Ship Docked", text: "You survived 100 weeks. Relief has landed on Mars." }
};
