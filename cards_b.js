const CARDS_B = [
  {
    id: "b_106",
    who: "Elena Voss, Chief Engineer",
    text: "Captain, the Sabatier reactor is leaking methane. Patch it with duct tape or shut it down for a full rebuild?",
    left:  { label: "Patch it",     effects: { oxygen: -10, energy: 10 }, result: "The hiss stops, though the air tastes faintly of swamp gas." },
    right: { label: "Full rebuild", effects: { oxygen: 15, energy: -15 }, result: "Clean fuel flows again after three cold days in the dark." }
  },
  {
    id: "b_107",
    who: "Dr. Amara Okafor, Colony Doctor",
    text: "Captain, cabin fever has half the night shift fighting over cards. Host a colony-wide talent show?",
    left:  { label: "Host show",    effects: { morale: 15, energy: -10 }, result: "Terrible poetry and zero-G juggling lift everyone's spirits." },
    right: { label: "Extra shifts", effects: { morale: -10, energy: 10 }, result: "Idle hands stay busy, though nobody smiles in the hallways." }
  },
  {
    id: "b_108",
    who: "Mei Tanaka, Botanist",
    text: "Captain, aphids hit the potato beds. Release our last predatory wasps or fumigate the greenhouse?",
    left:  { label: "Release wasps", effects: { food: 10, morale: -10 },             result: "The potatoes survive, though wasps now patrol the mess hall." },
    right: { label: "Fumigate",      effects: { food: -10, oxygen: -10, energy: 5 }, result: "The bugs die, along with half the week's oxygen-producing greens." }
  },
  {
    // Balance: "All fine" now costs food (no Earth rationing advice).
    id: "b_109",
    who: "Mission Control (Earth)",
    text: "Captain, there is a 14-minute signal delay today. Send a detailed crisis report or a short 'All fine'?",
    left:  { label: "Send report", effects: { energy: -10, morale: -5, food: 5 },  result: "Earth sends helpful rationing math, though locals feel micromanaged." },
    right: { label: "All fine",    effects: { morale: 10, energy: 5, food: -10 },  result: "You save dish power and skip Earth's rationing math, so the pantry suffers." }
  },
  {
    id: "b_110",
    who: "Lucas Vance, Ice Miner",
    text: "Captain, we hit a pocket of trapped CO2 in the north trench. Vent it outside or pipe it to the greenhouse?",
    left:  { label: "Vent outside", effects: { energy: 5, oxygen: -5 },             result: "Safe and quick, though Mei glares at you over dinner." },
    right: { label: "Pipe it in",   effects: { food: 15, oxygen: -10, energy: -5 }, result: "The tomatoes boom, while everyone else gets mild headaches." }
  },
  {
    id: "b_111",
    who: "Elena Voss, Chief Engineer",
    text: "Captain, your predecessor's private terminal just unlocked. Wipe the hard drive or read the encrypted logs?",
    left:  { label: "Wipe drive", effects: { energy: 5, morale: -10 },             result: "Extra storage freed up, and the mystery deepens." },
    right: { label: "Read logs",  effects: { morale: -15, oxygen: 5, energy: -5 }, result: "You find hidden air reserves\u2014and a very unsettling farewell note." }
  },
  {
    id: "b_112",
    who: "Clara Lindqvist, Colony Teacher",
    text: "Captain, the kids want to paint a mural on the main airlock bulkhead. Allow it or keep the steel bare?",
    left:  { label: "Allow mural", effects: { morale: 15, oxygen: -5 },  result: "A bright blue ocean covers the rust, though paint fumes linger." },
    right: { label: "Keep bare",   effects: { morale: -10, oxygen: 5 }, result: "Safety markings stay visible, and the corridor feels like a prison." }
  },
  {
    id: "b_113",
    who: "Dr. Amara Okafor, Colony Doctor",
    text: "Captain, vitamin D tablets are running low. Crank up the UV lamps in the hab or ration the pills?",
    left:  { label: "Crank UV",     effects: { energy: -15, morale: 10 }, result: "Fake sunshine warms the dome while the batteries weep." },
    right: { label: "Ration pills", effects: { morale: -10, energy: 5 },  result: "Winter gloom settles in, even under the pink Martian sky." }
  },
  {
    id: "b_114",
    who: "Samir Patel, Colony Cook",
    text: "Captain, the flour mill broke. Serve boiled soy mash all week or burn extra power running the backup grinder?",
    left:  { label: "Soy mash",       effects: { food: 5, morale: -15, energy: 5 }, result: "Nobody starves, though three colonists threaten to eat their boots." },
    right: { label: "Backup grinder", effects: { energy: -15, morale: 10 },         result: "Fresh bread saves the week, at the cost of brownouts in Sector B." }
  },
  {
    id: "b_115",
    who: "Mateo Silva, Rover Pilot",
    text: "Captain, telemetry shows a cargo pod from the lost supply ship crashed 40 clicks east. Mount an expedition?",
    left:  { label: "Leave it",   effects: { energy: 10, morale: -15 },            result: "Too risky, you say, and half the mess hall stops speaking to you." },
    right: { label: "Mount trip", effects: { energy: -20, oxygen: -10, food: 20 }, result: "Two rovers limp back loaded with freeze-dried rations and spare parts." }
  },
  {
    id: "b_116",
    who: "Elena Voss, Chief Engineer",
    text: "Captain, fine perchlorate dust is eating our spacesuit seals. Wash them with precious water or brush them dry?",
    left:  { label: "Wash suits", effects: { oxygen: -10, food: -5, energy: 5 }, result: "The seals stay supple, though drinking water drops a notch." },
    right: { label: "Brush dry",  effects: { oxygen: -15, morale: 5 },           result: "Quick cleanup, until two suits spring slow leaks on Tuesday." }
  },
  {
    id: "b_117",
    who: "Mei Tanaka, Botanist",
    text: "Captain, the bamboo shoots are growing faster than we can eat them. Weave furniture or compost them?",
    left:  { label: "Weave chairs", effects: { morale: 10, food: -5 },            result: "Real chairs replace plastic crates in the lounge." },
    right: { label: "Compost",      effects: { food: 10, oxygen: 5, morale: -5 }, result: "Rich soil boosts the next crop, though everyone still sits on boxes." }
  },
  {
    id: "b_118",
    who: "Mission Control (Earth)",
    text: "Captain, a university on Earth wants us to run a 48-hour seismograph test. Dedicate power to their science?",
    left:  { label: "Run test", effects: { energy: -10, morale: 5 },  result: "Earth praises our data; the heaters drop two degrees." },
    right: { label: "Decline",  effects: { energy: 10, morale: -10 }, result: "Warm bunks tonight, and a frosty message from Houston." }
  },
  {
    // Fix: left result shortened to one sentence.
    id: "b_119",
    who: "Dr. Amara Okafor, Colony Doctor",
    text: "Captain, someone has been sneaking fermented potato juice out of the bio-lab. Confiscate it or look away?",
    left:  { label: "Confiscate", effects: { morale: -15, oxygen: 5 },  result: "You pour it into the water recycler, and the grumbling lasts a week." },
    right: { label: "Look away",  effects: { morale: 10, energy: -10 }, result: "Laughter echoes in the tunnels, followed by a very slow Friday shift." }
  },
  {
    // Balance: "Use spare" costs more morale, "Heater coils" gives more oxygen.
    id: "b_120",
    who: "Lucas Vance, Ice Miner",
    text: "Captain, the drill bit snapped on a basalt vein. Use our last titanium spare or melt the ice with heater coils?",
    left:  { label: "Use spare",    effects: { energy: 5, oxygen: 10, morale: -10 }, result: "Water flows again, though Elena reminds you there are no more spares." },
    right: { label: "Heater coils", effects: { energy: -15, oxygen: 15 },           result: "Slow and power-hungry, but the last drill bit stays in the vault." }
  },
  {
    // Rewritten: real dilemma (morale now vs food later) and a 2-word label.
    id: "b_121",
    who: "Samir Patel, Colony Cook",
    text: "Captain, your vanished predecessor left twenty cans of spicy sardines. Raffle them off or stash them?",
    left:  { label: "Raffle off", effects: { morale: 15 },            result: "Lucky winners feast like kings; losers smell fish for three days." },
    right: { label: "Stash them", effects: { food: 10, morale: -5 },  result: "The cans join the pantry, and the crew eyes the locked door." }
  },
  {
    id: "b_122",
    who: "Elena Voss, Chief Engineer",
    text: "Captain, a micrometeorite punctured Storage Bay 4. Seal the whole bay or suit up to rescue the crates?",
    left:  { label: "Seal bay",    effects: { food: -10, oxygen: 5 },             result: "Air pressure holds steady, though fifty crates of oats freeze solid." },
    right: { label: "Rescue gear", effects: { oxygen: -15, food: 5, morale: -5 }, result: "Frozen fingers save the oats as emergency doors slam shut." }
  },
  {
    // Balance: "Go digital" now gives morale (kids like it).
    id: "b_123",
    who: "Clara Lindqvist, Colony Teacher",
    text: "Captain, the colony's only printer is out of paper for schoolwork. Recycle old mission manuals or go digital?",
    left:  { label: "Use manuals", effects: { morale: 5, oxygen: -5 },  result: "Kids learn math on the backs of outdated thruster diagrams." },
    right: { label: "Go digital",  effects: { energy: -10, morale: 5 }, result: "Tablets drain the grid, but the kids love the interactive lessons." }
  },
  {
    id: "b_124",
    who: "Mei Tanaka, Botanist",
    text: "Captain, we can cross-breed a fast-growing dwarf wheat, but it needs twice the grow-lamp hours. Approve it?",
    left:  { label: "Approve", effects: { food: 15, energy: -15 }, result: "Golden stalks crowd the trays while the corridor lights dim." },
    right: { label: "Reject",  effects: { food: -5, energy: 10 },  result: "Power stays green, though the pantry shelves look awfully wide." }
  },
  {
    id: "b_125",
    who: "Mateo Silva, Rover Pilot",
    text: "Captain, a dust devil is spinning straight toward the comms dish. Retract the dish or keep downloading Earth news?",
    left:  { label: "Retract dish", effects: { morale: -10, energy: 5 },  result: "The dish survives unscathed, though everyone misses the weekend movie." },
    right: { label: "Keep online",  effects: { morale: 10, energy: -15 }, result: "The movie downloads just before static\u2014and a bent motor\u2014cut the feed." }
  },
  {
    // Balance: "Stay put" now costs food (sick bay eats rations).
    id: "b_126",
    who: "Dr. Amara Okafor, Colony Doctor",
    text: "Captain, radiation levels spiked overnight. Move everyone into the cramped central shelter for two days?",
    left:  { label: "Shelter all", effects: { morale: -15, energy: -5, oxygen: -5 }, result: "150 people sharing two toilets tests the limits of human diplomacy." },
    right: { label: "Stay put",    effects: { morale: 5, oxygen: 5, food: -10 },     result: "Everyone keeps their bunks, but radiation sickness floods the sick bay and eats our rations." }
  },
  {
    id: "b_127",
    who: "Mission Control (Earth)",
    text: "Captain, reporters on Earth want an interview about the missing supply ship. Speak live or send written answers?",
    left:  { label: "Speak live", effects: { energy: -10, morale: 10 }, result: "Your calm voice reassures Earth\u2014and makes the crew proud." },
    right: { label: "Send text",  effects: { energy: 5, morale: -10 },  result: "Careful words avoid mistakes, though rumors swirl about why you hid." }
  },
  {
    id: "b_128",
    who: "Elena Voss, Chief Engineer",
    text: "Captain, the greywater filtration tank is clogged with hair and lint. Shut down showers for a week to clear it?",
    left:  { label: "No showers", effects: { oxygen: 10, morale: -15 },   result: "The pipes run clear again, though nobody stands close in the mess." },
    right: { label: "Keep open",  effects: { oxygen: -10, energy: -10 }, result: "Hot showers continue while the pumps groan under double load." }
  },
  {
    id: "b_129",
    who: "Samir Patel, Colony Cook",
    text: "Captain, we have enough yeast to bake a cake for the colony's 500th Sol anniversary. Worth the flour?",
    left:  { label: "Bake cake",  effects: { morale: 15, food: -10 }, result: "One tiny square each tastes like home on a red desert." },
    right: { label: "Save flour", effects: { food: 10, morale: -10 }, result: "Sensible, safe, and celebrated with a cup of lukewarm water." }
  },
  {
    id: "b_130",
    who: "Lucas Vance, Ice Miner",
    text: "Captain, we found boot prints near the old beacon\u2014going away from the dome, not toward it. Follow them?",
    left:  { label: "Follow trail", effects: { energy: -15, oxygen: -10, morale: 10 }, result: "The tracks vanish at a cliff edge, leaving a cold chill in the cab." },
    right: { label: "Ignore it",    effects: { morale: -15, energy: 5 },               result: "You order the miners back to work, but nobody sleeps soundly." }
  }
];

