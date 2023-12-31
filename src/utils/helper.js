var nameList = [
  "Time",
  "Past",
  "Future",
  "Dev",
  "Fly",
  "Flying",
  "Soar",
  "Soaring",
  "Power",
  "Falling",
  "Fall",
  "Jump",
  "Cliff",
  "Mountain",
  "Rend",
  "Red",
  "Blue",
  "Green",
  "Yellow",
  "Gold",
  "Demon",
  "Demonic",
  "Panda",
  "Cat",
  "Kitty",
  "Kitten",
  "Zero",
  "Memory",
  "Trooper",
  "XX",
  "Bandit",
  "Fear",
  "Light",
  "Glow",
  "Tread",
  "Deep",
  "Deeper",
  "Deepest",
  "Mine",
  "Your",
  "Worst",
  "Enemy",
  "Hostile",
  "Force",
  "Video",
  "Game",
  "Donkey",
  "Mule",
  "Colt",
  "Cult",
  "Cultist",
  "Magnum",
  "Gun",
  "Assault",
  "Recon",
  "Trap",
  "Trapper",
  "Redeem",
  "Code",
  "Script",
  "Writer",
  "Near",
  "Close",
  "Open",
  "Cube",
  "Circle",
  "Geo",
  "Genome",
  "Germ",
  "Spaz",
  "Shot",
  "Echo",
  "Beta",
  "Alpha",
  "Gamma",
  "Omega",
  "Seal",
  "Squid",
  "Money",
  "Cash",
  "Lord",
  "King",
  "Duke",
  "Rest",
  "Fire",
  "Flame",
  "Morrow",
  "Break",
  "Breaker",
  "Numb",
  "Ice",
  "Cold",
  "Rotten",
  "Sick",
  "Sickly",
  "Janitor",
  "Camel",
  "Rooster",
  "Sand",
  "Desert",
  "Dessert",
  "Hurdle",
  "Racer",
  "Eraser",
  "Erase",
  "Big",
  "Small",
  "Short",
  "Tall",
  "Sith",
  "Bounty",
  "Hunter",
  "Cracked",
  "Broken",
  "Sad",
  "Happy",
  "Joy",
  "Joyful",
  "Crimson",
  "Destiny",
  "Deceit",
  "Lies",
  "Lie",
  "Honest",
  "Destined",
  "Bloxxer",
  "Hawk",
  "Eagle",
  "Hawker",
  "Walker",
  "Zombie",
  "Sarge",
  "Capt",
  "Captain",
  "Punch",
  "One",
  "Two",
  "Uno",
  "Slice",
  "Slash",
  "Melt",
  "Melted",
  "Melting",
  "Fell",
  "Wolf",
  "Hound",
  "Legacy",
  "Sharp",
  "Dead",
  "Mew",
  "Chuckle",
  "Bubba",
  "Bubble",
  "Sandwich",
  "Smasher",
  "Extreme",
  "Multi",
  "Universe",
  "Ultimate",
  "Death",
  "Ready",
  "Monkey",
  "Elevator",
  "Wrench",
  "Grease",
  "Head",
  "Theme",
  "Grand",
  "Cool",
  "Kid",
  "Boy",
  "Girl",
  "Vortex",
  "Paradox",
];

export function generateRandomName() {
  return nameList[Math.floor(Math.random() * nameList.length)];
}

export function getRandomMessage() {
  const randomChatMessages = [
    "Hey everyone! 🌟",
    "Who's excited for this stream? 🎉",
    "Greetings from [Your Location]!",
    "First time here, loving the content!",
    "Can we get a shoutout to [Your Favorite YouTuber]?",
    "I'm sipping my coffee ☕ What's everyone up to?",
    "Press F if you're here from [Specific Event/Reference]",
    "Chat fam, where you at? 🌎",
    "Drop your favorite emoji to show some love! 💙",
    "Predictions for what's coming up next?",
    "Any fellow gamers in the chat? 🎮",
    "Let's break the like button for this awesome stream!",
    "Sending positive vibes to everyone today! ✨",
    "I'm multitasking between work and this stream. Anyone else?",
    "What's your all-time favorite video from this channel?",
    "Can someone explain what just happened? I blinked!",
    "Spamming [Emote/Emoji] in 3... 2... 1...",
    "Who else is watching in their pajamas? 🛌",
    "Just hit that subscribe button! 🔔",
    "I've been waiting for this moment all day!",
    "Did [YouTuber's Name] just dab? 😂",
    "Let's see if we can reach [Viewers Goal] today!",
    "This chat is moving so fast, I can't keep up!",
    "Who's your favorite content creator outside of this channel?",
    "Can we get a shoutout for [Your City/Country]?",
  ];

  const randomIndex = Math.floor(Math.random() * randomChatMessages.length);
  return randomChatMessages[randomIndex];
}
