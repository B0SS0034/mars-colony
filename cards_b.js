const INTRO = {
  title: "The Silent Red",
  text: "A Mars colony of 150 souls relies on Earth's supply ships every two years. This time, the ship never arrived, and food is running dangerously low. Our previous captain vanished without a trace, leaving only questions. The colonists have elected you as the new Captain. Keep us alive."
};

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

// Сюда будем вставлять карточки
const CARDS_B = [];