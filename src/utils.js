import { minAge, racesData, abilities } from "./data";

export function randomInt(max) {
  return Math.floor(Math.random() * max);
}

export function GetRandomParam(param) {
  return param[randomInt(param.length)];
}

export function getRaceData(race) {
  const key = race.includes("-") ? race.replace(/-/g, "_") : race;
  return racesData[key];
}

export function GetSpeed(race) {
  return getRaceData(race)?.speed || "???";
}

export function GetLang(race) {
  return getRaceData(race)?.languages || ["???"];
}

export function GetRandomAge(race) {
  const maxAge = getRaceData(race)?.maxAge;
  return maxAge != null ? randomInt(maxAge - minAge + 1) + minAge : "???";
}

export function GetRandomInventory(equipmentResults, count = 8) {
  const inventory = [];
  for (let i = 0; i < count; i++) {
    inventory.push(GetRandomParam(equipmentResults).name);
  }
  return inventory;
}

export function GetRandomRoll(dice) {
  return randomInt(dice) + 1;
}

export function GetInitiative(dex) {
  return GetRandomRoll(20) + dex;
}

export function rollAbilityScore() {
  const rolls = [];
  for (let i = 0; i < 4; i++) {
    rolls.push(randomInt(6) + 1);
  }
  return rolls
    .sort((a, b) => a - b)
    .slice(1)
    .reduce((sum, num) => sum + num, 0);
}

export function GetAbilityScores() {
  const scores = abilities.map((name) => ({
    name,
    value: rollAbilityScore(),
  }));
  return scores;
}

export function Mod(value) {
  return Math.floor((value - 10) / 2);
}
