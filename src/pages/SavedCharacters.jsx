function SavedCharacters({ savedCharacters, onDelete }) {
  if (!savedCharacters.length) {
    return <p>No saved characters yet.</p>;
  }

  return (
    <main>
      <section className="saved-section">
        <h3>Saved Characters ({savedCharacters.length})</h3>
        <div className="saved-grid">
          {savedCharacters.map((char) => (
            <div
              key={char.id}
              className="saved-card"
              style={{
                backgroundImage: `url(/${char.gender.toLowerCase()}-char/${char.race}.png)`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <button onClick={() => onDelete(char.id)}>X</button>
              <div className="saved-card-footer">
                <p className="saved-name">{char.name}</p>
                <p className="saved-detail">
                  {char.race} — {char.class}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default SavedCharacters;
