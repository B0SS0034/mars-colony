
// ENDINGS: shown by the UI when Game.choose() returns an endingKey.
// One entry per key: 8 meter endings (low/high) plus "victory".
const ENDINGS = {
  oxygen_low: { title: "Suffocation", text: "Scrubbers failed and oxygen dropped to zero." },
  oxygen_high: { title: "Flash Fire", text: "Pure oxygen ignited a fatal hab fire." },
  food_low: { title: "Starvation", text: "The greenhouses ran dry and famine took the colony." },
  food_high: { title: "Spoilage Plague", text: "Overstocked bio-vats bred a toxic mold." },
  energy_low: { title: "Deep Freeze", text: "Reactors went dark and Mars froze the domes." },
  energy_high: { title: "Grid Meltdown", text: "Overloaded capacitors ruptured the main hab." },
  morale_low: { title: "Mutiny", text: "The colonists locked you out of Command." },
  morale_high: { title: "Reckless Euphoria", text: "Overconfident crews ignored safety protocols." },
  victory: { title: "Supply Ship Docke", text: "You survived 100 weeks. Relief has landed on Mars." }
};
