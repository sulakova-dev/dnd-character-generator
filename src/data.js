export const minAge = 15;
export const gender = ["Female", "Male"];

export const abilities = [
  "Strength",
  "Dexterity",
  "Constitution",
  "Intelligence",
  "Wisdom",
  "Charisma",
];

export const names = {
  male: ["Thorn", "Grom", "Eldrin", "Borin", "Zephyr"],
  female: ["Lia", "Nyx", "Seraphine", "Vex", "Mira"],
};

export const racesData = {
  Dragonborn: { speed: 30, languages: ["Common", "Draconic"], maxAge: 80 },
  Dwarf: { speed: 25, languages: ["Common", "Dwarvish"], maxAge: 350 },
  Elf: { speed: 30, languages: ["Common", "Elvish"], maxAge: 750 },
  Gnome: { speed: 25, languages: ["Common", "Gnomish"], maxAge: 500 },
  Halfling: { speed: 25, languages: ["Common", "Halfling"], maxAge: 150 },
  Half_Elf: {
    speed: 30,
    languages: ["Common", "Elvish", "Sylvan"],
    maxAge: 180,
  },
  Half_Orc: { speed: 30, languages: ["Common", "Orcish"], maxAge: 75 },
  Human: { speed: 30, languages: ["Common"], maxAge: 100 },
  Tiefling: { speed: 30, languages: ["Common", "Infernal"], maxAge: 100 },
};

export const hitDice = {
  Barbarian: 12,
  Fighter: 10,
  Paladin: 10,
  Ranger: 10,
  Monk: 8,
  Rogue: 8,
  Bard: 8,
  Cleric: 8,
  Druid: 8,
  Warlock: 8,
  Sorcerer: 6,
  Wizard: 6,
};

export const mottos = [
  "Courage and stupidity",
  "Strike first, ask questions later",
  "Plan? What plan?",
  "I'm not here to think",
  "Smile, tomorrow will be worse",
  "It's not about winning, it's about surviving",
  "Better beg forgiveness than ask permission",
  "Save the world first, reflect later",
  "If you can't win — change the rules",
  "Loot first, feel sorry later",
  "Never split the party",
  "Trust your gut, especially if it's big",
  "A clean sword is a bored sword",
  "Stealth is just advanced hiding",
  "What doesn't kill you makes great story",
  "Gold solves most problems, steel solves the rest",
  "Always check for traps, or don't — more fun that way",
  "When in doubt, blame the wizard",
  "Honor is great, but gold is better",
  "Dungeons are just basements with attitude",
  "If the door is locked, you're on the right path",
  "Never trust a smiling elf",
  "Keep your friends close and your healing potions closer",
  "Always carry a ten-foot pole, and a backup ten-foot pole",
  "Chaos is a ladder, and I'm carrying the party up",
];

export const backgrounds = [
  "Broke into a tyrant's castle and stole weapons for their people",
  "Grew up in the slums, knows every shortcut and back alley",
  "Serves a deity that speaks to them in dreams",
  "A former soldier, deserted after an unwinnable battle",
  "A wandering merchant who has seen too much",
  "Apprentice to a great wizard, accidentally burned down the library",
  "Raised by wolves in the forest, still struggles with people",
  "A noble knight stripped of their title for another's crime",
  "A retired pirate looking for honest work",
  "An escaped slave who swore to free the rest",
  "A child of prophecy that has yet to come true",
  "Banished from the thieves' guild for excessive honesty",
  "The last survivor of their clan",
  "Made a pact with a demon by accident — still waiting for the catch",
  "A cook who mixed the wrong ingredients and opened a portal to the Abyss",
];

export const placeholderCharacter = {
  id: null,
  lvl: 1,
  name: "???",
  gender: "gender",
  age: "100",
  race: "race",
  class: "class",
  alignment: "neutral",
  motto: "???",
  background: "???",
  abilities: abilities.map((name) => ({ name, value: 10 })),
  inventory: ["..."],
  initiative: "???"
};
