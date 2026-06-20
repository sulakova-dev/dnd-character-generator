import "./SavedCharacters.css";
import { Link } from "react-router-dom";

function SavedCharacters({ savedCharacters, onDelete }) {
  if (!savedCharacters.length) {
    return (
      <main>
        <p className="empty-state">
          Your collection is empty. Ready to roll your first hero?
        </p>
        <Link to="/" className="btn-create">
          Create your first character
        </Link>
      </main>
    );
  }

  return (
    <main>
      <div className="collection-header">
        <h1>Collection</h1>
        <span>{savedCharacters.length} characters</span>
      </div>

      <section className="saved-section">
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
                <div className="saved-detail">
                  <p>
                    {char.race} • {char.class}
                  </p>
                  <p>level {char.lvl}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default SavedCharacters;
