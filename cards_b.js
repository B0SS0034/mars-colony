const CARDS_B = [
  {
    id: "b_106",
    bg: "surface",
    image: "images/cards/b_106.jpg",
    who: "Mateo Silva, Rover Pilot",
    text: "Captain, I swear I saw glowing green figures watching me by the crater rim! Should we lock down the airlocks?",
    left: {
      label: "Lock down",
      effects: { oxygen: -10, morale: -10 },
      result: "Turns out it was just static sparks on a stuck weather balloon."
    },
    right: {
      label: "Go look",
      effects: { energy: -10, morale: 5 },
      result: "We drove out and found a fallen reflector pole. Very spooky."
    }
  },
  {
    id: "b_107",
    bg: "greenhouse",
    image: "images/cards/b_107.jpg",
    who: "Samir Patel, Colony Cook",
    text: "Captain, we're out of spices, so dinner tastes like wet cardboard. Use our emergency hot sauce or tell them to chew slower?",
    left: {
      label: "Break glass",
      effects: { morale: 15, food: -5 },
      result: "Three drops of habanero per bowl makes everyone cry happy tears."
    },
    right: {
      label: "Chew slower",
      effects: { morale: -15, food: 5 },
      result: "Dinner is silent, miserable, and remarkably good for digestion."
    }
  },
  {
    id: "b_108",
    bg: "surface",
    image: "images/cards/b_108.jpg",
    who: "Elena Voss, Chief Engineer",
    text: "Captain, we pried open the vanished captain's secret floor safe! Crack it open or leave the mystery intact?",
    left: {
      label: "Crack it",
      effects: { energy: -10, morale: 10 },
      result: "Inside: three terrible sci-fi novels and six packs of expired ramen."
    },
    right: {
      label: "Leave it",
      effects: { morale: -10, energy: 5 },
      result: "Everyone assumes it's gold bars and gets mad you won't share."
    }
  },
  {
    id: "b_109",
    bg: "surface",
    image: "images/cards/b_109.jpg",
    who: "Dr. Amara Okafor, Colony Doctor",
    text: "Captain, someone glued giant googly eyes onto every medical scanner in the infirmary. Scrape them off?",
    left: {
      label: "Scrape off",
      effects: { morale: -10, energy: 5 },
      result: "The medbay looks professional again, and everyone hates you a little."
    },
    right: {
      label: "Keep eyes",
      effects: { morale: 10, oxygen: -5 },
      result: "Patients giggle during checkups, though one eye fell in an air vent."
    }
  },
  {
    id: "b_110",
    bg: "greenhouse",
    image: "images/cards/b_110.jpg",
    who: "Mei Tanaka, Botanist",
    text: "Captain, the hydroponic tomatoes are making weird whistling noises. Run diagnostics or just eat them faster?",
    left: {
      label: "Diagnostics",
      effects: { energy: -10, oxygen: 5 },
      result: "False alarm—it's just air bubbles squeaking through a clogged pipe."
    },
    right: {
      label: "Eat fast",
      effects: { food: 10, morale: -5 },
      result: "Salad night is a hit, even if everyone stares nervously at their bowls."
    }
  },
  {
    id: "b_111",
    bg: "surface",
    image: "images/cards/b_111.jpg",
    who: "Mission Control (Earth)",
    text: "Captain, the 14-minute radio lag ruined our chess tournament with Houston. Spend dish power on turn-based checkers?",
    left: {
      label: "Play on",
      effects: { energy: -10, morale: 10 },
      result: "We're winning, mostly because Houston keeps forgetting whose turn it is."
    },
    right: {
      label: "Forfeit",
      effects: { energy: 10, morale: -10 },
      result: "Earth declares victory by default and sends a very smug emoji."
    }
  },
  {
    id: "b_112",
    bg: "surface",
    image: "images/cards/b_112.jpg",
    who: "Lucas Vance, Ice Miner",
    text: "Captain, we dug up a shiny rock that hums when you poke it. Put it in the lounge or drop it down a trench?",
    left: {
      label: "Lounge decor",
      effects: { morale: 10, energy: -5 },
      result: "It's just magnetized iron vibrating near the fridge, but it looks cool."
    },
    right: {
      label: "Toss it",
      effects: { morale: -10, oxygen: 5 },
      result: "You threw away a perfectly good paperweight, and the miners pout."
    }
  },
  {
    id: "b_113",
    bg: "surface",
    image: "images/cards/b_113.jpg",
    who: "Mission Control (Earth)",
    text: "Captain, we picked up a faint beacon from the missing supply ship! Burn extra dish power to decode it?",
    left: {
      label: "Decode it",
      effects: { energy: -15, morale: -10 },
      result: "It's just a dead satellite bouncing our own weather reports back at us."
    },
    right: {
      label: "Ignore ping",
      effects: { energy: 5, morale: -5 },
      result: "Smart move—probably space junk anyway, though nobody likes hearing that."
    }
  },
  {
    id: "b_114",
    bg: "surface",
    image: "images/cards/b_114.jpg",
    who: "Clara Lindqvist, Colony Teacher",
    text: "Captain, the kids started an underground market trading flavored oxygen mints. Bust the cartel or tax it?",
    left: {
      label: "Bust cartel",
      effects: { morale: -10, oxygen: 5 },
      result: "Candy confiscated, recess canceled, and ten tiny mobsters glare at you."
    },
    right: {
      label: "Tax mints",
      effects: { morale: 5, food: 5 },
      result: "You get a 20% cut of the peppermint stash and look cool doing it."
    }
  },
  {
    id: "b_115",
    bg: "surface",
    image: "images/cards/b_115.jpg",
    who: "Elena Voss, Chief Engineer",
    text: "Captain, something is rhythmically knocking on the outer hull at 3 AM! Send an armed team or hide under the blankets?",
    left: {
      label: "Suit up",
      effects: { oxygen: -10, energy: -5, morale: 5 },
      result: "No little green men—just a loose solar panel banging in the wind."
    },
    right: {
      label: "Stay inside",
      effects: { morale: -15, energy: 5 },
      result: "Nobody sleeps a wink, even after Elena proves it's just thermal expansion."
    }
  },
  {
    id: "b_131",
    bg: "surface",
    image: "images/cards/b_131.jpg",
    who: "Mateo Silva, Rover Pilot",
    text: "Captain, seeing Earth as a tiny blue dot makes me feel terribly lonely out here. Tell me straight: is it bad or good?",
    left: {
      label: "It's bad",
      effects: { morale: -10, oxygen: 5 },
      result: "You admit space isolation wears people down, so everyone double-checks seals."
    },
    right: {
      label: "It's good",
      effects: { morale: 10, energy: -5 },
      result: "You note that if Earth blows itself up, we still get twenty peaceful minutes before the radio signal hits."
    }
  },
  {
    id: "b_132",
    bg: "greenhouse",
    image: "images/cards/b_132.jpg",
    who: "Mei Tanaka, Botanist",
    text: "Captain, Martian dirt is full of toxic perchlorates. Rinse it with precious water or try growing hardy weeds?",
    left: {
      label: "Rinse soil",
      effects: { food: 15, oxygen: -10 },
      result: "Washing out the chlorine salts lets potatoes thrive, though water reserves dip."
    },
    right: {
      label: "Plant as-is",
      effects: { food: -10, morale: -5 },
      result: "The plants absorb thyroid-poisoning salts and have to be burned immediately."
    }
  },
  {
    id: "b_133",
    bg: "surface",
    image: "images/cards/b_133.jpg",
    who: "Elena Voss, Chief Engineer",
    text: "Captain, Mars air is 95% CO2 and barely 2% nitrogen. Pump extra argon into the hab to keep air pressure up?",
    left: {
      label: "Use argon",
      effects: { oxygen: 10, energy: -10 },
      result: "Inert argon stabilЁizes pressure safely, though compressing thin air drains batteries."
    },
    right: {
      label: "Pure oxygen",
      effects: { oxygen: 15, morale: -10 },
      result: "Breathing feels easy, yet fire risk spikes so high we ban all hot cooking."
    }
  },
  {
    id: "b_134",
    bg: "surface",
    image: "images/cards/b_134.jpg",
    who: "Mission Control (Earth)",
    text: "Captain, the Sun is moving between Earth and Mars, scrambling radio waves for two weeks. Send final supply pleas?",
    left: {
      label: "Beam data",
      effects: { energy: -10, morale: 5 },
      result: "We blast our manifest before solar plasma blocks every frequency until next month."
    },
    right: {
      label: "Save power",
      effects: { energy: 10, morale: -10 },
      result: "Two weeks of total radio silence makes the missing supply ship feel even farther."
    }
  },
  {
    id: "b_135",
    bg: "surface",
    image: "images/cards/b_135.jpg",
    who: "Clara Lindqvist, Colony Teacher",
    text: "Captain, colonists are begging Earth to launch a rescue ship next week. Explain orbital mechanics or keep hope alive?",
    left: {
      label: "Explain math",
      effects: { morale: -10, food: 10 },
      result: "Learning Earth and Mars only align every 26 months hurts, yet rationing gets serious."
    },
    right: {
      label: "Keep hope",
      effects: { morale: 10, food: -10 },
      result: "People eat normally today, blissfully ignoring how Hohmann transfer windows work."
    }
  },
  {
    id: "b_136",
    bg: "surface",
    image: "images/cards/b_136.jpg",
    who: "Dr. Amara Okafor, Colony Doctor",
    text: "Captain, solar storm incoming. Line the shelter with lead plates or stack our water tanks around the walls?",
    left: {
      label: "Stack water",
      effects: { oxygen: -5, morale: 10 },
      result: "Hydrogen-rich water blocks cosmic rays cleanly, though plumbing gets cramped."
    },
    right: {
      label: "Use lead",
      effects: { morale: -10, energy: 5 },
      result: "Heavy cosmic rays hit lead and spray secondary radiation, leaving everyone nauseous."
    }
  },
  {
    id: "b_137",
    bg: "surface",
    image: "images/cards/b_137.jpg",
    who: "Dr. Amara Okafor, Colony Doctor",
    text: "Captain, a Martian Sol is 39 minutes longer than an Earth day. Stretch our clocks or keep 24-hour schedules?",
    left: {
      label: "Mars time",
      effects: { morale: 10, energy: -10 },
      result: "Adding 39 minutes daily cures insomnia, though power shifts confuse the grid."
    },
    right: {
      label: "Earth time",
      effects: { energy: 5, morale: -10 },
      result: "Keeping 24-hour clocks feels like permanent jet lag as sunrise drifts each week."
    }
  },
  {
    id: "b_138",
    bg: "surface",
    image: "images/cards/b_138.jpg",
    who: "Elena Voss, Chief Engineer",
    text: "Captain, Phobos is passing across the Sun right now, dipping solar output for 30 seconds. Switch to backup cells?",
    left: {
      label: "Switch cells",
      effects: { energy: -5, morale: 5 },
      result: "Smooth power, and everyone crowds the windows to watch potato-shaped Phobos transit."
    },
    right: {
      label: "Ride it out",
      effects: { energy: -10, morale: 5 },
      result: "Lights flicker briefly as Mars's fastest moon races backward across the sky."
    }
  },
  {
    id: "b_139",
    bg: "surface",
    image: "images/cards/b_139.jpg",
    who: "Lucas Vance, Ice Miner",
    text: "Captain, dry Martian dust storms build huge static charges on our rovers. Ground them with copper chains?",
    left: {
      label: "Add chains",
      effects: { energy: -5, oxygen: 5 },
      result: "Dragging chains bleeds off triboelectric volts before sparks fry our air valves."
    },
    right: {
      label: "Keep driving",
      effects: { energy: -15, morale: 5 },
      result: "A static arc jumps from a wheel and cooks the rover's main battery controller."
    }
  },
  {
    id: "b_140",
    bg: "surface",
    image: "images/cards/b_140.jpg",
    who: "Lucas Vance, Ice Miner",
    text: "Captain, we hauled raw ice blocks into an unpressurized shed to thaw, and they're vanishing without leaving puddles!",
    left: {
      label: "Seal shed",
      effects: { oxygen: 10, energy: -10 },
      result: "Pressurizing the room stops ice from sublimating straight into thin Martian air."
    },
    right: {
      label: "Leave open",
      effects: { oxygen: -15, energy: 5 },
      result: "Below the triple point of water, solid ice turns straight to gas and floats away."
    }
  },
  {
    id: "b_141",
    bg: "surface",
    image: "images/cards/b_141.jpg",
    who: "Dr. Amara Okafor, Colony Doctor",
    text: "Captain, low gravity pushes body fluids toward our heads, flattening eyeballs and blurring vision. Buy reading glasses?",
    left: {
      label: "Print lenses",
      effects: { energy: -10, morale: 10 },
      result: "3D-printed lenses fix the fluid-shift farsightedness so engineers can read gauges."
    },
    right: {
      label: "Squint hard",
      effects: { morale: -10, oxygen: -5 },
      result: "Headaches spread, and a blurry-eyed tech misreads a pressure dial by ten bars."
    }
  },
  {
    id: "b_142",
    bg: "surface",
    image: "images/cards/b_142.jpg",
    who: "Mateo Silva, Rover Pilot",
    text: "Captain, outside the hab, yelling ten meters away sounds muffled and weird in thin CO2. Mandate radio checks?",
    left: {
      label: "Radio checks",
      effects: { energy: -5, oxygen: 5 },
      result: "Good call—Mars's cold CO2 air swallows high-pitched voices within meters."
    },
    right: {
      label: "Hand signals",
      effects: { oxygen: -10, morale: 5 },
      result: "A diver misses a shouted warning in the thin air and drains his tank rushing back."
    }
  },
  {
    id: "b_143",
    bg: "surface",
    image: "images/cards/b_143.jpg",
    who: "Elena Voss, Chief Engineer",
    text: "Captain, our oxygen generator splits CO2 into O2 and carbon monoxide. Vent the CO outside or store it for fuel?",
    left: {
      label: "Vent outside",
      effects: { oxygen: 10, energy: -5 },
      result: "Dumping the toxic byproduct keeps hab air pure while oxygen tanks top off."
    },
    right: {
      label: "Store fuel",
      effects: { energy: 10, oxygen: -15 },
      result: "Great rocket propellant, until a leaky valve gives Sector C splitting headaches."
    }
  },
  {
    id: "b_144",
    bg: "surface",
    image: "images/cards/b_144.jpg",
    who: "Lucas Vance, Ice Miner",
    text: "Captain, we broke into an ancient basalt lava tube wide enough for a barracks. Move bunks underground?",
    left: {
      label: "Move bunks",
      effects: { morale: -10, oxygen: 10, energy: 5 },
      result: "Thick volcanic rock shields us from radiation and cold, though living in a cave stings."
    },
    right: {
      label: "Stay in dome",
      effects: { morale: 10, energy: -10 },
      result: "Everyone keeps their pink sky view while heaters burn extra power fighting night frost."
    }
  },
  {
    id: "b_145",
    bg: "surface",
    image: "images/cards/b_145.jpg",
    who: "Elena Voss, Chief Engineer",
    text: "Captain, a dust devil is heading straight for Solar Field B! Stash the panels or risk letting it blow past?",
    left: {
      label: "Leave panels",
      effects: { energy: 15, morale: -5 },
      result: "Just like the old rovers, the whirlwind sweeps off red dust and boosts watts 30%."
    },
    right: {
      label: "Fold arrays",
      effects: { energy: -10, oxygen: 5 },
      result: "Safe from flying pebbles, though the panels stay coated in light-blocking grime."
    }
  },
  {
    id: "b_146",
    bg: "greenhouse",
    image: "images/cards/b_146.jpg",
    who: "Mei Tanaka, Botanist",
    text: "Captain, silica aerogel tiles could warm the greenhouse using sunlight alone, no heaters needed. Install them?",
    left: {
      label: "Install tiles",
      effects: { energy: 15, food: 10, morale: -5 },
      result: "Solid-state greenhouse physics traps heat brilliantly, though the foam looks cloudy."
    },
    right: {
      label: "Keep glass",
      effects: { energy: -10, morale: 5 },
      result: "Clear views of green leaves lift spirits while electric heaters drain the grid."
    }
  },
  {
    id: "b_147",
    bg: "surface",
    image: "images/cards/b_147.jpg",
    who: "Elena Voss, Chief Engineer",
    text: "Captain, Martian dirt is rich in iron oxide—we can microwave it into solid bricks instead of using water cement!",
    left: {
      label: "Microwave dirt",
      effects: { energy: -15, oxygen: 10 },
      result: "Sintered basalt bricks seal cracked airlocks without wasting a single drop of water."
    },
    right: {
      label: "Save power",
      effects: { energy: 10, oxygen: -10 },
      result: "Batteries stay full, while old plaster patches crumble in the dry Martian air."
    }
  },
  {
    id: "b_148",
    bg: "surface",
    image: "images/cards/b_148.jpg",
    who: "Clara Lindqvist, Colony Teacher",
    text: "Captain, the kids are confused why Martian sunsets glow cool blue instead of red. Hold a science class outside?",
    left: {
      label: "Sunset class",
      effects: { morale: 10, oxygen: -5 },
      result: "Watching fine dust scatter red light and pass blue makes everyone love Mars a little."
    },
    right: {
      label: "Indoor lesson",
      effects: { oxygen: 5, morale: -5 },
      result: "Safe and warm, though drawing blue sunsets on tablets isn't quite the same."
    }
  },
  {
    id: "b_149",
    bg: "greenhouse",
    image: "images/cards/b_149.jpg",
    who: "Mei Tanaka, Botanist",
    text: "Captain, in 0.38g, water clings to plant roots instead of draining, drowning our crops. Run air pumps in the trays?",
    left: {
      label: "Run bubblers",
      effects: { food: 15, energy: -10 },
      result: "Aerating the water stops root suffocation, saving this month's soybean harvest."
    },
    right: {
      label: "Cut watering",
      effects: { food: -10, oxygen: 5 },
      result: "Capillary cling still rots half the roots, shrinking dinner portions yet again."
    }
  },
  {
    id: "b_150",
    bg: "surface",
    image: "images/cards/b_150.jpg",
    who: "Elena Voss, Chief Engineer",
    text: "Captain, winter at the south pole is freezing a quarter of Mars's atmosphere into dry ice, dropping outside pressure!",
    left: {
      label: "Reinforce seals",
      effects: { energy: -10, oxygen: 10 },
      result: "Higher pressure difference strains the dome, so extra clamps keep our air inside."
    },
    right: {
      label: "Ignore weather",
      effects: { oxygen: -15, energy: 5 },
      result: "The seasonal pressure drop pops two weak gaskets before anyone notices the hissing."
    }
  },
  {
    id: "b_151",
    bg: "surface",
    image: "images/cards/b_151.jpg",
    who: "Mateo Silva, Rover Pilot",
    text: "Captain, bare metal latches on the cargo trailer fused together in the near-vacuum! Use grease or Teflon liners?",
    left: {
      label: "Teflon liners",
      effects: { energy: -5, food: 5 },
      result: "Without oxygen to form oxide layers, bare steel cold-welds—Teflon saves the haul."
    },
    right: {
      label: "Heavy grease",
      effects: { energy: -10, morale: -5 },
      result: "Standard grease freezes solid at minus sixty, jamming the hatch with rations inside."
    }
  },
  {
    id: "b_152",
    bg: "surface",
    image: "images/cards/b_152.jpg",
    who: "Dr. Amara Okafor, Colony Doctor",
    text: "Captain, CO2 hit 0.4% in Command. Nobody is suffocating, yet decision scores are dropping. Boost scrubber fans?",
    left: {
      label: "Boost fans",
      effects: { oxygen: 10, energy: -10 },
      result: "Clearing mild hypercapnia sharpens everyone's focus before someone makes a fatal typo."
    },
    right: {
      label: "Leave fans",
      effects: { energy: 10, morale: -10 },
      result: "Brain fog spreads through the crew, leading to three clumsy accidents by Friday."
    }
  },
  {
    id: "b_153",
    bg: "surface",
    image: "images/cards/b_153.jpg",
    who: "Mateo Silva, Rover Pilot",
    text: "Captain, we spotted the vanished captain's beacon high up a volcano slope, too thin for drones to fly. Hike up?",
    left: {
      label: "Send climbers",
      effects: { oxygen: -15, energy: -10, morale: 10 },
      result: "Above 15 km, Mars air is near-vacuum for rotors, so climbers recover his logs by hand."
    },
    right: {
      label: "Abort search",
      effects: { morale: -15, oxygen: 5 },
      result: "You leave the beacon blinking in the thin mountain air, fueling wild rumors."
    }
  },
  {
    id: "b_154",
    bg: "surface",
    image: "images/cards/b_154.jpg",
    who: "Elena Voss, Chief Engineer",
    text: "Captain, a slow marsquake has been vibrating the floor for twenty minutes! Shut down the reactor as a precaution?",
    left: {
      label: "Scram reactor",
      effects: { energy: -15, oxygen: 5 },
      result: "With no plate tectonics to snap clean, cooling crust rumbles long—good thing we played safe."
    },
    right: {
      label: "Keep running",
      effects: { energy: 10, morale: -10 },
      result: "Power stays steady while everyone grips their bunks through forty minutes of shaking."
    }
  },
  {
    id: "b_155",
    bg: "greenhouse",
    image: "images/cards/b_155.jpg",
    who: "Samir Patel, Colony Cook",
    text: "Captain, with the supply ship gone, Mei wants to replace half our potatoes with fast-growing spirulina pond scum.",
    left: {
      label: "Grow algae",
      effects: { food: 15, oxygen: 10, morale: -15 },
      result: "Cyanobacteria pumps out huge oxygen and protein, even if every meal is neon green."
    },
    right: {
      label: "Keep potatoes",
      effects: { morale: 10, food: -10 },
      result: "Real fries keep spirits high, though calorie math looks grim by week eighty."
    }
  },
  {
    id: "b_156",
    bg: "surface",
    image: "images/cards/b_156.jpg",
    who: "Lucas Vance, Ice Miner",
    text: "Captain, we hit a pocket of liquid water at minus 50°C—it's packed with magnesium perchlorate salts! Pump it up?",
    left: {
      label: "Distill brine",
      effects: { oxygen: 15, energy: -15 },
      result: "Boiling off the antifreeze salts yields pure water, though the stills eat megawatts."
    },
    right: {
      label: "Seal pocket",
      effects: { energy: 5, oxygen: -5 },
      result: "Too corrosive for our pipes, so we cement it shut and keep chipping solid ice."
    }
  },
  {
    id: "b_157",
    bg: "surface",
    image: "images/cards/b_157.jpg",
    who: "Dr. Amara Okafor, Colony Doctor",
    text: "Captain, fine dust tracked past the airlock is chemically reactive—it's oxidizing rubber seals and irritating lungs.",
    left: {
      label: "Wet airlocks",
      effects: { oxygen: -10, morale: 10 },
      result: "Misting entrants neutralizes soil superoxides on contact, stopping the dry coughs."
    },
    right: {
      label: "Dry vacuums",
      effects: { oxygen: -5, energy: -5 },
      result: "Static dust still sneaks past filters, chewing through O-rings twice as fast."
    }
  },
  {
    id: "b_158",
    bg: "surface",
    image: "images/cards/b_158.jpg",
    who: "Mission Control (Earth)",
    text: "Captain, debris telemetry suggests the lost supply ship skipped off Mars's thin atmosphere during aerobraking.",
    left: {
      label: "Track orbit",
      effects: { energy: -10, food: 10 },
      result: "Calculating its elliptical orbit lets us salvage two intact cargo pods on reentry."
    },
    right: {
      label: "Close file",
      effects: { morale: -15, energy: 5 },
      result: "Accepting the ship burned up saves dish power, yet grief sweeps the mess hall."
    }
  },
  {
    id: "b_159",
    bg: "surface",
    image: "images/cards/b_159.jpg",
    who: "Dr. Amara Okafor, Colony Doctor",
    text: "Captain, bones only rebuild when subjected to sharp impacts, and Mars's 0.38g isn't enough. Mandate jump-rope drills?",
    left: {
      label: "Jump rope",
      effects: { morale: -5, energy: -5, oxygen: -5 },
      result: "High-impact hops trigger bone-building cells, though downstairs bunks hate the thuds."
    },
    right: {
      label: "Skip drills",
      effects: { morale: 5, energy: 5 },
      result: "Relaxed evenings today, while calcium quietly leaches from everyone's femurs."
    }
  },
  {
    id: "b_160",
    bg: "surface",
    image: "images/cards/b_160.jpg",
    who: "Clara Lindqvist, Colony Teacher",
    text: "Captain, my astronomy class noticed the vanished captain's last radio burst aimed straight at Deimos, not Earth.",
    left: {
      label: "Scan Deimos",
      effects: { energy: -10, morale: 10 },
      result: "Because Deimos orbits slowly near synchronous altitude, he used it as a steady relay."
    },
    right: {
      label: "Ignore quirk",
      effects: { morale: -10, energy: 5 },
      result: "You chalk it up to a bad antenna, leaving the kids whispering about secret bases."
    }
  },
  {
    id: "b_161",
    bg: "greenhouse",
    image: "images/cards/b_161.jpg",
    who: "Mei Tanaka, Botanist",
    text: "Captain, a piglet escaped the farm pen and is bouncing down Corridor B in low gravity! Chase it or lure it?",
    left: {
      label: "Chase it",
      effects: { morale: 15, oxygen: -5, energy: -5 },
      result: "Six engineers diving in 0.38g looks ridiculous, but Barnaby is back in his pen."
    },
    right: {
      label: "Bacon trail",
      effects: { food: -5, morale: 5 },
      result: "Using dried apple slices works fast, though the piglet looks mildly betrayed."
    }
  },
  {
    id: "b_162",
    bg: "surface",
    image: "images/cards/b_162.jpg",
    who: "Elena Voss, Chief Engineer",
    text: "Captain, someone flushed a contraband paperback down Vacuum Toilet 3. Shut down the bathroom wing to clear it?",
    left: {
      label: "Shut wing",
      effects: { morale: -10, oxygen: 5 },
      result: "Long lines form outside Medbay, yet the greywater pumps stop screaming."
    },
    right: {
      label: "Reverse suction",
      effects: { energy: -10, morale: -5 },
      result: "It clears the pipe violently, covering two luckless techs in mystery mush."
    }
  },
  {
    id: "b_163",
    bg: "surface",
    image: "images/cards/b_163.jpg",
    who: "Dr. Amara Okafor, Colony Doctor",
    text: "Captain, we found your predecessor's slippers neatly lined up outside Airlock 2. Check the security cameras?",
    left: {
      label: "Check tapes",
      effects: { energy: -10, morale: -10 },
      result: "The footage was looped for three hours—whoever took him knew the system."
    },
    right: {
      label: "Bin slippers",
      effects: { morale: -5, oxygen: 5 },
      result: "You toss them in the incinerator, though everyone avoids Airlock 2 all week."
    }
  },
  {
    id: "b_164",
    bg: "greenhouse",
    image: "images/cards/b_164.jpg",
    who: "Samir Patel, Colony Cook",
    text: "Captain, single socks keep vanishing in the laundry module. Open up the lint trap or blame low-gravity gremlins?",
    left: {
      label: "Open trap",
      effects: { energy: -5, oxygen: 10 },
      result: "We pull out forty lost socks and a wrench, saving the air recycler from fire."
    },
    right: {
      label: "Blame gremlins",
      effects: { morale: 5, oxygen: -5 },
      result: "Everyone laughs it off until the dryer starts smelling like toasted cotton."
    }
  },
  {
    id: "b_165",
    bg: "surface",
    image: "images/cards/b_165.jpg",
    who: "Lucas Vance, Ice Miner",
    text: "Captain, Big Greg's snoring rattles the aluminum walls in Dorm 4. Move him to storage or hand out earplugs?",
    left: {
      label: "Move Greg",
      effects: { morale: -5, energy: 5 },
      result: "Dorm 4 finally sleeps, while Greg sulks among crates of freeze-dried peas."
    },
    right: {
      label: "Print plugs",
      effects: { energy: -10, morale: 10 },
      result: "Foam earplugs bring peace to the barracks, though nobody hears morning alarms."
    }
  },
  {
    id: "b_166",
    bg: "surface",
    image: "images/cards/b_166.jpg",
    who: "Mateo Silva, Rover Pilot",
    text: "Captain, someone painted 'My Other Ride Is A Supply Ship' on Rover 2. Scrub it off or let it ride?",
    left: {
      label: "Scrub it",
      effects: { morale: -10, oxygen: 5 },
      result: "You waste precious solvent erasing the joke, earning silent glares at lunch."
    },
    right: {
      label: "Let it ride",
      effects: { morale: 10, food: -5 },
      result: "Even Mission Control chuckles when it shows up on the morning satellite pass."
    }
  },
  {
    id: "b_167",
    bg: "greenhouse",
    image: "images/cards/b_167.jpg",
    who: "Samir Patel, Colony Cook",
    text: "Captain, turns out '500 boxes of rations' on the manifest meant 500 single granola bars. Stretch them with oatmeal?",
    left: {
      label: "Oatmeal mix",
      effects: { food: 10, morale: -10 },
      result: "Crushed granola in grey porridge keeps calories up and spirits rock-bottom."
    },
    right: {
      label: "Serve whole",
      effects: { food: -10, morale: 10 },
      result: "One glorious afternoon of peanut-butter crunch before the pantry echoes again."
    }
  },
  {
    id: "b_168",
    bg: "surface",
    image: "images/cards/b_168.jpg",
    who: "Clara Lindqvist, Colony Teacher",
    text: "Captain, Leo locked himself inside the walk-in freezer trying to make snowballs. Cut the latch or pick the lock?",
    left: {
      label: "Cut latch",
      effects: { energy: -10, food: -5 },
      result: "Leo is fine and rosy-cheeked, though the freezer door now needs duct tape."
    },
    right: {
      label: "Pick lock",
      effects: { morale: -5, oxygen: 5 },
      result: "Elena pops it open in two minutes while Leo tries hiding snowballs in his coat."
    }
  },
  {
    id: "b_169",
    bg: "greenhouse",
    image: "images/cards/b_169.jpg",
    who: "Mei Tanaka, Botanist",
    text: "Captain, Samir's prized 10-year-old sourdough starter is bubbling out of its jar and taking over the fridge. Bake it?",
    left: {
      label: "Bake now",
      effects: { food: 10, energy: -10 },
      result: "Warm crusty loaves fill the hab, though the ovens trip two circuit breakers."
    },
    right: {
      label: "Toss half",
      effects: { morale: -10, oxygen: 5 },
      result: "Samir mourns his 'baby' like a fallen comrade, yet the fridge closes again."
    }
  },
  {
    id: "b_170",
    bg: "surface",
    image: "images/cards/b_170.jpg",
    who: "Elena Voss, Chief Engineer",
    text: "Captain, people are hanging wet underwear over the warm reactor pipes to dry. Ban it or build a drying rack?",
    left: {
      label: "Ban it",
      effects: { morale: -10, energy: 5 },
      result: "Safety first, even if half the crew walks around in damp coveralls all week."
    },
    right: {
      label: "Build rack",
      effects: { energy: -10, morale: 10 },
      result: "A safe heated rack keeps socks dry without risking an electrical short."
    }
  },
  {
    id: "b_171",
    bg: "surface",
    image: "images/cards/b_171.jpg",
    who: "Mission Control (Earth)",
    text: "Captain, Earth accidentally beamed a catchy children's song on repeat for six hours. Wipe the audio server?",
    left: {
      label: "Wipe server",
      effects: { energy: -5, morale: 10 },
      result: "Silence returns, saving three mechanics from throwing wrenches at the speakers."
    },
    right: {
      label: "Leave file",
      effects: { morale: -15, energy: 5 },
      result: "By Thursday, everyone is humming it involuntarily and glaring at each other."
    }
  },
  {
    id: "b_172",
    bg: "surface",
    image: "images/cards/b_172.jpg",
    who: "Mission Control (Earth)",
    text: "Captain, the supply ship's insurer wants a signed form confirming we didn't secretly steal the cargo. Reply?",
    left: {
      label: "Send snark",
      effects: { morale: 15, energy: -5 },
      result: "Your reply asking how we hid a 40-ton rocket in our pockets becomes colony legend."
    },
    right: {
      label: "Sign form",
      effects: { morale: -5, food: 5 },
      result: "Boring bureaucracy, yet Earth wires a small emergency credit for seeds."
    }
  },
  {
    id: "b_173",
    bg: "surface",
    image: "images/cards/b_173.jpg",
    who: "Dr. Amara Okafor, Colony Doctor",
    text: "Captain, the medbay heater is weak, and everyone flinches at my freezing stethoscope. Spare power for a warmer?",
    left: {
      label: "Add warmer",
      effects: { energy: -10, morale: 10 },
      result: "Annual checkups stop sounding like people sitting on blocks of Martian ice."
    },
    right: {
      label: "Rub hands",
      effects: { energy: 5, morale: -5 },
      result: "Amara warms the metal on her sleeves while miners brace for icy chest exams."
    }
  },
  {
    id: "b_174",
    bg: "surface",
    image: "images/cards/b_174.jpg",
    who: "Mateo Silva, Rover Pilot",
    text: "Captain, Rover 1's navigation voice keeps telling us to 'make a legal U-turn' in empty craters. Reprogram it?",
    left: {
      label: "Reprogram",
      effects: { energy: -5, morale: 5 },
      result: "Elena swaps in her own deadpan voice, which somehow makes driving funnier."
    },
    right: {
      label: "Mute GPS",
      effects: { oxygen: -5, energy: 5 },
      result: "Quiet cab, until Mateo misses a ridge marker and burns extra suit air backtracking."
    }
  },
  {
    id: "b_175",
    bg: "greenhouse",
    image: "images/cards/b_175.jpg",
    who: "Samir Patel, Colony Cook",
    text: "Captain, someone is trading pre-crash ketchup packets for extra shower tokens. Confiscate the stash?",
    left: {
      label: "Confiscate",
      effects: { food: 5, morale: -15 },
      result: "You put the packets in the communal bin, and three suspects stop making eye contact."
    },
    right: {
      label: "Ignore trade",
      effects: { morale: 10, oxygen: -5 },
      result: "Free-market condiments thrive, though extra showers tax the water condensers."
    }
  },
  {
    id: "b_176",
    bg: "surface",
    image: "images/cards/b_176.jpg",
    who: "Lucas Vance, Ice Miner",
    text: "Captain, in 0.38g anyone can dunk, so the miners bent the gym hoop and cracked a light panel. Fix it or lower the rim?",
    left: {
      label: "Fix & raise",
      effects: { energy: -10, morale: 10 },
      result: "Raising the hoop to five meters turns Tuesday nights into highlight-reel magic."
    },
    right: {
      label: "Cancel league",
      effects: { morale: -15, energy: 5 },
      result: "No broken lights, just forty grumpy miners bouncing tennis balls off walls."
    }
  },
  {
    id: "b_177",
    bg: "greenhouse",
    image: "images/cards/b_177.jpg",
    who: "Mei Tanaka, Botanist",
    text: "Captain, the dusty cactus on your predecessor's desk just sprouted a bright pink flower. Keep it in Command?",
    left: {
      label: "Keep cactus",
      effects: { morale: 10, oxygen: -5 },
      result: "Everyone takes it as a good omen, even if it technically eats a trickle of water."
    },
    right: {
      label: "Move to lab",
      effects: { food: 5, morale: -10 },
      result: "Mei studies how it survived neglect, while Command feels colder without it."
    }
  },
  {
    id: "b_178",
    bg: "surface",
    image: "images/cards/b_178.jpg",
    who: "Lucas Vance, Ice Miner",
    text: "Captain, Danny tried cutting his own bangs in the mirror and now looks like a barcode. Lend him a spare beanie?",
    left: {
      label: "Give beanie",
      effects: { morale: 5, oxygen: -5 },
      result: "Danny's dignity survives, though wool lint ends up in the air filter."
    },
    right: {
      label: "Let him rock",
      effects: { morale: 10, energy: -5 },
      result: "Everyone laughs so hard at dinner that two techs spill their tea on a console."
    }
  },
  {
    id: "b_179",
    bg: "greenhouse",
    image: "images/cards/b_179.jpg",
    who: "Mei Tanaka, Botanist",
    text: "Captain, three harmless fruit flies hatched from an old apple crate. Catch them in a cup or unleash the frogs?",
    left: {
      label: "Vinegar trap",
      effects: { food: -5, oxygen: 5 },
      result: "A splash of cider vinegar catches all three without turning the lab into a swamp."
    },
    right: {
      label: "Lab frogs",
      effects: { morale: 10, food: -10 },
      result: "The frogs miss the flies, eat two strawberry seedlings, and charm the kids."
    }
  },
  {
    id: "b_180",
    bg: "surface",
    image: "images/cards/b_180.jpg",
    who: "Dr. Amara Okafor, Colony Doctor",
    text: "Captain, unfiltered Martian UV is fading all the posters in the lounge to ghostly pale. Tint the viewport?",
    left: {
      label: "Tint glass",
      effects: { energy: -5, morale: 5 },
      result: "Polarized film saves our vintage movie posters and cuts squinting headaches."
    },
    right: {
      label: "Leave clear",
      effects: { morale: -5, energy: 5 },
      result: "Great natural light, though Elvis on the wall now looks like a bleached ghost."
    }
  },
  {
    id: "b_181",
    bg: "greenhouse",
    image: "images/cards/b_181.jpg",
    who: "Samir Patel, Colony Cook",
    text: "Captain, we found crates of beans that expired six months ago. Smell fine. Serve them as 'Vintage Earth Reserve'?",
    left: {
      label: "Serve vintage",
      effects: { food: 15, morale: -5 },
      result: "Marketing works wonders until someone reads the stamped date on the tin."
    },
    right: {
      label: "Compost cans",
      effects: { food: -10, oxygen: 5 },
      result: "Better safe than food poisoning, even if tonight's soup is mostly hot water."
    }
  },
  {
    id: "b_182",
    bg: "surface",
    image: "images/cards/b_182.jpg",
    who: "Elena Voss, Chief Engineer",
    text: "Captain, the command console keeps throwing 'PC LOAD LETTER' errors like a 1990s office printer. Kick it or debug?",
    left: {
      label: "Percussive fix",
      effects: { morale: 10, energy: -5 },
      result: "One solid thump clears the jam, earning applause from the night shift."
    },
    right: {
      label: "Run debug",
      effects: { energy: -10, oxygen: 5 },
      result: "Two hours of code fixes a stuck sensor, though everyone calls you a nerd."
    }
  },
  {
    id: "b_183",
    bg: "surface",
    image: "images/cards/b_183.jpg",
    who: "Clara Lindqvist, Colony Teacher",
    text: "Captain, the kids taped a paper smiley face onto the floor-cleaning robot and named it 'Sir Sweeps-a-Lot.' Keep it?",
    left: {
      label: "Knight him",
      effects: { morale: 10, energy: -5 },
      result: "The colony's official mascot bumps into everyone's ankles with royal pride."
    },
    right: {
      label: "Peel tape",
      effects: { morale: -10, energy: 5 },
      result: "Sensors stay unobstructed, and twelve first-graders boycott afternoon reading."
    }
  },
  {
    id: "b_184",
    bg: "surface",
    image: "images/cards/b_184.jpg",
    who: "Elena Voss, Chief Engineer",
    text: "Captain, night-shift heaters dip to save power, making morning bathroom visits brutal. Wire up heated seats?",
    left: {
      label: "Heated seats",
      effects: { energy: -10, morale: 15 },
      result: "Approval ratings skyrocket instantly—best engineering project all year."
    },
    right: {
      label: "Tough it out",
      effects: { energy: 10, morale: -10 },
      result: "Batteries stay green while crew members sprint out of the stalls shivering."
    }
  },
  {
    id: "b_185",
    bg: "greenhouse",
    image: "images/cards/b_185.jpg",
    who: "Samir Patel, Colony Cook",
    text: "Captain, if I put sweetened soy milk outside the airlock for ten minutes, it freezes into soft-serve! Worth the air loss?",
    left: {
      label: "Make sundaes",
      effects: { morale: 15, oxygen: -10, food: -5 },
      result: "Mars-chilled vanilla swirl tastes heavenly, even if the airlock pumps groan."
    },
    right: {
      label: "Keep sealed",
      effects: { oxygen: 5, morale: -10 },
      result: "Smart air conservation, terrible news for everyone holding empty spoons."
    }
  },
  {
    id: "b_186",
    bg: "surface",
    image: "images/cards/b_186.jpg",
    who: "Clara Lindqvist, Colony Teacher",
    text: "Captain, we found an unsent birthday card to Earth in your predecessor's drawer. Transmit it on the next burst?",
    left: {
      label: "Send card",
      effects: { energy: -5, morale: 10 },
      result: "A tiny human gesture crosses the void, reminding everyone what we're fighting for."
    },
    right: {
      label: "Keep in file",
      effects: { morale: -5, energy: 5 },
      result: "You save bandwidth, though the unopened envelope sits heavy on your desk."
    }
  },
  {
    id: "b_187",
    bg: "surface",
    image: "images/cards/b_187.jpg",
    who: "Dr. Amara Okafor, Colony Doctor",
    text: "Captain, dry hab air builds so much static that every handshake zaps like a taser. Boost the humidifiers?",
    left: {
      label: "Add humidity",
      effects: { oxygen: -10, morale: 10 },
      result: "No more blue sparks when passing salt shakers, though water tanks dip slightly."
    },
    right: {
      label: "Elbow bumps",
      effects: { oxygen: 5, morale: -5 },
      result: "Water stays in the pipes while colonists awkwardly bump elbows in the halls."
    }
  },
  {
    id: "b_188",
    bg: "surface",
    image: "images/cards/b_188.jpg",
    who: "Mateo Silva, Rover Pilot",
    text: "Captain, I wedged Rover 2's front wheel in soft red silt. Gun the motors to dig out or walk back for tow cables?",
    left: {
      label: "Gun motors",
      effects: { energy: -15, morale: 5 },
      result: "Rooster tails of red dust fly everywhere, freeing the rig with 4% battery left."
    },
    right: {
      label: "Fetch cables",
      effects: { oxygen: -10, energy: 5 },
      result: "A sweaty two-kilometer hike in spacesuits saves the battery and humbles Mateo."
    }
  },
  {
    id: "b_189",
    bg: "greenhouse",
    image: "images/cards/b_189.jpg",
    who: "Samir Patel, Colony Cook",
    text: "Captain, Mei harvested six precious pineapples. The crew is split on putting them on tonight's flatbread. Your call?",
    left: {
      label: "Put it on",
      effects: { food: 5, morale: -5 },
      result: "Half the mess hall cheers, while the other half threatens a peaceful mutiny."
    },
    right: {
      label: "Serve plain",
      effects: { morale: 5, food: -5 },
      result: "Pineapple slices go on the side, keeping peace at the cost of extra prep."
    }
  },
  {
    id: "b_190",
    bg: "surface",
    image: "images/cards/b_190.jpg",
    who: "Clara Lindqvist, Colony Teacher",
    text: "Captain, Mars is passing through a comet trail tonight—shooting stars every minute! Dim the dome lights to watch?",
    left: {
      label: "Dim lights",
      effects: { energy: 10, morale: 15, oxygen: -5 },
      result: "150 people press against the glass in awe as green streaks burn across the night."
    },
    right: {
      label: "Keep lights",
      effects: { morale: -10, energy: -5 },
      result: "Work shifts stay on schedule, while everyone glares out at the washed-out sky."
    }
  },
  {
    id: "b_191",
    bg: "surface",
    image: "images/cards/b_191.jpg",
    who: "Mission Control (Earth)",
    text: "Captain, perihelion heat puffed up Mars's upper air right when our supply ship aerobraked. Scan for burn debris?",
    left: {
      label: "Scan orbit",
      effects: { energy: -10, food: 10 },
      result: "Extra drag burned the main hull, yet we salvage two intact cargo pods."
    },
    right: {
      label: "Save dish power",
      effects: { energy: 10, morale: -10 },
      result: "Batteries stay full while the crew mourns without closure."
    }
  },
  {
    id: "b_192",
    bg: "surface",
    image: "images/cards/b_192.jpg",
    who: "Lucas Vance, Ice Miner",
    text: "Captain, deep ice has way more heavy hydrogen than normal water—clues to Mars's lost oceans! Bottle some for Earth labs?",
    left: {
      label: "Bottle samples",
      effects: { oxygen: -5, morale: 10 },
      result: "Scientists love our deuterium data, though we lose drinking water."
    },
    right: {
      label: "Melt for tea",
      effects: { oxygen: 10, morale: -5 },
      result: "Heavy water brews fine tea, even if geologists call you a vandal."
    }
  },
  {
    id: "b_193",
    bg: "surface",
    image: "images/cards/b_193.jpg",
    who: "Elena Voss, Chief Engineer",
    text: "Captain, Mars's skies are super clear lately—without floating dust to trap sunlight, air temps are plunging! Boost heaters?",
    left: {
      label: "Boost heaters",
      effects: { energy: -15, morale: 10 },
      result: "Warm bunks save the week while the battery banks take a beating."
    },
    right: {
      label: "Extra blankets",
      effects: { energy: 10, morale: -10 },
      result: "Without smoke-sized dust warming the sky, everyone shivers in coats."
    }
  },
  {
    id: "b_194",
    bg: "surface",
    image: "images/cards/b_194.jpg",
    who: "Dr. Amara Okafor, Colony Doctor",
    text: "Captain, sensors show extra ozone drifting from the north pole, so miners want to skip UV visors. Allow it?",
    left: {
      label: "Keep visors",
      effects: { morale: -10, oxygen: 5 },
      result: "Smart call—Mars's air is way too thin for ozone to stop harsh UV."
    },
    right: {
      label: "Skip visors",
      effects: { morale: 10, energy: -10 },
      result: "Miners enjoy clear views until eye-burn ointment runs completely dry."
    }
  },
  {
    id: "b_195",
    bg: "greenhouse",
    image: "images/cards/b_195.jpg",
    who: "Mei Tanaka, Botanist",
    text: "Captain, winds blew bright dust off southern rocks, making them look like green plants from orbit! Drive out to check?",
    left: {
      label: "Send rover",
      effects: { energy: -10, morale: -5, oxygen: 5 },
      result: "Just dark, coarse sand—same optical illusion that fooled early astronomers."
    },
    right: {
      label: "Stay put",
      effects: { energy: 5, morale: -10 },
      result: "You explain wind-scoured sand physics, crushing everyone's alien plant hopes."
    }
  },
  {
    id: "b_196",
    bg: "surface",
    image: "images/cards/b_196.jpg",
    who: "Clara Lindqvist, Colony Teacher",
    text: "Captain, a Martian year is 687 Earth days, so the kids are technically half their age! Celebrate Mars or Earth birthdays?",
    left: {
      label: "Earth dates",
      effects: { morale: 10, food: -5 },
      result: "Twice as many tiny birthday crackers keep everyone smiling."
    },
    right: {
      label: "Mars years",
      effects: { food: 5, morale: -10 },
      result: "Waiting 687 days for cake makes even the adults grumpy."
    }
  },
  {
    id: "b_197",
    bg: "surface",
    image: "images/cards/b_197.jpg",
    who: "Elena Voss, Chief Engineer",
    text: "Captain, Mars swung far from the Sun, making sunlight 25% dimmer and chilling the planet 20 degrees. Dim the lab lights?",
    left: {
      label: "Dim labs",
      effects: { energy: 15, morale: -10 },
      result: "Batteries survive the long aphelion winter while researchers squint."
    },
    right: {
      label: "Keep bright",
      effects: { energy: -15, morale: 10 },
      result: "Warm, bright corridors lift spirits as solar output drops sharply."
    }
  },
  {
    id: "b_198",
    bg: "greenhouse",
    image: "images/cards/b_198.jpg",
    who: "Samir Patel, Colony Cook",
    text: "Captain, Earth sent weather news: Venus has sulfuric acid rain, while we just have dry dust. Celebrate with extra rations?",
    left: {
      label: "Extra rations",
      effects: { morale: 15, food: -10 },
      result: "Nothing makes algae paste taste sweeter than knowing it isn't acid smog."
    },
    right: {
      label: "Save food",
      effects: { food: 10, morale: -10 },
      result: "The pantry stays stocked, though nobody feels lucky tonight."
    }
  },
  {
    id: "b_199",
    bg: "surface",
    image: "images/cards/b_199.jpg",
    who: "Mission Control (Earth)",
    text: "Captain, solar wind protons are slamming into Mars's upper air and kicking hydrogen into space. Shield the comms dish?",
    left: {
      label: "Shield dish",
      effects: { energy: -10, morale: 5 },
      result: "The antenna survives the proton blast, keeping our Earth link alive."
    },
    right: {
      label: "Leave exposed",
      effects: { energy: 10, morale: -10 },
      result: "Static fries a receiver board, cutting off family messages for days."
    }
  },
  {
    id: "b_200",
    bg: "surface",
    image: "images/cards/b_200.jpg",
    who: "Lucas Vance, Ice Miner",
    text: "Captain, your predecessor's logs point to ancient water frozen deep underground. Burn drill power to reach it?",
    left: {
      label: "Drill deep",
      effects: { energy: -15, oxygen: 15 },
      result: "We tap a billion-year-old ice lens, boosting water and air reserves."
    },
    right: {
      label: "Stick to surface",
      effects: { energy: 10, oxygen: -10 },
      result: "Safe and cheap, though shallow ice seams are running dangerously thin."
    }
  },
  {
    id: "b_201",
    bg: "greenhouse",
    image: "images/cards/b_201.jpg",
    who: "Mei Tanaka, Botanist",
    text: "Captain, fleecy ice-crystal clouds are carrying water vapor from the north pole right over us! Deploy frost nets?",
    left: {
      label: "Deploy nets",
      effects: { oxygen: 10, energy: -10 },
      result: "Harvesting passing cloud ice tops off our tanks without deep drilling."
    },
    right: {
      label: "Stay indoors",
      effects: { energy: 5, oxygen: -5 },
      result: "The seasonal water-transport clouds drift south untouched."
    }
  },
  {
    id: "b_202",
    bg: "surface",
    image: "images/cards/b_202.jpg",
    who: "Mission Control (Earth)",
    text: "Captain, Earth and Mars hit opposition soon—our closest approach in two years! Burn power for a massive data dump?",
    left: {
      label: "Stream data",
      effects: { energy: -15, morale: 15 },
      result: "Crisp video calls with families on Earth recharge everyone's spirits."
    },
    right: {
      label: "Text only",
      effects: { energy: 10, morale: -10 },
      result: "We save watts, missing our best signal window until the next orbit."
    }
  },
  {
    id: "b_203",
    bg: "surface",
    image: "images/cards/b_203.jpg",
    who: "Dr. Amara Okafor, Colony Doctor",
    text: "Captain, smoke-sized dust motes stay suspended for months and sneak past airlock seals. Upgrade the hab filters?",
    left: {
      label: "Upgrade filters",
      effects: { energy: -10, oxygen: 10 },
      result: "Cleaner lungs across the dome, though fan power draw jumps noticeably."
    },
    right: {
      label: "Keep current",
      effects: { energy: 10, morale: -10 },
      result: "Micron dust keeps everyone coughing through the night shift."
    }
  },
  {
    id: "b_204",
    bg: "greenhouse",
    image: "images/cards/b_204.jpg",
    who: "Mei Tanaka, Botanist",
    text: "Captain, Earth scientists want a vial of our meltwater to measure deuterium ratios and model ancient oceans. Send some?",
    left: {
      label: "Send vial",
      effects: { oxygen: -5, morale: 10 },
      result: "Helping solve Mars's watery past makes the crew feel like true pioneers."
    },
    right: {
      label: "Keep every drop",
      effects: { oxygen: 5, morale: -10 },
      result: "With the supply ship gone, you refuse to spare even a shot glass."
    }
  },
  {
    id: "b_205",
    bg: "surface",
    image: "images/cards/b_205.jpg",
    who: "Mateo Silva, Rover Pilot",
    text: "Captain, Mars's thin air heats and cools in mere hours, creating wild turbulence for our weather drone. Launch anyway?",
    left: {
      label: "Launch drone",
      effects: { energy: -10, oxygen: 10 },
      result: "We map sudden updrafts and spot a hidden frost hollow before crashing."
    },
    right: {
      label: "Ground drone",
      effects: { energy: 5, oxygen: -5 },
      result: "The drone stays intact, yet we miss vital humidity readings."
    }
  },
  {
    id: "b_206",
    bg: "surface",
    image: "images/cards/b_206.jpg",
    who: "Elena Voss, Chief Engineer",
    text: "Captain, near the Sun, water shoots high into the sky where UV splits it into escaping atoms. Seal outdoor vents?",
    left: {
      label: "Seal vents",
      effects: { oxygen: 10, energy: -10 },
      result: "Zero steam escapes to be shredded by sunlight into space-bound hydrogen."
    },
    right: {
      label: "Leave open",
      effects: { oxygen: -10, energy: 5 },
      result: "Valves run easy, while precious water atoms literally boil off Mars."
    }
  },
  {
    id: "b_207",
    bg: "surface",
    image: "images/cards/b_207.jpg",
    who: "Mateo Silva, Rover Pilot",
    text: "Captain, logs show the missing supply ship arrived during southern dust-scouring winds. Search the coarse sand plains?",
    left: {
      label: "Search plains",
      effects: { energy: -15, oxygen: -10, food: 15 },
      result: "Scoured dark sand makes tracking easy—we find an intact ration pod!"
    },
    right: {
      label: "Hold base",
      effects: { energy: 10, morale: -10 },
      result: "Fuel stays safe, yet rumors about abandoned cargo sour dinner."
    }
  },
  {
    id: "b_208",
    bg: "surface",
    image: "images/cards/b_208.jpg",
    who: "Clara Lindqvist, Colony Teacher",
    text: "Captain, kids asked why Earth has oceans, Venus has acid rain, and Mars froze if all three sit in the habitable zone. Debate?",
    left: {
      label: "Host debate",
      effects: { morale: 10, energy: -5 },
      result: "Comparing our sister worlds turns a bleak evening into lively science."
    },
    right: {
      label: "Assign essay",
      effects: { energy: 5, morale: -10 },
      result: "Quiet study hall saves power, though the kids groan at homework."
    }
  },
  {
    id: "b_209",
    bg: "surface",
    image: "images/cards/b_209.jpg",
    who: "Dr. Amara Okafor, Colony Doctor",
    text: "Captain, vented shower steam rises and chemically destroys Mars's upper-atmosphere ozone! Enforce short cold showers?",
    left: {
      label: "Cold showers",
      effects: { oxygen: 10, morale: -15 },
      result: "Air recycling improves and local ozone holds steady, at the cost of joy."
    },
    right: {
      label: "Hot showers",
      effects: { morale: 15, oxygen: -10 },
      result: "Steam rises into the thin sky while everyone sings in bliss."
    }
  },
  {
    id: "b_210",
    bg: "surface",
    image: "images/cards/b_210.jpg",
    who: "Elena Voss, Chief Engineer",
    text: "Captain, harsh UV reactions kick upper-air atoms fast enough to beat Mars's gravity. Run our UV spectrometer tonight?",
    left: {
      label: "Run sensor",
      effects: { energy: -10, morale: 5 },
      result: "Tracking super-thermal atoms helps us predict solar radiation spikes."
    },
    right: {
      label: "Save watts",
      effects: { energy: 10, oxygen: -5 },
      result: "Batteries rest, though we miss an early warning on solar wind surges."
    }
  },
  {
    id: "b_211",
    bg: "surface",
    image: "images/cards/b_211.jpg",
    who: "Lucas Vance, Ice Miner",
    text: "Captain, winds stripped fine dust off the south plains, leaving dark, coarse sand that absorbs heat. Haul some for the dome?",
    left: {
      label: "Haul dark sand",
      effects: { energy: 15, oxygen: -10 },
      result: "Spreading low-albedo sand around the base passively warms our floor."
    },
    right: {
      label: "Leave it",
      effects: { oxygen: 5, energy: -5 },
      result: "Suit air stays conserved while heaters work overtime against the frost."
    }
  },
  {
    id: "b_212",
    bg: "surface",
    image: "images/cards/b_212.jpg",
    who: "Mission Control (Earth)",
    text: "Captain, 1970s Viking missions saw a dusty, warm Mars, so our backup radiators are oversized. Strip one for spare parts?",
    left: {
      label: "Strip radiator",
      effects: { oxygen: 10, energy: -5 },
      result: "Extra tubing fixes leaky air valves in today's cooler, clearer climate."
    },
    right: {
      label: "Keep intact",
      effects: { energy: 5, oxygen: -5 },
      result: "Safe against a sudden global dust storm, though pipe leaks persist."
    }
  },
  {
    id: "b_213",
    bg: "greenhouse",
    image: "images/cards/b_213.jpg",
    who: "Samir Patel, Colony Cook",
    text: "Captain, hard to believe three billion years ago we could've fished in Martian rivers instead of eating algae. Serve soy fish?",
    left: {
      label: "Soy fish sticks",
      effects: { morale: 10, food: -5 },
      result: "Shaping green paste like trout makes everyone laugh through dinner."
    },
    right: {
      label: "Regular cubes",
      effects: { food: 5, morale: -10 },
      result: "Efficient rations, zero imagination, and plenty of sighs at the table."
    }
  },
  {
    id: "b_214",
    bg: "greenhouse",
    image: "images/cards/b_214.jpg",
    who: "Samir Patel, Colony Cook",
    text: "Captain, deuterium-heavy ice from the deep core melts slightly warmer, slush-clogging kitchen pipes! Flush with boiling water?",
    left: {
      label: "Boil flush",
      effects: { energy: -10, food: 10 },
      result: "Pipes clear fast and soup is back on, though the kettles drain power."
    },
    right: {
      label: "Thaw slowly",
      effects: { energy: 5, food: -10 },
      result: "Power holds steady while dinner gets delayed by three hungry hours."
    }
  },
  {
    id: "b_215",
    bg: "surface",
    image: "images/cards/b_215.jpg",
    who: "Mission Control (Earth)",
    text: "Captain, Mars is so far from the Sun that space telescopes barely see our faint upper air. Fire a calibration laser?",
    left: {
      label: "Fire laser",
      effects: { energy: -15, morale: 10 },
      result: "Shooting a green beam toward Hubble makes the crew feel connected again."
    },
    right: {
      label: "Conserve grid",
      effects: { energy: 10, morale: -10 },
      result: "Sensible power discipline, though nobody likes feeling invisible."
    }
  },
  {
    id: "b_216",
    bg: "surface",
    image: "images/cards/b_216.jpg",
    who: "Elena Voss, Chief Engineer",
    text: "Captain, your predecessor's notes say a supply drone burned up when warm air expanded unexpectedly. Recover its black box?",
    left: {
      label: "Recover box",
      effects: { oxygen: -10, energy: -5, food: 10 },
      result: "We find intact seed packets beside the scorched aerobraking shield."
    },
    right: {
      label: "Leave wreck",
      effects: { oxygen: 5, morale: -10 },
      result: "Suit seals stay fresh, while the vanished captain's trail goes cold."
    }
  },
  {
    id: "b_217",
    bg: "greenhouse",
    image: "images/cards/b_217.jpg",
    who: "Mei Tanaka, Botanist",
    text: "Captain, sunlight swings 40% across Mars's oval orbit, confusing our greenhouse skylights. Switch to pure LED cycles?",
    left: {
      label: "Pure LEDs",
      effects: { food: 15, energy: -15 },
      result: "Steady artificial sun boosts lettuce yields while draining the batteries."
    },
    right: {
      label: "Natural sky",
      effects: { energy: 10, food: -10 },
      result: "We save watts, though uneven orbital sunlight stunts the wheat."
    }
  },
  {
    id: "b_218",
    bg: "surface",
    image: "images/cards/b_218.jpg",
    who: "Lucas Vance, Ice Miner",
    text: "Captain, unlike volcanic Venus, Mars's volcanoes died long ago, locking sulfur in frozen veins. Mine it for fertilizer?",
    left: {
      label: "Mine sulfur",
      effects: { food: 15, oxygen: -10 },
      result: "Soil acidity balances out for bumper crops, though dust fouls air filters."
    },
    right: {
      label: "Skip vein",
      effects: { oxygen: 5, food: -5 },
      result: "Clean airlocks today, bland and meager harvests next month."
    }
  },
  {
    id: "b_219",
    bg: "surface",
    image: "images/cards/b_219.jpg",
    who: "Mateo Silva, Rover Pilot",
    text: "Captain, thick fleecy water-ice clouds just rolled over the ridge, dropping visibility to zero. Delay the battery convoy?",
    left: {
      label: "Delay convoy",
      effects: { energy: -10, oxygen: 5 },
      result: "Drivers stay safe indoors while Sector B runs on reserve cells."
    },
    right: {
      label: "Drive blind",
      effects: { energy: 10, morale: -10 },
      result: "Power arrives on time, though scraping a boulder terrifies the drivers."
    }
  },
  {
    id: "b_220",
    bg: "surface",
    image: "images/cards/b_220.jpg",
    who: "Elena Voss, Chief Engineer",
    text: "Captain, sudden afternoon heat puffed the atmosphere upward, dragging down our relay satellite! Fire its booster?",
    left: {
      label: "Fire booster",
      effects: { energy: -10, morale: 10 },
      result: "The relay climbs out of atmospheric drag, saving our Earth link."
    },
    right: {
      label: "Save fuel",
      effects: { energy: 5, morale: -10 },
      result: "Signal drops out for hours every afternoon as the orbit decays."
    }
  },
  {
    id: "b_221",
    bg: "surface",
    image: "images/cards/b_221.jpg",
    who: "Mission Control (Earth)",
    text: "Captain, because Earth and Mars only align closely every two years, no relief ship can launch for months. Tell the crew?",
    left: {
      label: "Tell truth",
      effects: { morale: -15, food: 15 },
      result: "Brutal orbital math kills false hope—and gets everyone rationing fast."
    },
    right: {
      label: "Soften news",
      effects: { morale: 10, food: -10 },
      result: "People stay cheerful, eating like a rescue rocket is right around the corner."
    }
  },
  {
    id: "b_222",
    bg: "surface",
    image: "images/cards/b_222.jpg",
    who: "Elena Voss, Chief Engineer",
    text: "Captain, Mars is so cold and dry nowadays that outdoor tools barely rust at all. Store spare air tanks outside?",
    left: {
      label: "Store outside",
      effects: { oxygen: 10, energy: -5 },
      result: "Corridors clear up, though cold valves need warming before use."
    },
    right: {
      label: "Keep inside",
      effects: { energy: 5, morale: -5 },
      result: "Warm tanks ready anytime, even if everyone trips over them in halls."
    }
  },
  {
    id: "b_223",
    bg: "surface",
    image: "images/cards/b_223.jpg",
    who: "Dr. Amara Okafor, Colony Doctor",
    text: "Captain, a rookie lifted his visor outside, assuming Mars's north-pole ozone surplus blocks UV rays. Treat his sunburn?",
    left: {
      label: "Use aloe gel",
      effects: { food: -5, morale: 10 },
      result: "Our greenhouse aloe soothes his face—and teaches everyone UV physics."
    },
    right: {
      label: "Cold packs",
      effects: { energy: -5, morale: -5 },
      result: "He heals slowly while nursing a bright red nose and bruised pride."
    }
  },
  {
    id: "b_224",
    bg: "surface",
    image: "images/cards/b_224.jpg",
    who: "Mateo Silva, Rover Pilot",
    text: "Captain, your predecessor tracked seasonal ice clouds drifting south right before he vanished. Follow his trail?",
    left: {
      label: "Follow trail",
      effects: { energy: -15, oxygen: 10 },
      result: "We find his cached frost collectors still full of pure water—but no sign of him."
    },
    right: {
      label: "Stay home",
      effects: { energy: 10, morale: -10 },
      result: "Batteries stay charged, yet his empty rover seat haunts the garage."
    }
  },
  {
    id: "b_225",
    bg: "surface",
    image: "images/cards/b_225.jpg",
    who: "Mission Control (Earth)",
    text: "Captain, astronomers use our Martian weather logs to model rocky exoplanets around distant stars. Stream live telemetry?",
    left: {
      label: "Stream logs",
      effects: { energy: -10, morale: 10 },
      result: "Knowing our struggle helps map alien worlds lifts everyone's spirits."
    },
    right: {
      label: "Send weekly",
      effects: { energy: 10, morale: -5 },
      result: "Dish power stays low, though Earth scientists send grumpy reminders."
    }
  },
  {
    id: "b_226",
    bg: "surface",
    image: "images/cards/b_226.jpg",
    who: "Elena Voss, Chief Engineer",
    text: "Captain, swirling dust lifted micron-sized particles skyward, absorbing sunlight and warming the dome! Throttle heaters?",
    left: {
      label: "Throttle down",
      effects: { energy: 15, oxygen: -5 },
      result: "Airborne dust heats the air for free, though filters clog faster."
    },
    right: {
      label: "Keep steady",
      effects: { oxygen: 5, energy: -10 },
      result: "Clean air flows smoothly while heaters burn unnecessary watts."
    }
  },
  {
    id: "b_227",
    bg: "surface",
    image: "images/cards/b_227.jpg",
    who: "Elena Voss, Chief Engineer",
    text: "Captain, sunlight splits water so light hydrogen escapes to space while oxygen rusts the soil red. Bake rust for O2?",
    left: {
      label: "Bake regolith",
      effects: { oxygen: 15, energy: -15 },
      result: "Heating iron-oxide dirt releases trapped oxygen—and drains the grid."
    },
    right: {
      label: "Leave dirt",
      effects: { energy: 10, oxygen: -10 },
      result: "Power stays healthy while oxygen tanks slowly tick downward."
    }
  },
  {
    id: "b_228",
    bg: "greenhouse",
    image: "images/cards/b_228.jpg",
    who: "Samir Patel, Colony Cook",
    text: "Captain, miners keep joking our soup is 'extra heavy' from Martian deuterium. Host an open-mic night to roast the menu?",
    left: {
      label: "Open mic",
      effects: { morale: 15, energy: -5 },
      result: "Heavy-water jokes bring the house down, making thin broth go down easy."
    },
    right: {
      label: "Quiet dinner",
      effects: { energy: 5, morale: -10 },
      result: "Lights dim early to save power while everyone eats in silence."
    }
  },
  {
    id: "b_229",
    bg: "surface",
    image: "images/cards/b_229.jpg",
    who: "Dr. Amara Okafor, Colony Doctor",
    text: "Captain, without dusty air to trap heat, clear Martian nights plummet way below freezing. Issue electric blankets?",
    left: {
      label: "Issue blankets",
      effects: { energy: -15, morale: 15 },
      result: "Cozy bunks keep colds away while the night-shift batteries groan."
    },
    right: {
      label: "Double socks",
      effects: { energy: 10, morale: -10 },
      result: "Grid holds strong, though breath fogs inside the dorms by dawn."
    }
  },
  {
    id: "b_230",
    bg: "surface",
    image: "images/cards/b_230.jpg",
    who: "Clara Lindqvist, Colony Teacher",
    text: "Captain, Mars tilts like Earth, yet its thin air makes winter brutally cold. Turn the next cold snap into a survival drill?",
    left: {
      label: "Run drill",
      effects: { oxygen: 10, morale: -10 },
      result: "Everyone masters thermal suit seals, even if the kids hate pop quizzes."
    },
    right: {
      label: "Normal class",
      effects: { morale: 5, oxygen: -5 },
      result: "Warm classrooms keep moods up while suit-seal skills get rusty."
    }
  },
  {
    id: "b_231",
    bg: "surface",
    image: "images/cards/b_231.jpg",
    who: "Elena Voss, Chief Engineer",
    text: "Captain, bright streaks last month match our supply ship burning up in unexpectedly puffed-up air. Hunt for melted alloy?",
    left: {
      label: "Hunt scrap",
      effects: { oxygen: -10, energy: 10 },
      result: "We recover scorched titanium plates—proof of what happened to the ship."
    },
    right: {
      label: "Stay inside",
      effects: { oxygen: 5, morale: -10 },
      result: "Airlocks stay sealed, leaving the crew haunted by unanswered questions."
    }
  },
  {
    id: "b_232",
    bg: "surface",
    image: "images/cards/b_232.jpg",
    who: "Mission Control (Earth)",
    text: "Captain, a solar flare is hurling fast protons straight into Mars's unshielded upper air. Power down external sensors?",
    left: {
      label: "Power down",
      effects: { energy: 10, oxygen: -5 },
      result: "Circuits survive the proton storm, though we fly blind on air pressure."
    },
    right: {
      label: "Keep recording",
      effects: { energy: -15, morale: 5 },
      result: "We capture wild atmospheric escape spikes before a surge trips breakers."
    }
  },
  {
    id: "b_233",
    bg: "surface",
    image: "images/cards/b_233.jpg",
    who: "Lucas Vance, Ice Miner",
    text: "Captain, half of Mars's ancient oceans escaped to space and the rest froze underground. Blast through the permafrost?",
    left: {
      label: "Blast deep",
      effects: { energy: -15, oxygen: 15, morale: -5 },
      result: "We hit pristine fossil ice, though the seismic boom rattles every mug."
    },
    right: {
      label: "Chip slow",
      effects: { energy: 5, oxygen: -5 },
      result: "Quiet work keeps nerves calm while water tanks fill at a crawl."
    }
  },
  {
    id: "b_234",
    bg: "surface",
    image: "images/cards/b_234.jpg",
    who: "Clara Lindqvist, Colony Teacher",
    text: "Captain, forecast says cool, clear skies with high clouds—way nicer than Venus's sulfuric acid rain! Hold outdoor gym?",
    left: {
      label: "Outdoor gym",
      effects: { morale: 15, oxygen: -10 },
      result: "Low-gravity leaps under a crisp pink sky thrill the kids—and drain suit air."
    },
    right: {
      label: "Indoor laps",
      effects: { oxygen: 5, morale: -10 },
      result: "Air stays inside the dome while kids bounce off the corridor walls."
    }
  },
  {
    id: "b_235",
    bg: "greenhouse",
    image: "images/cards/b_235.jpg",
    who: "Mei Tanaka, Botanist",
    text: "Captain, warm storms shoot greenhouse humidity straight toward space in hours, not slow leaks! Seal the roof vents?",
    left: {
      label: "Seal vents",
      effects: { food: 10, oxygen: 5, energy: -10 },
      result: "Trapping moisture keeps tomatoes plump, though dehumidifiers work overtime."
    },
    right: {
      label: "Keep airflow",
      effects: { energy: 10, food: -10 },
      result: "Fans run cheap while dry air wilts our leafy greens by evening."
    }
  },
  {
    id: "b_236",
    bg: "greenhouse",
    image: "images/cards/b_236.jpg",
    who: "Mei Tanaka, Botanist",
    text: "Captain, with no supply ship coming, every liter of leaked steam gets split by sunlight and lost forever. Patch the dome?",
    left: {
      label: "Patch dome",
      effects: { oxygen: 15, energy: -10, morale: -5 },
      result: "Sealing micro-cracks stops water escape, though resin fumes sting noses."
    },
    right: {
      label: "Wait till dawn",
      effects: { morale: 5, oxygen: -10 },
      result: "Crews get a full night's sleep while precious humidity slips into space."
    }
  },
  {
    id: "b_237",
    bg: "surface",
    image: "images/cards/b_237.jpg",
    who: "Mateo Silva, Rover Pilot",
    text: "Captain, we're driving north where ozone peaks! Pack lighter radiation shielding so we can haul back extra ice?",
    left: {
      label: "Light shield",
      effects: { oxygen: 15, morale: -10 },
      result: "Big ice haul, though Amara scolds you because Martian ozone barely blocks UV."
    },
    right: {
      label: "Full armor",
      effects: { oxygen: -5, morale: 5 },
      result: "Safe return from the northern dunes, even if the cargo sled is half empty."
    }
  },
  {
    id: "b_238",
    bg: "surface",
    image: "images/cards/b_238.jpg",
    who: "Elena Voss, Chief Engineer",
    text: "Captain, dark, wind-scoured sand in the south absorbs way more sunlight than dusty plains. Move a solar array there?",
    left: {
      label: "Move array",
      effects: { energy: 15, oxygen: -10 },
      result: "Warm dark sand prevents frost buildup on panels, costing suit air to install."
    },
    right: {
      label: "Keep close",
      effects: { oxygen: 5, energy: -5 },
      result: "Easy maintenance near the airlock, though morning frost cuts power output."
    }
  },
  {
    id: "b_239",
    bg: "surface",
    image: "images/cards/b_239.jpg",
    who: "Dr. Amara Okafor, Colony Doctor",
    text: "Captain, Earth shines like a bright star during opposition, and half the crew is up staring instead of sleeping. Curfew?",
    left: {
      label: "Enforce curfew",
      effects: { energy: 10, morale: -10 },
      result: "Rested crews hit morning shifts sharp, grumbling about missing home."
    },
    right: {
      label: "Let them gaze",
      effects: { morale: 15, energy: -10 },
      result: "Watching that pale blue dot brings quiet hope—and very sleepy engineers."
    }
  },
  {
    id: "b_240",
    bg: "surface",
    image: "images/cards/b_240.jpg",
    who: "Mission Control (Earth)",
    text: "Captain, Mars lost its oceans over four billion years; Earth asks if our water recyclers still hit 99%. Run a stress test?",
    left: {
      label: "Stress test",
      effects: { oxygen: 10, energy: -10, morale: -5 },
      result: "We hit 99.2% recovery—proving we won't share Mars's dry fate—after a noisy night."
    },
    right: {
      label: "Send old logs",
      effects: { energy: 5, oxygen: -5 },
      result: "Smooth night in the hab, though a tiny recycler leak goes unnoticed."
    }
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

