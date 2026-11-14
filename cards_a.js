// Survival infrastructure and resource cards for the Mars colony
const CARDS_A = [
  {
    id: "a_01",
    who: "Mei Tanaka, Botanist",
    text: "Captain, the algae vats are booming, crowding the air vents. Should we harvest early for food or let them oxygenate?",
    left: {
      label: "Harvest early",
      effects: { food: 15, oxygen: -10, morale: 5 },
      result: "Fresh protein bars lift spirits, though cabin air turns stale."
    },
    right: {
      label: "Keep growing",
      effects: { food: -10, oxygen: 15 },
      result: "Dense algae blooms enrich the air while pantry shelves stay bare."
    }
  },
  {
    id: "a_02",
    who: "Elena Voss, Chief Engineer",
    text: "Captain, a dust storm is coating the east solar array. Sending a crew outside is risky in these winds.",
    left: {
      label: "Send crew out",
      effects: { energy: 20, morale: -10 },
      result: "Panels are clean and batteries surge, though the crew returns bruised."
    },
    right: {
      label: "Wait it out",
      effects: { energy: -15, morale: 5 },
      result: "Everyone stays safe indoors while battery reserves drop sharply."
    }
  },
  {
    id: "a_03",
    who: "Dr. Amara Okafor, Colony Doctor",
    text: "Captain, without the Earth ship, calorie rations are too tight. People are dizzy during shifts.",
    left: {
      label: "Increase rations",
      effects: { food: -20, morale: 15 },
      result: "Full stomachs restore energy on the floor, though stockpiles plummet."
    },
    right: {
      label: "Hold the line",
      effects: { food: 10, morale: -15 },
      result: "Pantry reserves build up, but bitter grumbling echoes in the mess hall."
    }
  },
  {
    id: "a_04",
    who: "Elena Voss, Chief Engineer",
    text: "Captain, the main CO2 scrubber has a cracked seal. Overdrive the backup or shut down to weld?",
    left: {
      label: "Overdrive backup",
      effects: { oxygen: -10, energy: 15 },
      result: "Skipping the shutdown saves reactor output, though air feels thin."
    },
    right: {
      label: "Full shutdown weld",
      effects: { oxygen: 15, energy: -15, morale: -5 },
      result: "Heaters go cold during the weld, leaving the scrubber good as new."
    }
  },
  {
    id: "a_05",
    who: "Mission Control (Earth)",
    text: "Captain, solar flare sensors show a radiation spike incoming. Divert power to magnetic shielding now.",
    left: {
      label: "Boost shields",
      effects: { energy: -15, morale: 15 },
      result: "Shields absorb the storm safely, keeping the crew calm and protected."
    },
    right: {
      label: "Shelter in tunnels",
      effects: { oxygen: -10, food: -10, energy: 10 },
      result: "Huddling in lava tubes saves grid power but fouls the air."
    }
  },
  {
    id: "a_06",
    who: "Mei Tanaka, Botanist",
    text: "Captain, blight hit sector two of the potato beds. Burn the crop now or flood the bay with UV light?",
    left: {
      label: "Burn the crop",
      effects: { food: -20, oxygen: -5, energy: 5 },
      result: "Fire clears the blight fast, costing us a full month of starch."
    },
    right: {
      label: "Flood with UV",
      effects: { food: 10, energy: -15 },
      result: "High-wattage lamps save the tubers while draining the capacitor banks."
    }
  },
  {
    id: "a_07",
    who: "Tomasz Kowalski, Cook",
    text: "Captain, we recovered edible yeast paste from the bio-filters. Should I blend it into tonight's stew?",
    left: {
      label: "Serve the stew",
      effects: { food: 15, morale: -10 },
      result: "Nobody goes hungry, though the grey paste sparks dark jokes at dinner."
    },
    right: {
      label: "Compost it instead",
      effects: { food: -10, morale: 10 },
      result: "The crew appreciates a decent meal without mystery ingredients."
    }
  },
  {
    id: "a_08",
    who: "Elena Voss, Chief Engineer",
    text: "Captain, our backup fuel cell is overpressurized. Vent oxygen inside or burn it to charge the grid?",
    left: {
      label: "Vent to cabin",
      effects: { energy: -10, oxygen: 15 },
      result: "Fresh oxygen floods the habitats while reserve batteries dip."
    },
    right: {
      label: "Burn for power",
      effects: { energy: 20, oxygen: -10, morale: -5 },
      result: "Batteries hit peak charge, though cabin pressure dips and alarms sound."
    }
  },
  {
    id: "a_09",
    who: "Nadia Vance, Miner",
    text: "Captain, we found a shallow geothermal vent! Tapping it boosts power, or we can mine nitrate salts for crops.",
    left: {
      label: "Tap the vent",
      effects: { energy: 20, oxygen: -5, morale: 5 },
      result: "Steady thermal power floods the grid, though sulfurous fumes seep in."
    },
    right: {
      label: "Mine the nitrates",
      effects: { food: 15, energy: -10 },
      result: "Fertilizer supercharges the greenhouse at the cost of heavy drill power."
    }
  },
  {
    id: "a_10",
    who: "Dr. Amara Okafor, Colony Doctor",
    text: "Captain, recycled air smells like burnt wiring after the night shift. Max the scrubbers or hand out masks?",
    left: {
      label: "Max the scrubbers",
      effects: { oxygen: 15, energy: -10, morale: 5 },
      result: "Crisp, clean air clears everyone's lungs while lights dim in corridors."
    },
    right: {
      label: "Hand out masks",
      effects: { oxygen: -10, energy: 10, morale: -10 },
      result: "Power banks recover nicely, but sleeping in masks leaves everyone irritable."
    }
  },
  {
    id: "a_11",
    who: "Mei Tanaka, Botanist",
    text: "Captain, our dwarf wheat matured early under 24-hour grow lamps. Harvest a feast now or bank freeze-dried rations?",
    left: {
      label: "Serve fresh bread",
      effects: { food: 10, morale: 15 },
      result: "Warm loaves lift colony spirits sky-high, leaving modest surplus."
    },
    right: {
      label: "Freeze-dry harvest",
      effects: { food: 15, energy: -10, morale: -5 },
      result: "Vacuum sealers fill the pantry vaults while crew eats old ration packs."
    }
  },
  {
    id: "a_12",
    who: "Elena Voss, Chief Engineer",
    text: "Captain, clear skies give us peak solar output this week. Route surplus power to grow lamps or battery banks?",
    left: {
      label: "Boost grow lamps",
      effects: { food: 15, oxygen: 10, energy: -10 },
      result: "Crops explode with growth and pump out oxygen, but the lamps eat the surplus."
    },
    right: {
      label: "Charge batteries",
      effects: { energy: 20 },
      result: "Every capacitor bank hits full capacity ahead of the next dust season."
    }
  },
  {
    id: "a_13",
    who: "Tomasz Kowalski, Cook",
    text: "Captain, a freezer seal failed in Storage Bay B! We must cook all 400 kilos of meat tonight or let it spoil.",
    left: {
      label: "Host a banquet",
      effects: { food: -15, morale: 20 },
      result: "Everyone feasts like royalty for two nights, emptying the meat locker."
    },
    right: {
      label: "Salt and ration",
      effects: { food: 10, morale: -10 },
      result: "Chewy, oversalted strips preserve calories, though diners complain loudly."
    }
  },
  {
    id: "a_14",
    who: "Mission Control (Earth)",
    text: "Captain, telemetry shows your electrolysis units are running rich. Keep pumping O2 or throttle back to save power?",
    left: {
      label: "Keep pumping O2",
      effects: { oxygen: 20, energy: -10 },
      result: "High oxygen levels leave everyone wired and alert across the base."
    },
    right: {
      label: "Throttle back",
      effects: { energy: 15, oxygen: -10 },
      result: "Grid reserves climb steadily while habitat pressure returns to baseline."
    }
  },
  {
    id: "a_15",
    who: "Nadia Vance, Miner",
    text: "Captain, a cave-in blocked the east regolith tunnel. Blast it open with shaped charges or clear it by hand?",
    left: {
      label: "Use shaped charges",
      effects: { oxygen: -15, energy: 10, morale: 5 },
      result: "The blast clears the shaft fast, though dust and fumes foul the air."
    },
    right: {
      label: "Dig by hand",
      effects: { food: -10, energy: -10, morale: 5 },
      result: "Crews burn double rations hauling rock, but shared effort lifts spirits."
    }
  },
  {
    id: "a_16",
    who: "Dr. Amara Okafor, Colony Doctor",
    text: "Captain, cabin oxygen is creeping high and making crews reckless. Bleed pressure outside or vent to the greenhouse?",
    left: {
      label: "Bleed outside",
      effects: { oxygen: -15, energy: 5 },
      result: "Airlocks hiss as excess pressure vents safely into the Martian sky."
    },
    right: {
      label: "Vent to plants",
      effects: { oxygen: -10, food: 15 },
      result: "Soil microbes thrive on the rich air, boosting root crop yields."
    }
  },
  {
    id: "a_17",
    who: "Elena Voss, Chief Engineer",
    text: "Captain, the nuclear RTG core is running hot. Shunt excess heat to warm the habs or dump it via radiators?",
    left: {
      label: "Warm the habs",
      effects: { energy: 15, morale: 10, oxygen: -5 },
      result: "Cozy quarters thrill the crew, though dry air irritates throats."
    },
    right: {
      label: "Run radiators",
      effects: { energy: 5, oxygen: 5, morale: -10 },
      result: "Life support runs smoothly, but the cold habs leave everyone shivering."
    }
  },
  {
    id: "a_18",
    who: "Mei Tanaka, Botanist",
    text: "Captain, the fruit orchard needs manual pollination this week. Pull engineers off repairs or skip the fruit crop?",
    left: {
      label: "Pull engineers",
      effects: { food: 15, energy: -15, morale: 10 },
      result: "Fresh strawberries delight the colony while grid maintenance falls behind."
    },
    right: {
      label: "Skip pollination",
      effects: { food: -15, energy: 10 },
      result: "Engineers keep turbines tuned, but blossoms wither without fruit."
    }
  },
  {
    id: "a_19",
    who: "Tomasz Kowalski, Cook",
    text: "Captain, someone hid a still behind the boilers and brewed potato moonshine. Confiscate it or allow a Friday toast?",
    left: {
      label: "Confiscate still",
      effects: { food: 10, energy: 5, morale: -15 },
      result: "Reclaimed potatoes go back to the pantry while grumpy workers mutter."
    },
    right: {
      label: "Allow Friday toast",
      effects: { food: -15, morale: 15 },
      result: "Spirits soar at the Friday party, though next week's starch supply shrinks."
    }
  },
  {
    id: "a_20",
    who: "Mission Control (Earth)",
    text: "Captain, a static discharge fried your main transformer. Bypass safety breakers for full power or run on auxiliary?",
    left: {
      label: "Bypass breakers",
      effects: { energy: 20, oxygen: -10, morale: -5 },
      result: "Full power roars back online, though ozone smells trigger fire alarms."
    },
    right: {
      label: "Run on auxiliary",
      effects: { energy: -15, oxygen: 10, morale: 5 },
      result: "Dim lights and cold showers keep everyone safe while scrubbers run clean."
    }
  },
  {
    id: "a_21",
    who: "Elena Voss, Chief Engineer",
    text: "Captain, micrometeorites punctured Airlock 3. Seal the whole wing permanently or weld a patch under pressure?",
    left: {
      label: "Seal the wing",
      effects: { oxygen: 10, morale: -15 },
      result: "Cabin pressure holds steady, though cramped quarters spark arguments."
    },
    right: {
      label: "Weld under pressure",
      effects: { oxygen: -15, energy: -10, morale: 10 },
      result: "Brave EVA welders save the bay while air hisses out into the dust."
    }
  },
  {
    id: "a_22",
    who: "Mei Tanaka, Botanist",
    text: "Captain, crickets in the protein farm are chirping loudly through the vents. Cull half the swarm or double feed?",
    left: {
      label: "Cull the swarm",
      effects: { food: 15, energy: -10 },
      result: "Roasted cricket flour fills twenty crates, but the cull takes hours of labor."
    },
    right: {
      label: "Double their feed",
      effects: { food: -10, oxygen: 5, morale: -10 },
      result: "The swarm multiplies fast, consuming grain while driving sleepers crazy."
    }
  },
  {
    id: "a_23",
    who: "Dr. Amara Okafor, Colony Doctor",
    text: "Captain, vitamin D levels are crashing after weeks of dust clouds. Run UV tanning bays or issue bitter supplements?",
    left: {
      label: "Run UV bays",
      effects: { energy: -15, morale: 15 },
      result: "Warm artificial sunlight lifts moods across every shift."
    },
    right: {
      label: "Issue supplements",
      effects: { energy: 10, food: -5, morale: -10 },
      result: "Power stays banked, though chalky pills trigger widespread groaning."
    }
  },
  {
    id: "a_24",
    who: "Mission Control (Earth)",
    text: "Captain, a coronal mass ejection will hit Mars in six hours. Power down life support scrubbers or risk fried circuits?",
    left: {
      label: "Power down grid",
      effects: { oxygen: -15, energy: 15, morale: -5 },
      result: "Electronics survive intact while crews breathe stale air in the dark."
    },
    right: {
      label: "Keep systems live",
      effects: { oxygen: 10, energy: -20 },
      result: "Surge protectors burn out saving the air, draining half our capacitors."
    }
  },
  {
    id: "a_25",
    who: "Tomasz Kowalski, Cook",
    text: "Captain, we found fifty crates of spicy sauce from the old crew's stash. Serve it now or trade portions for chores?",
    left: {
      label: "Serve it free",
      effects: { food: -10, morale: 20 },
      result: "Everyone eats double portions just to enjoy real flavor again."
    },
    right: {
      label: "Ration as rewards",
      effects: { food: 5, energy: 10, morale: -10 },
      result: "Extra shifts get completed fast, though favoritism rumors spread."
    }
  },
  {
    id: "a_26",
    who: "Nadia Vance, Miner",
    text: "Captain, our automated drill hit a pocket of trapped methane. Burn it in the turbines or flare it outside?",
    left: {
      label: "Burn in turbines",
      effects: { energy: 20, oxygen: -15 },
      result: "Generators roar at peak output while combustion eats cabin oxygen."
    },
    right: {
      label: "Flare it outside",
      effects: { oxygen: 10, energy: -5 },
      result: "Orange flames light the crater rim while habitat air stays pure."
    }
  },
  {
    id: "a_27",
    who: "Elena Voss, Chief Engineer",
    text: "Captain, dust static built up on the rover hulls. Ground them through the main grid or discharge with copper rods?",
    left: {
      label: "Feed main grid",
      effects: { energy: 15, morale: -10 },
      result: "Free megawatts top off batteries, though sparks shock two mechanics."
    },
    right: {
      label: "Use copper rods",
      effects: { energy: -5, oxygen: 5, morale: 5 },
      result: "Safe grounding keeps equipment pristine and crews relaxed."
    }
  },
  {
    id: "a_28",
    who: "Mei Tanaka, Botanist",
    text: "Captain, mutant fast-growing bamboo is choking the hydroponic channels. Harvest it for biomass fuel or compost?",
    left: {
      label: "Burn for fuel",
      effects: { energy: 15, oxygen: -10 },
      result: "Gasifiers turn stalks into steady electricity while smoke taints vents."
    },
    right: {
      label: "Compost for crops",
      effects: { food: 15, oxygen: 5 },
      result: "Nutrient-rich mulch supercharges next month's vegetable beds."
    }
  },
  {
    id: "a_29",
    who: "Dr. Amara Okafor, Colony Doctor",
    text: "Captain, three engineers caught Martian dust bronchitis. Quarantine the whole dorm or keep them on light duty?",
    left: {
      label: "Quarantine dorm",
      effects: { oxygen: 10, energy: -15, morale: -5 },
      result: "Medical scrubbers purify the air while understaffed turbines lag."
    },
    right: {
      label: "Light duty shifts",
      effects: { energy: 10, morale: -15 },
      result: "Repairs stay on schedule, though coughing spreads across the mess hall."
    }
  },
  {
    id: "a_30",
    who: "Mission Control (Earth)",
    text: "Captain, high-altitude winds cleared the northern ridge. Reposition mobile solar trailers now or wait until dawn?",
    left: {
      label: "Move them now",
      effects: { energy: 20, food: -5, morale: -10 },
      result: "Night crews haul trailers in freezing dark, doubling morning wattage."
    },
    right: {
      label: "Wait until dawn",
      effects: { energy: -10, morale: 10 },
      result: "Rested drivers move the arrays safely after a hot breakfast."
    }
  },
  {
    id: "a_31",
    who: "Tomasz Kowalski, Cook",
    text: "Captain, soy protein vats fermented into sharp cheese! Serve it as a luxury treat or melt it into emergency rations?",
    left: {
      label: "Serve cheese night",
      effects: { food: -10, morale: 15 },
      result: "Cheering colonists toast your leadership over melted soy fondue."
    },
    right: {
      label: "Pack into rations",
      effects: { food: 15, morale: -5 },
      result: "Dense calorie blocks fill the storeroom for lean months ahead."
    }
  },
  {
    id: "a_32",
    who: "Nadia Vance, Miner",
    text: "Captain, we uncovered an abandoned rover battery pack buried in silt. Wire it to the grid or strip it for heaters?",
    left: {
      label: "Join main grid",
      effects: { energy: 20, oxygen: -5 },
      result: "Extra capacity stabilizes the base, though acid fumes sting the eyes."
    },
    right: {
      label: "Strip for heaters",
      effects: { energy: 5, morale: 15, oxygen: -5 },
      result: "Warm bunkrooms end the complaints, but glowing coils dry out the air."
    }
  },
  {
    id: "a_33",
    who: "Elena Voss, Chief Engineer",
    text: "Captain, the Sabatier reactor is clogging with carbon soot. Flush it with spare oxygen or shut down fuel production?",
    left: {
      label: "Flush with oxygen",
      effects: { oxygen: -15, energy: 15 },
      result: "Clean burners roar back to life, costing precious breathable reserves."
    },
    right: {
      label: "Shut down reactor",
      effects: { oxygen: 10, energy: -15 },
      result: "Air tanks stay untouched while battery levels dip across the hab."
    }
  },
  {
    id: "a_34",
    who: "Mei Tanaka, Botanist",
    text: "Captain, honeybees in the dome are agitated by high CO2. Vent excess gas to the pods or cool the dome down?",
    left: {
      label: "Vent to pods",
      effects: { oxygen: -10, food: 15 },
      result: "Calm bees pollinate every blossom, promising a bumper fruit yield."
    },
    right: {
      label: "Cool the dome",
      effects: { energy: -15, oxygen: 10 },
      result: "Chillers steady the climate while plants pump fresh oxygen."
    }
  },
  {
    id: "a_35",
    who: "Dr. Amara Okafor, Colony Doctor",
    text: "Captain, oxygen saturation in Hab B hit 26 percent. Fire risk is rising! Cut electrolysis or open cross-vents?",
    left: {
      label: "Cut electrolysis",
      effects: { oxygen: -15, energy: 15 },
      result: "Power surges into reserve banks as air pressure drops to safe norms."
    },
    right: {
      label: "Open cross-vents",
      effects: { oxygen: -10, morale: 10 },
      result: "Fresh breeze circulates through stale corridors, refreshing everyone."
    }
  },
  {
    id: "a_36",
    who: "Mission Control (Earth)",
    text: "Captain, orbital radar spots a dust devil heading straight for the greenhouse roof. Raise storm shutters now?",
    left: {
      label: "Raise shutters",
      effects: { food: -15, energy: -5, oxygen: 5 },
      result: "Steel plates save the glass, though three days of darkness stunt crops."
    },
    right: {
      label: "Risk the glass",
      effects: { food: 10, oxygen: -15, morale: -10 },
      result: "Crops get full sun, but cracked panes leak air until patched."
    }
  },
  {
    id: "a_37",
    who: "Tomasz Kowalski, Cook",
    text: "Captain, algae crackers are stale and hard as slate. Spend oven power to bake fresh loaves or serve them dry?",
    left: {
      label: "Fire up ovens",
      effects: { food: 10, energy: -15, morale: 15 },
      result: "The smell of warm bread turns a grim week into a celebration."
    },
    right: {
      label: "Serve them dry",
      effects: { food: 15, energy: 10, morale: -15 },
      result: "Calories and kilowatts stay banked while jaws ache at dinner."
    }
  },
  {
    id: "a_38",
    who: "Nadia Vance, Miner",
    text: "Captain, seismic tremors cracked a sealed lava tube rich in frozen CO2. Harvest it for plants or seal the breach?",
    left: {
      label: "Harvest dry ice",
      effects: { food: 15, oxygen: 10, energy: -15 },
      result: "Greenhouse crops thrive on extra carbon while heaters strain."
    },
    right: {
      label: "Seal the breach",
      effects: { energy: 10, morale: -5 },
      result: "Quick foam seals keep the tunnel safe without draining reactor power."
    }
  },
  {
    id: "a_39",
    who: "Elena Voss, Chief Engineer",
    text: "Captain, our flywheel storage is vibrating dangerously at max RPM. Bleed power into grow lights or brake it hard?",
    left: {
      label: "Feed grow lights",
      effects: { food: 15, oxygen: 10, energy: -15 },
      result: "Excess spin becomes dazzling light, boosting crops and fresh air."
    },
    right: {
      label: "Brake the wheel",
      effects: { energy: -10, morale: 5 },
      result: "Friction pads howl, bringing the flywheel safely to rest."
    }
  },
  {
    id: "a_40",
    who: "Mei Tanaka, Botanist",
    text: "Captain, duckweed tanks doubled overnight. Skim half for high-protein meal or let it scrub cabin air?",
    left: {
      label: "Skim for meal",
      effects: { food: 15, oxygen: -10 },
      result: "Green protein cakes fill the pantry while air feels slightly heavy."
    },
    right: {
      label: "Scrub the air",
      effects: { oxygen: 20, food: -5 },
      result: "Lush green mats pump crisp oxygen through every ventilation shaft."
    }
  },
  {
    id: "a_41",
    who: "Dr. Amara Okafor, Colony Doctor",
    text: "Captain, insomnia is spreading during the bright summer sols. Dim corridor lights early or prescribe herbal tea?",
    left: {
      label: "Dim lights early",
      effects: { energy: 15, morale: 10, food: -5 },
      result: "Darkness helps crews sleep soundly while saving megawatts."
    },
    right: {
      label: "Brew herbal tea",
      effects: { food: -10, oxygen: 5, morale: 15 },
      result: "Mint from the botany bay calms nerves across the night shift."
    }
  },
  {
    id: "a_42",
    who: "Mission Control (Earth)",
    text: "Captain, we transmitted new compression firmware for your oxygen pumps. Install now during peak shift or wait?",
    left: {
      label: "Install right now",
      effects: { oxygen: 15, energy: 10, morale: -10 },
      result: "Brief air alarms panic workers, then pumps run cleaner than ever."
    },
    right: {
      label: "Wait for night",
      effects: { oxygen: 10, energy: -5 },
      result: "Smooth overnight update boosts efficiency without disturbing crews."
    }
  },
  {
    id: "a_43",
    who: "Tomasz Kowalski, Cook",
    text: "Captain, an irrigation pipe burst above the dry-goods pantry. Salvage wet flour into porridge or dry it with heaters?",
    left: {
      label: "Cook giant porridge",
      effects: { food: -10, morale: 15 },
      result: "Hot cinnamon porridge warms everyone up before anything spoils."
    },
    right: {
      label: "Run space heaters",
      effects: { food: 15, energy: -15 },
      result: "Industrial blowers save every sack of grain at heavy electrical cost."
    }
  },
  {
    id: "a_44",
    who: "Nadia Vance, Miner",
    text: "Captain, we found pure iron ore near the south ridge. Smelt spare parts now or stockpile raw rock for later?",
    left: {
      label: "Smelt spare parts",
      effects: { energy: -20, oxygen: 10, morale: 10 },
      result: "New valves fix leaky air seals, though the arc furnace drains batteries."
    },
    right: {
      label: "Stockpile raw ore",
      effects: { energy: 10, morale: -5 },
      result: "Grid reserves stay high while mechanics grumble about worn tools."
    }
  },
  {
    id: "a_45",
    who: "Elena Voss, Chief Engineer",
    text: "Captain, frost coated the radiator fins, trapping heat inside. Thaw them electrically or send miners with scrapers?",
    left: {
      label: "Thaw electrically",
      effects: { energy: -15, oxygen: 10 },
      result: "Clean radiators restore thermal balance without risking cold injuries."
    },
    right: {
      label: "Send scrapers out",
      effects: { energy: 15, morale: -15 },
      result: "Grid surges back to full power while frostbitten crews curse the cold."
    }
  },
  {
    id: "a_46",
    who: "Mei Tanaka, Botanist",
    text: "Captain, aphids infested the tomato vines. Release predatory ladybugs or fumigate the bay with sulfur?",
    left: {
      label: "Release ladybugs",
      effects: { food: 15, morale: 10, energy: -10 },
      result: "Beetles wipe out the pests, though the humid bay needs extra heating."
    },
    right: {
      label: "Fumigate with sulfur",
      effects: { food: 10, oxygen: -15, morale: -10 },
      result: "Pests die instantly, though foul air lingers for days."
    }
  },
  {
    id: "a_47",
    who: "Dr. Amara Okafor, Colony Doctor",
    text: "Captain, pantry calories are running dangerously low. Cut non-essential EVA work to save food or push overtime?",
    left: {
      label: "Cut EVA work",
      effects: { food: 15, energy: -15, morale: 5 },
      result: "Resting crews eat half rations comfortably while solar maintenance lags."
    },
    right: {
      label: "Push overtime",
      effects: { food: -15, energy: 20, morale: -10 },
      result: "Extra panels go online fast, burning through emergency protein bars."
    }
  },
  {
    id: "a_48",
    who: "Mission Control (Earth)",
    text: "Captain, atmospheric pressure outside spiked after a regional storm. Run intake compressors to harvest free air?",
    left: {
      label: "Harvest free air",
      effects: { oxygen: 20, energy: -15 },
      result: "Storage tanks hit capacity while compressors drink heavy current."
    },
    right: {
      label: "Keep intakes shut",
      effects: { energy: 10, oxygen: -5 },
      result: "Dust filters stay clean and batteries keep their charge."
    }
  },
  {
    id: "a_49",
    who: "Tomasz Kowalski, Cook",
    text: "Captain, the greenhouse delivered a surprise harvest of sweet melons. Slice them for lunch or juice them for rations?",
    left: {
      label: "Slice for lunch",
      effects: { food: 10, morale: 20 },
      result: "Fresh melon slices bring tears of joy to dust-weary faces."
    },
    right: {
      label: "Concentrate juice",
      effects: { food: 15, morale: -10 },
      result: "Bottled syrup adds weeks of calories, but the crew gets only a sip."
    }
  },
  {
    id: "a_50",
    who: "Elena Voss, Chief Engineer",
    text: "Captain, all four life-support rings are synced and humming. Run an efficiency boost or give the engineering crew rest?",
    left: {
      label: "Run efficiency boost",
      effects: { oxygen: 10, energy: 15, morale: -10 },
      result: "Systems hit textbook perfection while exhausted techs collapse in bunks."
    },
    right: {
      label: "Give crew rest",
      effects: { energy: -5, morale: 20 },
      result: "A rare day off restores hope across all 150 colonists."
    }
  }
];

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