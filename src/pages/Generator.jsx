import { useState } from "react";

import {
  GetSpeed,
  GetLang,
  GetRandomAge,
  GetRandomParam,
  GetRandomInventory,
  GetAbilityScores,
  GetInitiative,
  Mod,
} from "../utils";
import {
  gender,
  names,
  hitDice,
  mottos,
  backgrounds,
  placeholderCharacter,
} from "../data";
import "./Generator.css";

function SaveIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
    </svg>
  );
}

function Generate({ savedCharacters, setSavedCharacters }) {
  const [loading, setLoading] = useState(false);
  const [character, setCharacter] = useState(null);
  const displayCharacter = character || placeholderCharacter;
  const isPlaceholder = !character;

  const cardStyle = {
    backgroundImage: !isPlaceholder
      ? `url(/${displayCharacter.gender.toLowerCase()}-char/${displayCharacter.race}.png)`
      : undefined,
  };
  const profBonus = displayCharacter.lvl < 5 ? "+2" : "+3";
  const conMod = Mod(displayCharacter.abilities[2]?.value ?? 10);
  const dexMod = Mod(displayCharacter.abilities[1]?.value ?? 10);

  function SaveCharacter() {
    if (!character) return;

    const isDuplicate = savedCharacters.some(
      (char) => char.id === character.id,
    );

    if (!isDuplicate) {
      setSavedCharacters([...savedCharacters, character]);
    }
  }

  const API = "https://www.dnd5eapi.co/api/2014";

  function GenerateCharacter() {
    setLoading(true);
    Promise.all([
      fetch(`${API}/races`).then((response) => response.json()),
      fetch(`${API}/classes`).then((response) => response.json()),
      fetch(`${API}/alignments`).then((response) => response.json()),
      fetch(`${API}/equipment`).then((response) => response.json()),
    ])
      .then(([raceData, classData, alignmentData, inventoryData]) => {
        const charGender = GetRandomParam(gender);
        const randRace = GetRandomParam(raceData.results).name;

        setCharacter({
          id: Date.now(),
          lvl: 1,
          name: GetRandomParam(names[charGender.toLowerCase()]),
          gender: charGender,
          age: GetRandomAge(randRace),
          race: randRace,
          class: GetRandomParam(classData.results).name,
          alignment: GetRandomParam(alignmentData.results).name,
          abilities: GetAbilityScores(),
          motto: GetRandomParam(mottos),
          background: GetRandomParam(backgrounds),
          inventory: GetRandomInventory(inventoryData.results),
          initiative: GetInitiative(dexMod),
        });
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }

  return (
    <>
      <main>
        <div className="main-layout">
          <section className="character-card" style={cardStyle}>
            <div className="character-header">
              <h1>{displayCharacter.name}</h1>
              <h2>
                {displayCharacter.race} • {displayCharacter.class}
              </h2>
            </div>
            <div className="character-img">
              {loading && (
                <div className="loading-spinner">
                  <img src="/general/loading-spinner.gif" alt="loading" />
                </div>
              )}
            </div>
            <div className="character-footer">
              <div className="character-info">
                <h3>
                  {displayCharacter.gender} - {displayCharacter.age} y.o.
                </h3>
                <h3>{displayCharacter.alignment}</h3>
              </div>

              <div className="buttons">
                <button
                  className="character-card-btn"
                  onClick={GenerateCharacter}
                  disabled={loading}
                >
                  Generate character
                </button>
                <button
                  className="character-card-btn"
                  onClick={SaveCharacter}
                  disabled={isPlaceholder || loading}
                >
                  <SaveIcon />
                  <span className="tooltip">Save character</span>
                </button>
              </div>
            </div>
          </section>

          <div className="character-sidebar">
            <div className="ability-panel">
              <div className="ability-header">
                <h3>ABILITIES</h3>
                <span className="proficiency-bonus">
                  Proficiency Bonus: {profBonus}
                </span>
              </div>

              <section className="ability-grid">
                {displayCharacter.abilities.map((score) => {
                  const mod = Mod(score.value);
                  return (
                    <div key={score.name} className="ability-box">
                      <span className="ability-label">
                        {score.name.slice(0, 3).toUpperCase()}
                      </span>
                      <span className="ability-mod">
                        {mod > 0 ? "+" : ""}
                        {mod}
                      </span>
                      <span className="ability-num">{score.value}</span>
                    </div>
                  );
                })}
              </section>
            </div>

            <section className="character-details">
              <div className="general-info">
                <h3>GENERAL INFO</h3>
                <div className="stat-row">
                  <span className="stat-label">Level</span>
                  <span className="stat-value">{displayCharacter.lvl}</span>
                </div>

                <div className="stat-row">
                  <span className="stat-label">Hit Points</span>
                  <span className="stat-value">
                    {isPlaceholder
                      ? "???"
                      : hitDice[displayCharacter.class] + conMod}
                  </span>
                </div>

                <div className="stat-row">
                  <span className="stat-label">Armor Class</span>
                  <span className="stat-value">
                    {isPlaceholder ? "???" : 10 + dexMod}
                  </span>
                </div>

                <div className="stat-row">
                  <span className="stat-label">Speed (ft.)</span>
                  <span className="stat-value">
                    {GetSpeed(displayCharacter.race)}
                  </span>
                </div>

                <div className="stat-row">
                  <span className="stat-label">Initiative</span>
                  <span className="stat-value">
                    {isPlaceholder ? "???" : displayCharacter.initiative}
                  </span>
                </div>

                <div className="stat-row">
                  <span className="stat-label">Hit dice</span>
                  <span className="stat-value">
                    d{isPlaceholder ? "?" : hitDice[displayCharacter.class]}
                  </span>
                </div>
              </div>

              <div className="character-flavor">
                <div className="motto">
                  <h3>MOTTO</h3>
                  <span>{displayCharacter.motto}</span>
                </div>

                <div className="motto">
                  <h3>BACKGROUND</h3>
                  <span>{displayCharacter.background}</span>
                </div>
              </div>

              <div className="languages">
                <h3>LANGUAGES</h3>
                <ul>
                  {GetLang(displayCharacter.race).map((lang, idx) => (
                    <li key={idx}>{lang}</li>
                  ))}
                </ul>
              </div>
            </section>

            <section className="inventory">
              <h3>INVENTORY</h3>
              <div className="inventory-tags">
                {displayCharacter.inventory.map((item, i) => (
                  <span key={i} className="item-tag">
                    {item}
                  </span>
                ))}
              </div>
            </section>
          </div>
        </div>
      </main>
    </>
  );
}

export default Generate;