// ENDINGS: shown by the UI when Game.choose() returns an endingKey.
// One entry per key: 8 meter endings (low/high) plus "victory".
const ENDINGS = {
  oxygen_low: { title: "Final Breath", text: "The air scrubbers sigh and fall silent. In the last moments, the colony holds hands in the dark. At least the view of the red dust was nice." },
  oxygen_high: { title: "A Spark of Genius", text: "A single spark from a loose wire meets the oxygen-rich air. The colony doesn't just go out; it goes up with a very brief, very bright bang." },
  food_low: { title: "Empty Plates", text: "The last potato was split 150 ways. The mess hall is quiet. It turns out humans are not a renewable resource." },
  food_high: { title: "The Great Mold", text: "Too much food, not enough preservatives. A massive, fuzzy green monster consumes the greenhouse. It's the only thing on Mars that's actually thriving." },
  energy_low: { title: "Total Blackout", text: "The reactor dies, and the heaters stop. The colony freezes over in a silent, dark Martian night. At least the electricity bill is zero." },
  energy_high: { title: "Power Surge", text: "The reactor goes critical for three glorious seconds. The resulting EMP wipes out every system. We now live in a high-tech sandbox." },
  morale_low: { title: "Mutiny", text: "The crew has decided they can run this colony better than you. They voted, and you're now on permanent toilet duty. If they let you live." },
  morale_high: { title: "Reckless Optimism", text: "Everyone is so happy they forget to wear helmets. The colony is now a very cheerful, albeit airless, utopia." },
  victory: { title: "Contact", text: "A blip appears on the radar. The supply ship is finally here. You survived 100 weeks, and you didn't even have to eat anyone. Good job, Captain." }
};

// INTRO: shown on the start screen.
const INTRO = {
  title: "The Silent Red",
  text: "A Mars colony of 150 souls relies on Earth's supply ships every two years. This time, the ship never arrived, and food is running dangerously low. Our previous captain vanished without a trace, leaving only questions. The colonists have elected you as the new Captain. Keep us alive."
};