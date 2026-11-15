const CARDS_B = [
  {
id: "b_106",
who: "Mateo Silva, Rover Pilot",
text: "Captain, I swear I saw glowing green figures watching me by the crater rim! Should we lock down the airlocks?",
left:  { label: "Lock down",   effects: { oxygen: -10, morale: -10 }, result: "Turns out it was just static sparks on a stuck weather balloon." },
right: { label: "Go look",     effects: { energy: -10, morale: 5 },   result: "We drove out and found a fallen reflector pole. Very spooky." }
},
{
id: "b_107",
who: "Samir Patel, Colony Cook",
text: "Captain, we're out of spices, so dinner tastes like wet cardboard. Use our emergency hot sauce or tell them to chew slower?",
left:  { label: "Break glass", effects: { morale: 15, food: -5 },   result: "Three drops of habanero per bowl makes everyone cry happy tears." },
right: { label: "Chew slower", effects: { morale: -15, food: 5 },   result: "Dinner is silent, miserable, and remarkably good for digestion." }
},
{
id: "b_108",
who: "Elena Voss, Chief Engineer",
text: "Captain, we pried open the vanished captain's secret floor safe! Crack it open or leave the mystery intact?",
left:  { label: "Crack it",    effects: { energy: -10, morale: 10 }, result: "Inside: three terrible sci-fi novels and six packs of expired ramen." },
right: { label: "Leave it",    effects: { morale: -10, energy: 5 },  result: "Everyone assumes it's gold bars and gets mad you won't share." }
},
{
id: "b_109",
who: "Dr. Amara Okafor, Colony Doctor",
text: "Captain, someone glued giant googly eyes onto every medical scanner in the infirmary. Scrape them off?",
left:  { label: "Scrape off",  effects: { morale: -10, energy: 5 },  result: "The medbay looks professional again, and everyone hates you a little." },
right: { label: "Keep eyes",   effects: { morale: 10, oxygen: -5 },  result: "Patients giggle during checkups, though one eye fell in an air vent." }
},
{
id: "b_110",
who: "Mei Tanaka, Botanist",
text: "Captain, the hydroponic tomatoes are making weird whistling noises. Run diagnostics or just eat them faster?",
left:  { label: "Diagnostics", effects: { energy: -10, oxygen: 5 },  result: "False alarm—it's just air bubbles squeaking through a clogged pipe." },
right: { label: "Eat fast",    effects: { food: 10, morale: -5 },    result: "Salad night is a hit, even if everyone stares nervously at their bowls." }
},
{
id: "b_111",
who: "Mission Control (Earth)",
text: "Captain, the 14-minute radio lag ruined our chess tournament with Houston. Spend dish power on turn-based checkers?",
left:  { label: "Play on",     effects: { energy: -10, morale: 10 }, result: "We're winning, mostly because Houston keeps forgetting whose turn it is." },
right: { label: "Forfeit",     effects: { energy: 10, morale: -10 }, result: "Earth declares victory by default and sends a very smug emoji." }
},
{
id: "b_112",
who: "Lucas Vance, Ice Miner",
text: "Captain, we dug up a shiny rock that hums when you poke it. Put it in the lounge or drop it down a trench?",
left:  { label: "Lounge decor", effects: { morale: 10, energy: -5 },  result: "It's just magnetized iron vibrating near the fridge, but it looks cool." },
right: { label: "Toss it",      effects: { morale: -10, oxygen: 5 },  result: "You threw away a perfectly good paperweight, and the miners pout." }
},
{
id: "b_113",
who: "Mission Control (Earth)",
text: "Captain, we picked up a faint beacon from the missing supply ship! Burn extra dish power to decode it?",
left:  { label: "Decode it",   effects: { energy: -15, morale: -10 }, result: "It's just a dead satellite bouncing our own weather reports back at us." },
right: { label: "Ignore ping", effects: { energy: 5, morale: -5 },    result: "Smart move—probably space junk anyway, though nobody likes hearing that." }
},
{
id: "b_114",
who: "Clara Lindqvist, Colony Teacher",
text: "Captain, the kids started an underground market trading flavored oxygen mints. Bust the cartel or tax it?",
left:  { label: "Bust cartel", effects: { morale: -10, oxygen: 5 },  result: "Candy confiscated, recess canceled, and ten tiny mobsters glare at you." },
right: { label: "Tax mints",   effects: { morale: 5, food: 5 },      result: "You get a 20% cut of the peppermint stash and look cool doing it." }
},
{
id: "b_115",
who: "Elena Voss, Chief Engineer",
text: "Captain, something is rhythmically knocking on the outer hull at 3 AM! Send an armed team or hide under the blankets?",
left:  { label: "Suit up",     effects: { oxygen: -10, energy: -5, morale: 5 }, result: "No little green men—just a loose solar panel banging in the wind." },
right: { label: "Stay inside", effects: { morale: -15, energy: 5 },             result: "Nobody sleeps a wink, even after Elena proves it's just thermal expansion." }
},
{
id: "b_131",
who: "Mateo Silva, Rover Pilot",
text: "Captain, seeing Earth as a tiny blue dot makes me feel terribly lonely out here. Tell me straight: is it bad or good?",
left:  { label: "It's bad",  effects: { morale: -10, oxygen: 5 }, result: "You admit space isolation wears people down, so everyone double-checks seals." },
right: { label: "It's good", effects: { morale: 10, energy: -5 }, result: "You note that if Earth blows itself up, we still get twenty peaceful minutes before the radio signal hits." }
},
{
id: "b_132",
who: "Mei Tanaka, Botanist",
text: "Captain, Martian dirt is full of toxic perchlorates. Rinse it with precious water or try growing hardy weeds?",
left:  { label: "Rinse soil",  effects: { food: 15, oxygen: -10 }, result: "Washing out the chlorine salts lets potatoes thrive, though water reserves dip." },
right: { label: "Plant as-is", effects: { food: -10, morale: -5 }, result: "The plants absorb thyroid-poisoning salts and have to be burned immediately." }
},
{
id: "b_133",
who: "Elena Voss, Chief Engineer",
text: "Captain, Mars air is 95% CO2 and barely 2% nitrogen. Pump extra argon into the hab to keep air pressure up?",
left:  { label: "Use argon",   effects: { oxygen: 10, energy: -10 }, result: "Inert argon stabilЁizes pressure safely, though compressing thin air drains batteries." },
right: { label: "Pure oxygen", effects: { oxygen: 15, morale: -10 }, result: "Breathing feels easy, yet fire risk spikes so high we ban all hot cooking." }
},
{
id: "b_134",
who: "Mission Control (Earth)",
text: "Captain, the Sun is moving between Earth and Mars, scrambling radio waves for two weeks. Send final supply pleas?",
left:  { label: "Beam data",  effects: { energy: -10, morale: 5 },  result: "We blast our manifest before solar plasma blocks every frequency until next month." },
right: { label: "Save power", effects: { energy: 10, morale: -10 }, result: "Two weeks of total radio silence makes the missing supply ship feel even farther." }
},
{
id: "b_135",
who: "Clara Lindqvist, Colony Teacher",
text: "Captain, colonists are begging Earth to launch a rescue ship next week. Explain orbital mechanics or keep hope alive?",
left:  { label: "Explain math", effects: { morale: -10, food: 10 }, result: "Learning Earth and Mars only align every 26 months hurts, yet rationing gets serious." },
right: { label: "Keep hope",    effects: { morale: 10, food: -10 }, result: "People eat normally today, blissfully ignoring how Hohmann transfer windows work." }
},
{
id: "b_136",
who: "Dr. Amara Okafor, Colony Doctor",
text: "Captain, solar storm incoming. Line the shelter with lead plates or stack our water tanks around the walls?",
left:  { label: "Stack water", effects: { oxygen: -5, morale: 10 }, result: "Hydrogen-rich water blocks cosmic rays cleanly, though plumbing gets cramped." },
right: { label: "Use lead",    effects: { morale: -10, energy: 5 }, result: "Heavy cosmic rays hit lead and spray secondary radiation, leaving everyone nauseous." }
},
{
id: "b_137",
who: "Dr. Amara Okafor, Colony Doctor",
text: "Captain, a Martian Sol is 39 minutes longer than an Earth day. Stretch our clocks or keep 24-hour schedules?",
left:  { label: "Mars time",  effects: { morale: 10, energy: -10 }, result: "Adding 39 minutes daily cures insomnia, though power shifts confuse the grid." },
right: { label: "Earth time", effects: { energy: 5, morale: -10 },  result: "Keeping 24-hour clocks feels like permanent jet lag as sunrise drifts each week." }
},
{
id: "b_138",
who: "Elena Voss, Chief Engineer",
text: "Captain, Phobos is passing across the Sun right now, dipping solar output for 30 seconds. Switch to backup cells?",
left:  { label: "Switch cells", effects: { energy: -5, morale: 5 },  result: "Smooth power, and everyone crowds the windows to watch potato-shaped Phobos transit." },
right: { label: "Ride it out",  effects: { energy: -10, morale: 5 }, result: "Lights flicker briefly as Mars's fastest moon races backward across the sky." }
},
{
id: "b_139",
who: "Lucas Vance, Ice Miner",
text: "Captain, dry Martian dust storms build huge static charges on our rovers. Ground them with copper chains?",
left:  { label: "Add chains",   effects: { energy: -5, oxygen: 5 },  result: "Dragging chains bleeds off triboelectric volts before sparks fry our air valves." },
right: { label: "Keep driving", effects: { energy: -15, morale: 5 }, result: "A static arc jumps from a wheel and cooks the rover's main battery controller." }
},
{
id: "b_140",
who: "Lucas Vance, Ice Miner",
text: "Captain, we hauled raw ice blocks into an unpressurized shed to thaw, and they're vanishing without leaving puddles!",
left:  { label: "Seal shed",  effects: { oxygen: 10, energy: -10 }, result: "Pressurizing the room stops ice from sublimating straight into thin Martian air." },
right: { label: "Leave open", effects: { oxygen: -15, energy: 5 },  result: "Below the triple point of water, solid ice turns straight to gas and floats away." }
},
{
id: "b_141",
who: "Dr. Amara Okafor, Colony Doctor",
text: "Captain, low gravity pushes body fluids toward our heads, flattening eyeballs and blurring vision. Buy reading glasses?",
left:  { label: "Print lenses", effects: { energy: -10, morale: 10 }, result: "3D-printed lenses fix the fluid-shift farsightedness so engineers can read gauges." },
right: { label: "Squint hard",  effects: { morale: -10, oxygen: -5 }, result: "Headaches spread, and a blurry-eyed tech misreads a pressure dial by ten bars." }
},
{
id: "b_142",
who: "Mateo Silva, Rover Pilot",
text: "Captain, outside the hab, yelling ten meters away sounds muffled and weird in thin CO2. Mandate radio checks?",
left:  { label: "Radio checks", effects: { energy: -5, oxygen: 5 },  result: "Good call—Mars's cold CO2 air swallows high-pitched voices within meters." },
right: { label: "Hand signals", effects: { oxygen: -10, morale: 5 }, result: "A diver misses a shouted warning in the thin air and drains his tank rushing back." }
},
{
id: "b_143",
who: "Elena Voss, Chief Engineer",
text: "Captain, our oxygen generator splits CO2 into O2 and carbon monoxide. Vent the CO outside or store it for fuel?",
left:  { label: "Vent outside", effects: { oxygen: 10, energy: -5 },  result: "Dumping the toxic byproduct keeps hab air pure while oxygen tanks top off." },
right: { label: "Store fuel",   effects: { energy: 10, oxygen: -15 }, result: "Great rocket propellant, until a leaky valve gives Sector C splitting headaches." }
},
{
id: "b_144",
who: "Lucas Vance, Ice Miner",
text: "Captain, we broke into an ancient basalt lava tube wide enough for a barracks. Move bunks underground?",
left:  { label: "Move bunks",   effects: { morale: -10, oxygen: 10, energy: 5 }, result: "Thick volcanic rock shields us from radiation and cold, though living in a cave stings." },
right: { label: "Stay in dome", effects: { morale: 10, energy: -10 },            result: "Everyone keeps their pink sky view while heaters burn extra power fighting night frost." }
},
{
id: "b_145",
who: "Elena Voss, Chief Engineer",
text: "Captain, a dust devil is heading straight for Solar Field B! Stash the panels or risk letting it blow past?",
left:  { label: "Leave panels", effects: { energy: 15, morale: -5 }, result: "Just like the old rovers, the whirlwind sweeps off red dust and boosts watts 30%." },
right: { label: "Fold arrays",  effects: { energy: -10, oxygen: 5 }, result: "Safe from flying pebbles, though the panels stay coated in light-blocking grime." }
},
{
id: "b_146",
who: "Mei Tanaka, Botanist",
text: "Captain, silica aerogel tiles could warm the greenhouse using sunlight alone, no heaters needed. Install them?",
left:  { label: "Install tiles", effects: { energy: 15, food: 10, morale: -5 }, result: "Solid-state greenhouse physics traps heat brilliantly, though the foam looks cloudy." },
right: { label: "Keep glass",    effects: { energy: -10, morale: 5 },            result: "Clear views of green leaves lift spirits while electric heaters drain the grid." }
},
{
id: "b_147",
who: "Elena Voss, Chief Engineer",
text: "Captain, Martian dirt is rich in iron oxide—we can microwave it into solid bricks instead of using water cement!",
left:  { label: "Microwave dirt", effects: { energy: -15, oxygen: 10 }, result: "Sintered basalt bricks seal cracked airlocks without wasting a single drop of water." },
right: { label: "Save power",     effects: { energy: 10, oxygen: -10 }, result: "Batteries stay full, while old plaster patches crumble in the dry Martian air." }
},
{
id: "b_148",
who: "Clara Lindqvist, Colony Teacher",
text: "Captain, the kids are confused why Martian sunsets glow cool blue instead of red. Hold a science class outside?",
left:  { label: "Sunset class",  effects: { morale: 10, oxygen: -5 }, result: "Watching fine dust scatter red light and pass blue makes everyone love Mars a little." },
right: { label: "Indoor lesson", effects: { oxygen: 5, morale: -5 },  result: "Safe and warm, though drawing blue sunsets on tablets isn't quite the same." }
},
{
id: "b_149",
who: "Mei Tanaka, Botanist",
text: "Captain, in 0.38g, water clings to plant roots instead of draining, drowning our crops. Run air pumps in the trays?",
left:  { label: "Run bubblers", effects: { food: 15, energy: -10 }, result: "Aerating the water stops root suffocation, saving this month's soybean harvest." },
right: { label: "Cut watering", effects: { food: -10, oxygen: 5 },  result: "Capillary cling still rots half the roots, shrinking dinner portions yet again." }
},
{
id: "b_150",
who: "Elena Voss, Chief Engineer",
text: "Captain, winter at the south pole is freezing a quarter of Mars's atmosphere into dry ice, dropping outside pressure!",
left:  { label: "Reinforce seals", effects: { energy: -10, oxygen: 10 }, result: "Higher pressure difference strains the dome, so extra clamps keep our air inside." },
right: { label: "Ignore weather",  effects: { oxygen: -15, energy: 5 },  result: "The seasonal pressure drop pops two weak gaskets before anyone notices the hissing." }
},
{
id: "b_151",
who: "Mateo Silva, Rover Pilot",
text: "Captain, bare metal latches on the cargo trailer fused together in the near-vacuum! Use grease or Teflon liners?",
left:  { label: "Teflon liners", effects: { energy: -5, food: 5 },    result: "Without oxygen to form oxide layers, bare steel cold-welds—Teflon saves the haul." },
right: { label: "Heavy grease",  effects: { energy: -10, morale: -5 }, result: "Standard grease freezes solid at minus sixty, jamming the hatch with rations inside." }
},
{
id: "b_152",
who: "Dr. Amara Okafor, Colony Doctor",
text: "Captain, CO2 hit 0.4% in Command. Nobody is suffocating, yet decision scores are dropping. Boost scrubber fans?",
left:  { label: "Boost fans", effects: { oxygen: 10, energy: -10 }, result: "Clearing mild hypercapnia sharpens everyone's focus before someone makes a fatal typo." },
right: { label: "Leave fans", effects: { energy: 10, morale: -10 }, result: "Brain fog spreads through the crew, leading to three clumsy accidents by Friday." }
},
{
id: "b_153",
who: "Mateo Silva, Rover Pilot",
text: "Captain, we spotted the vanished captain's beacon high up a volcano slope, too thin for drones to fly. Hike up?",
left:  { label: "Send climbers", effects: { oxygen: -15, energy: -10, morale: 10 }, result: "Above 15 km, Mars air is near-vacuum for rotors, so climbers recover his logs by hand." },
right: { label: "Abort search",  effects: { morale: -15, oxygen: 5 },               result: "You leave the beacon blinking in the thin mountain air, fueling wild rumors." }
},
{
id: "b_154",
who: "Elena Voss, Chief Engineer",
text: "Captain, a slow marsquake has been vibrating the floor for twenty minutes! Shut down the reactor as a precaution?",
left:  { label: "Scram reactor", effects: { energy: -15, oxygen: 5 },  result: "With no plate tectonics to snap clean, cooling crust rumbles long—good thing we played safe." },
right: { label: "Keep running",  effects: { energy: 10, morale: -10 }, result: "Power stays steady while everyone grips their bunks through forty minutes of shaking." }
},
{
id: "b_155",
who: "Samir Patel, Colony Cook",
text: "Captain, with the supply ship gone, Mei wants to replace half our potatoes with fast-growing spirulina pond scum.",
left:  { label: "Grow algae",    effects: { food: 15, oxygen: 10, morale: -15 }, result: "Cyanobacteria pumps out huge oxygen and protein, even if every meal is neon green." },
right: { label: "Keep potatoes", effects: { morale: 10, food: -10 },               result: "Real fries keep spirits high, though calorie math looks grim by week eighty." }
},
{
id: "b_156",
who: "Lucas Vance, Ice Miner",
text: "Captain, we hit a pocket of liquid water at minus 50°C—it's packed with magnesium perchlorate salts! Pump it up?",
left:  { label: "Distill brine", effects: { oxygen: 15, energy: -15 }, result: "Boiling off the antifreeze salts yields pure water, though the stills eat megawatts." },
right: { label: "Seal pocket",   effects: { energy: 5, oxygen: -5 },   result: "Too corrosive for our pipes, so we cement it shut and keep chipping solid ice." }
},
{
id: "b_157",
who: "Dr. Amara Okafor, Colony Doctor",
text: "Captain, fine dust tracked past the airlock is chemically reactive—it's oxidizing rubber seals and irritating lungs.",
left:  { label: "Wet airlocks", effects: { oxygen: -10, morale: 10 }, result: "Misting entrants neutralizes soil superoxides on contact, stopping the dry coughs." },
right: { label: "Dry vacuums",  effects: { oxygen: -5, energy: -5 },  result: "Static dust still sneaks past filters, chewing through O-rings twice as fast." }
},
{
id: "b_158",
who: "Mission Control (Earth)",
text: "Captain, debris telemetry suggests the lost supply ship skipped off Mars's thin atmosphere during aerobraking.",
left:  { label: "Track orbit", effects: { energy: -10, food: 10 }, result: "Calculating its elliptical orbit lets us salvage two intact cargo pods on reentry." },
right: { label: "Close file",  effects: { morale: -15, energy: 5 }, result: "Accepting the ship burned up saves dish power, yet grief sweeps the mess hall." }
},
{
id: "b_159",
who: "Dr. Amara Okafor, Colony Doctor",
text: "Captain, bones only rebuild when subjected to sharp impacts, and Mars's 0.38g isn't enough. Mandate jump-rope drills?",
left:  { label: "Jump rope",   effects: { morale: -5, energy: -5, oxygen: -5 }, result: "High-impact hops trigger bone-building cells, though downstairs bunks hate the thuds." },
right: { label: "Skip drills", effects: { morale: 5, energy: 5 },               result: "Relaxed evenings today, while calcium quietly leaches from everyone's femurs." }
},
{
id: "b_160",
who: "Clara Lindqvist, Colony Teacher",
text: "Captain, my astronomy class noticed the vanished captain's last radio burst aimed straight at Deimos, not Earth.",
left:  { label: "Scan Deimos",  effects: { energy: -10, morale: 10 }, result: "Because Deimos orbits slowly near synchronous altitude, he used it as a steady relay." },
right: { label: "Ignore quirk", effects: { morale: -10, energy: 5 },  result: "You chalk it up to a bad antenna, leaving the kids whispering about secret bases." }
},
{
id: "b_161",
who: "Mei Tanaka, Botanist",
text: "Captain, a piglet escaped the farm pen and is bouncing down Corridor B in low gravity! Chase it or lure it?",
left:  { label: "Chase it",    effects: { morale: 15, oxygen: -5, energy: -5 }, result: "Six engineers diving in 0.38g looks ridiculous, but Barnaby is back in his pen." },
right: { label: "Bacon trail", effects: { food: -5, morale: 5 },                result: "Using dried apple slices works fast, though the piglet looks mildly betrayed." }
},
{
id: "b_162",
who: "Elena Voss, Chief Engineer",
text: "Captain, someone flushed a contraband paperback down Vacuum Toilet 3. Shut down the bathroom wing to clear it?",
left:  { label: "Shut wing",       effects: { morale: -10, oxygen: 5 },  result: "Long lines form outside Medbay, yet the greywater pumps stop screaming." },
right: { label: "Reverse suction", effects: { energy: -10, morale: -5 }, result: "It clears the pipe violently, covering two luckless techs in mystery mush." }
},
{
id: "b_163",
who: "Dr. Amara Okafor, Colony Doctor",
text: "Captain, we found your predecessor's slippers neatly lined up outside Airlock 2. Check the security cameras?",
left:  { label: "Check tapes",  effects: { energy: -10, morale: -10 }, result: "The footage was looped for three hours—whoever took him knew the system." },
right: { label: "Bin slippers", effects: { morale: -5, oxygen: 5 },    result: "You toss them in the incinerator, though everyone avoids Airlock 2 all week." }
},
{
id: "b_164",
who: "Samir Patel, Colony Cook",
text: "Captain, single socks keep vanishing in the laundry module. Open up the lint trap or blame low-gravity gremlins?",
left:  { label: "Open trap",      effects: { energy: -5, oxygen: 10 }, result: "We pull out forty lost socks and a wrench, saving the air recycler from fire." },
right: { label: "Blame gremlins", effects: { morale: 5, oxygen: -5 },  result: "Everyone laughs it off until the dryer starts smelling like toasted cotton." }
},
{
id: "b_165",
who: "Lucas Vance, Ice Miner",
text: "Captain, Big Greg's snoring rattles the aluminum walls in Dorm 4. Move him to storage or hand out earplugs?",
left:  { label: "Move Greg",   effects: { morale: -5, energy: 5 },   result: "Dorm 4 finally sleeps, while Greg sulks among crates of freeze-dried peas." },
right: { label: "Print plugs", effects: { energy: -10, morale: 10 }, result: "Foam earplugs bring peace to the barracks, though nobody hears morning alarms." }
},
{
id: "b_166",
who: "Mateo Silva, Rover Pilot",
text: "Captain, someone painted 'My Other Ride Is A Supply Ship' on Rover 2. Scrub it off or let it ride?",
left:  { label: "Scrub it",    effects: { morale: -10, oxygen: 5 }, result: "You waste precious solvent erasing the joke, earning silent glares at lunch." },
right: { label: "Let it ride", effects: { morale: 10, food: -5 },   result: "Even Mission Control chuckles when it shows up on the morning satellite pass." }
},
{
id: "b_167",
who: "Samir Patel, Colony Cook",
text: "Captain, turns out '500 boxes of rations' on the manifest meant 500 single granola bars. Stretch them with oatmeal?",
left:  { label: "Oatmeal mix", effects: { food: 10, morale: -10 }, result: "Crushed granola in grey porridge keeps calories up and spirits rock-bottom." },
right: { label: "Serve whole", effects: { food: -10, morale: 10 }, result: "One glorious afternoon of peanut-butter crunch before the pantry echoes again." }
},
{
id: "b_168",
who: "Clara Lindqvist, Colony Teacher",
text: "Captain, Leo locked himself inside the walk-in freezer trying to make snowballs. Cut the latch or pick the lock?",
left:  { label: "Cut latch", effects: { energy: -10, food: -5 }, result: "Leo is fine and rosy-cheeked, though the freezer door now needs duct tape." },
right: { label: "Pick lock", effects: { morale: -5, oxygen: 5 }, result: "Elena pops it open in two minutes while Leo tries hiding snowballs in his coat." }
},
{
id: "b_169",
who: "Mei Tanaka, Botanist",
text: "Captain, Samir's prized 10-year-old sourdough starter is bubbling out of its jar and taking over the fridge. Bake it?",
left:  { label: "Bake now",  effects: { food: 10, energy: -10 }, result: "Warm crusty loaves fill the hab, though the ovens trip two circuit breakers." },
right: { label: "Toss half", effects: { morale: -10, oxygen: 5 }, result: "Samir mourns his 'baby' like a fallen comrade, yet the fridge closes again." }
},
{
id: "b_170",
who: "Elena Voss, Chief Engineer",
text: "Captain, people are hanging wet underwear over the warm reactor pipes to dry. Ban it or build a drying rack?",
left:  { label: "Ban it",     effects: { morale: -10, energy: 5 },  result: "Safety first, even if half the crew walks around in damp coveralls all week." },
right: { label: "Build rack", effects: { energy: -10, morale: 10 }, result: "A safe heated rack keeps socks dry without risking an electrical short." }
},
{
id: "b_171",
who: "Mission Control (Earth)",
text: "Captain, Earth accidentally beamed a catchy children's song on repeat for six hours. Wipe the audio server?",
left:  { label: "Wipe server", effects: { energy: -5, morale: 10 }, result: "Silence returns, saving three mechanics from throwing wrenches at the speakers." },
right: { label: "Leave file",  effects: { morale: -15, energy: 5 }, result: "By Thursday, everyone is humming it involuntarily and glaring at each other." }
},
{
id: "b_172",
who: "Mission Control (Earth)",
text: "Captain, the supply ship's insurer wants a signed form confirming we didn't secretly steal the cargo. Reply?",
left:  { label: "Send snark", effects: { morale: 15, energy: -5 }, result: "Your reply asking how we hid a 40-ton rocket in our pockets becomes colony legend." },
right: { label: "Sign form",  effects: { morale: -5, food: 5 },    result: "Boring bureaucracy, yet Earth wires a small emergency credit for seeds." }
},
{
id: "b_173",
who: "Dr. Amara Okafor, Colony Doctor",
text: "Captain, the medbay heater is weak, and everyone flinches at my freezing stethoscope. Spare power for a warmer?",
left:  { label: "Add warmer", effects: { energy: -10, morale: 10 }, result: "Annual checkups stop sounding like people sitting on blocks of Martian ice." },
right: { label: "Rub hands",  effects: { energy: 5, morale: -5 },   result: "Amara warms the metal on her sleeves while miners brace for icy chest exams." }
},
{
id: "b_174",
who: "Mateo Silva, Rover Pilot",
text: "Captain, Rover 1's navigation voice keeps telling us to 'make a legal U-turn' in empty craters. Reprogram it?",
left:  { label: "Reprogram", effects: { energy: -5, morale: 5 }, result: "Elena swaps in her own deadpan voice, which somehow makes driving funnier." },
right: { label: "Mute GPS",  effects: { oxygen: -5, energy: 5 }, result: "Quiet cab, until Mateo misses a ridge marker and burns extra suit air backtracking." }
},
{
id: "b_175",
who: "Samir Patel, Colony Cook",
text: "Captain, someone is trading pre-crash ketchup packets for extra shower tokens. Confiscate the stash?",
left:  { label: "Confiscate",   effects: { food: 5, morale: -15 },   result: "You put the packets in the communal bin, and three suspects stop making eye contact." },
right: { label: "Ignore trade", effects: { morale: 10, oxygen: -5 }, result: "Free-market condiments thrive, though extra showers tax the water condensers." }
},
{
id: "b_176",
who: "Lucas Vance, Ice Miner",
text: "Captain, in 0.38g anyone can dunk, so the miners bent the gym hoop and cracked a light panel. Fix it or lower the rim?",
left:  { label: "Fix & raise",   effects: { energy: -10, morale: 10 }, result: "Raising the hoop to five meters turns Tuesday nights into highlight-reel magic." },
right: { label: "Cancel league", effects: { morale: -15, energy: 5 },  result: "No broken lights, just forty grumpy miners bouncing tennis balls off walls." }
},
{
id: "b_177",
who: "Mei Tanaka, Botanist",
text: "Captain, the dusty cactus on your predecessor's desk just sprouted a bright pink flower. Keep it in Command?",
left:  { label: "Keep cactus", effects: { morale: 10, oxygen: -5 }, result: "Everyone takes it as a good omen, even if it technically eats a trickle of water." },
right: { label: "Move to lab", effects: { food: 5, morale: -10 },   result: "Mei studies how it survived neglect, while Command feels colder without it." }
},
{
id: "b_178",
who: "Lucas Vance, Ice Miner",
text: "Captain, Danny tried cutting his own bangs in the mirror and now looks like a barcode. Lend him a spare beanie?",
left:  { label: "Give beanie",  effects: { morale: 5, oxygen: -5 },  result: "Danny's dignity survives, though wool lint ends up in the air filter." },
right: { label: "Let him rock", effects: { morale: 10, energy: -5 }, result: "Everyone laughs so hard at dinner that two techs spill their tea on a console." }
},
{
id: "b_179",
who: "Mei Tanaka, Botanist",
text: "Captain, three harmless fruit flies hatched from an old apple crate. Catch them in a cup or unleash the frogs?",
left:  { label: "Vinegar trap", effects: { food: -5, oxygen: 5 },   result: "A splash of cider vinegar catches all three without turning the lab into a swamp." },
right: { label: "Lab frogs",    effects: { morale: 10, food: -10 }, result: "The frogs miss the flies, eat two strawberry seedlings, and charm the kids." }
},
{
id: "b_180",
who: "Dr. Amara Okafor, Colony Doctor",
text: "Captain, unfiltered Martian UV is fading all the posters in the lounge to ghostly pale. Tint the viewport?",
left:  { label: "Tint glass",  effects: { energy: -5, morale: 5 }, result: "Polarized film saves our vintage movie posters and cuts squinting headaches." },
right: { label: "Leave clear", effects: { morale: -5, energy: 5 }, result: "Great natural light, though Elvis on the wall now looks like a bleached ghost." }
},
{
id: "b_181",
who: "Samir Patel, Colony Cook",
text: "Captain, we found crates of beans that expired six months ago. Smell fine. Serve them as 'Vintage Earth Reserve'?",
left:  { label: "Serve vintage", effects: { food: 15, morale: -5 }, result: "Marketing works wonders until someone reads the stamped date on the tin." },
right: { label: "Compost cans",  effects: { food: -10, oxygen: 5 }, result: "Better safe than food poisoning, even if tonight's soup is mostly hot water." }
},
{
id: "b_182",
who: "Elena Voss, Chief Engineer",
text: "Captain, the command console keeps throwing 'PC LOAD LETTER' errors like a 1990s office printer. Kick it or debug?",
left:  { label: "Percussive fix", effects: { morale: 10, energy: -5 }, result: "One solid thump clears the jam, earning applause from the night shift." },
right: { label: "Run debug",      effects: { energy: -10, oxygen: 5 }, result: "Two hours of code fixes a stuck sensor, though everyone calls you a nerd." }
},
{
id: "b_183",
who: "Clara Lindqvist, Colony Teacher",
text: "Captain, the kids taped a paper smiley face onto the floor-cleaning robot and named it 'Sir Sweeps-a-Lot.' Keep it?",
left:  { label: "Knight him", effects: { morale: 10, energy: -5 }, result: "The colony's official mascot bumps into everyone's ankles with royal pride." },
right: { label: "Peel tape",  effects: { morale: -10, energy: 5 }, result: "Sensors stay unobstructed, and twelve first-graders boycott afternoon reading." }
},
{
id: "b_184",
who: "Elena Voss, Chief Engineer",
text: "Captain, night-shift heaters dip to save power, making morning bathroom visits brutal. Wire up heated seats?",
left:  { label: "Heated seats", effects: { energy: -10, morale: 15 }, result: "Approval ratings skyrocket instantly—best engineering project all year." },
right: { label: "Tough it out", effects: { energy: 10, morale: -10 }, result: "Batteries stay green while crew members sprint out of the stalls shivering." }
},
{
id: "b_185",
who: "Samir Patel, Colony Cook",
text: "Captain, if I put sweetened soy milk outside the airlock for ten minutes, it freezes into soft-serve! Worth the air loss?",
left:  { label: "Make sundaes", effects: { morale: 15, oxygen: -10, food: -5 }, result: "Mars-chilled vanilla swirl tastes heavenly, even if the airlock pumps groan." },
right: { label: "Keep sealed",  effects: { oxygen: 5, morale: -10 },            result: "Smart air conservation, terrible news for everyone holding empty spoons." }
},
{
id: "b_186",
who: "Clara Lindqvist, Colony Teacher",
text: "Captain, we found an unsent birthday card to Earth in your predecessor's drawer. Transmit it on the next burst?",
left:  { label: "Send card",    effects: { energy: -5, morale: 10 }, result: "A tiny human gesture crosses the void, reminding everyone what we're fighting for." },
right: { label: "Keep in file", effects: { morale: -5, energy: 5 },  result: "You save bandwidth, though the unopened envelope sits heavy on your desk." }
},
{
id: "b_187",
who: "Dr. Amara Okafor, Colony Doctor",
text: "Captain, dry hab air builds so much static that every handshake zaps like a taser. Boost the humidifiers?",
left:  { label: "Add humidity", effects: { oxygen: -10, morale: 10 }, result: "No more blue sparks when passing salt shakers, though water tanks dip slightly." },
right: { label: "Elbow bumps",  effects: { oxygen: 5, morale: -5 },   result: "Water stays in the pipes while colonists awkwardly bump elbows in the halls." }
},
{
id: "b_188",
who: "Mateo Silva, Rover Pilot",
text: "Captain, I wedged Rover 2's front wheel in soft red silt. Gun the motors to dig out or walk back for tow cables?",
left:  { label: "Gun motors",   effects: { energy: -15, morale: 5 }, result: "Rooster tails of red dust fly everywhere, freeing the rig with 4% battery left." },
right: { label: "Fetch cables", effects: { oxygen: -10, energy: 5 }, result: "A sweaty two-kilometer hike in spacesuits saves the battery and humbles Mateo." }
},
{
id: "b_189",
who: "Samir Patel, Colony Cook",
text: "Captain, Mei harvested six precious pineapples. The crew is split on putting them on tonight's flatbread. Your call?",
left:  { label: "Put it on",   effects: { food: 5, morale: -5 }, result: "Half the mess hall cheers, while the other half threatens a peaceful mutiny." },
right: { label: "Serve plain", effects: { morale: 5, food: -5 }, result: "Pineapple slices go on the side, keeping peace at the cost of extra prep." }
},
{
id: "b_190",
who: "Clara Lindqvist, Colony Teacher",
text: "Captain, Mars is passing through a comet trail tonight—shooting stars every minute! Dim the dome lights to watch?",
left:  { label: "Dim lights",  effects: { energy: 10, morale: 15, oxygen: -5 }, result: "150 people press against the glass in awe as green streaks burn across the night." },
right: { label: "Keep lights", effects: { morale: -10, energy: -5 },            result: "Work shifts stay on schedule, while everyone glares out at the washed-out sky." }
},
{
id: "b_116",
who: "Samir Patel, Colony Cook",
text: "Captain, I dropped a whole tray of algae burgers! In Mars gravity it took five seconds to hit the floor. Still counts?",
left:  { label: "Serve 'em",   effects: { food: 10, morale: -10 },   result: "Dust adds crunch, though the crew votes to revise the five-second rule." },
right: { label: "Compost 'em", effects: { food: -10, morale: 5 },    result: "Mei's potatoes get a fancy burger dinner while we eat dry crackers." }
},
{
id: "b_117",
who: "Dr. Amara Okafor, Colony Doctor",
text: "Captain, static electricity and low gravity have everyone's hair looking like dandelions. Run the clippers?",
left:  { label: "Buzz cuts",   effects: { energy: -5, morale: -5 },  result: "Everyone looks like a boiled egg now, but at least hats fit." },
right: { label: "Let it grow", effects: { morale: 10, oxygen: -5 },  result: "Big hair is in, though stray strands keep clogging the air filters." }
},
{
id: "b_118",
who: "Mei Tanaka, Botanist",
text: "Captain, I bred a fast-growing space turnip to fix the food shortage, but boiling it smells like old gym socks.",
left:  { label: "Grow turnips", effects: { food: 15, oxygen: -10, morale: -5 }, result: "The pantry is full, and the air scrubbers are filing a formal complaint." },
right: { label: "Stick to soy", effects: { food: -5, morale: 5 },               result: "We stay slightly hungry, yet mercifully able to breathe through our noses." }
},
{
id: "b_119",
who: "Mateo Silva, Rover Pilot",
text: "Captain, rover batteries are low, so the guys want to turn off the motors and coast down a huge crater hill.",
left:  { label: "Let 'em coast", effects: { energy: 10, morale: 10, oxygen: -5 }, result: "They hit 60 kph laughing like maniacs and only blew one tire." },
right: { label: "Drive normal",  effects: { energy: -10, morale: -5 },            result: "Safe, boring, and right on schedule. You're officially the fun police." }
},
{
id: "b_120",
who: "Elena Voss, Chief Engineer",
text: "Captain, the hab's smart thermostat glitched, locked us at 16°C, and keeps calling us 'chilly meatbags' on screen.",
left:  { label: "Reboot AI",   effects: { energy: -10, morale: 5 },  result: "Warmth returns, though the screen now just displays a passive-aggressive ':)'." },
right: { label: "Wear coats",  effects: { energy: 15, morale: -10 }, result: "Great power savings, terrible typing speed with thick winter mittens on." }
},
{
id: "b_121",
who: "Lucas Vance, Ice Miner",
text: "Captain, we found a flat sheet of ice in Trench 4. Can we flood it a bit and hold a colony curling tournament?",
left:  { label: "Play curling", effects: { morale: 15, oxygen: -10 }, result: "Using heavy wrench boxes as stones works great until someone cracks a wall." },
right: { label: "Keep mining",  effects: { oxygen: 10, morale: -10 }, result: "Water reserves look healthy, while the miners sulk with their brooms." }
},
{
id: "b_122",
who: "Clara Lindqvist, Colony Teacher",
text: "Captain, little Timmy drew a picture of the vanished captain riding a giant dust devil. Hang it in the mess hall?",
left:  { label: "Hang it up",  effects: { morale: 10, energy: -5 },  result: "Honestly, it's the best theory anyone has come up with all month." },
right: { label: "Hide it",     effects: { morale: -10, food: 5 },    result: "You file it away, and Timmy draws an even bigger dust devil tomorrow." }
},
{
id: "b_123",
who: "Samir Patel, Colony Cook",
text: "Captain, the espresso machine finally died. Should I serve hot water with brown food coloring as a placebo?",
left:  { label: "Fake coffee", effects: { morale: -15, energy: 5 },  result: "They figured it out in two sips. Hide the heavy spoons." },
right: { label: "Admit truth", effects: { morale: -5, energy: -5 },  result: "Everyone groans, drinks warm water, and moves at half speed all morning." }
},
{
id: "b_124",
who: "Mission Control (Earth)",
text: "Captain, a billionaire sponsor sent a 45-minute motivational speech for the crew. Make attendance mandatory?",
left:  { label: "Watch it",    effects: { morale: -15, energy: -5 }, result: "Nothing boosts morale quite like yacht advice from 200 million miles away." },
right: { label: "Skip it",     effects: { morale: 10, energy: 5 },   result: "You tell Houston the signal dropped, and the whole mess hall cheers." }
},
{
id: "b_125",
who: "Mei Tanaka, Botanist",
text: "Captain, I accidentally bred chili peppers so hot Elena thinks they could strip paint. Put them in the salsa?",
left:  { label: "Make salsa",  effects: { food: 10, oxygen: -5, morale: 5 }, result: "Sweating clears everyone's sinuses, though water consumption triples." },
right: { label: "Give to eng", effects: { energy: 10, food: -5 },            result: "Elena uses the pepper oil to unstick a rusted valve. Science wins." }
},
{
id: "b_126",
who: "Dr. Amara Okafor, Colony Doctor",
text: "Captain, half the night crew has 'Mars Thumb' from playing retro Tetris on the diagnostic tablets. Ban games?",
left:  { label: "Ban Tetris",  effects: { morale: -15, energy: 10 }, result: "Thumbs heal and batteries last longer, while glare levels hit all-time highs." },
right: { label: "Thumb splints", effects: { morale: 10, energy: -5 }, result: "Productivity dips, yet morale skyrockets when Elena sets a new high score." }
},
{
id: "b_127",
who: "Mateo Silva, Rover Pilot",
text: "Captain, we found a supply crate from the lost ship! Haul it back now or scan it first?",
left:  { label: "Haul it now", effects: { energy: -15, morale: -10 }, result: "We dragged it two miles only to find 10,000 individually wrapped plastic sporks." },
right: { label: "Scan first",  effects: { energy: -5, morale: -5 },   result: "X-ray shows it's full of plastic sporks. At least we saved the fuel." }
},
{
id: "b_128",
who: "Elena Voss, Chief Engineer",
text: "Captain, red dust got in the heater coils, so the whole base smells like burnt toast. Tear the vents apart?",
left:  { label: "Clean vents", effects: { energy: -10, oxygen: 10 }, result: "Fresh air returns after a chilly afternoon of sneezing in coveralls." },
right: { label: "Leave it",    effects: { morale: -10, food: 5 },    result: "Everyone keeps wandering into the kitchen looking for breakfast that isn't there." }
},
{
id: "b_129",
who: "Lucas Vance, Ice Miner",
text: "Captain, the crew wants to officially name our new ice drill 'Drilliam Shakespeare.' Sign the paperwork?",
left:  { label: "Sign it",     effects: { morale: 10, energy: -5 },  result: "To dig, or not to dig—either way, the miners are thrilled." },
right: { label: "Use Unit-04", effects: { morale: -10, energy: 5 },  result: "You keep the logs tidy and earn the nickname 'Captain Boring.'" }
},
{
id: "b_130",
who: "Samir Patel, Colony Cook",
text: "Captain, it's Taco Tuesday, except we have no tortillas, no beef, and no cheese. Serve green paste in a folded napkin?",
left:  { label: "Taco Tuesday", effects: { morale: 10, food: 5, oxygen: -5 }, result: "Spirit is what counts, though eating paper napkins isn't great for recycling." },
right: { label: "Cancel tacos", effects: { morale: -15, food: 5 },            result: "You call it 'Nutrient Paste Tuesday' and ruin everyone's week." }
},
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

