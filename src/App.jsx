import { Routes, Route, Link } from "react-router-dom";
import Generator from "./pages/Generator";
import SavedCharacters from "./pages/SavedCharacters";
import { useLocalStorage } from "./hooks/useLocalStorage";
import "./App.css";

function App() {
  const [savedCharacters, setSavedCharacters] = useLocalStorage(
    "saved-characters",
    [],
  );

  function DeleteCharacter(id) {
    const newSavedCharacters = savedCharacters.filter((char) => char.id !== id);
    setSavedCharacters(newSavedCharacters);
  }

  return (
    <>
      <header>
        <Link className="home" to="/">
          <img className="logo" src="/general/dice.svg" />
          <h1>Roll for hero</h1>
        </Link>

        <nav>
          <Link to="/">Generator</Link>
          <Link to="/saved">Collection ({savedCharacters.length})</Link>
        </nav>
      </header>

      <Routes>
        <Route
          path="/"
          element={
            <Generator
              savedCharacters={savedCharacters}
              setSavedCharacters={setSavedCharacters}
            />
          }
        />
        <Route
          path="/saved"
          element={
            <SavedCharacters
              savedCharacters={savedCharacters}
              onDelete={DeleteCharacter}
            />
          }
        />
      </Routes>
    </>
  );
}

export default App;
