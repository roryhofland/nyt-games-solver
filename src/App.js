import "./App.css";
import { useState } from "react";

function App() {
  const allWords = require("an-array-of-english-words");

  return (
    <div className="App">
      <header className="App-header">🐝 Spelling Bee Solver 🐝</header>
      <main className="App-main">
        <SpellingBee allWords={allWords}></SpellingBee>
      </main>
      <footer className="App-footer">
        <a
          className="footer-link"
          href="https://github.com/roryhofland/nyt-games-solver"
          target="_blank"
          rel="noreferrer"
        >
          github
        </a>
        |
        <a
          className="footer-link"
          href="https://www.nytimes.com/puzzles/spelling-bee"
          target="_blank"
          rel="noreferrer"
        >
          nyt spelling bee
        </a>
      </footer>
    </div>
  );
}

function SpellingBee({ allWords }) {
  const [letters, setLetters] = useState([
    null,
    null,
    null,
    null,
    null,
    null,
    null
  ]);
  const [words, setWords] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleLetterUpdate = (index, newLetter) => {
    const newLetters = letters.map((l, i) => {
      return i === index ? newLetter : l;
    });
    setLetters(newLetters);
  };

  const generateRegex = (letters, centerLetter) => {
    const pattern = `\\b[${letters}]*${centerLetter}[${letters}]*\\b`;
    return new RegExp(pattern, "i");
  };

  const handleSolve = () => {
    setLoading(true);
    const regex = generateRegex(letters.join(""), letters[6]);
    const validWords = allWords
      .filter((w) => w.match(regex))
      .filter((w) => w.length > 3);
    setWords(validWords);
    setTimeout(() => {
      // After the operation is completed, set loading to false
      setLoading(false);
      // Callback function can be called here
    }, 2000);
  };

  const handleClear = () => {
    setLetters([null, null, null, null, null, null, null]);
    const inputs = document.querySelectorAll("[id^='hive-cell-']");
    [...inputs].forEach((input) => {
      console.log(input);
      input.value = "";
    });
  };

  return (
    <>
      <div className="sb-container">
        <Hive
          letters={letters}
          handleLetterUpdate={handleLetterUpdate}
          handleSolve={handleSolve}
          handleClear={handleClear}
        ></Hive>
        <WordList words={words} loading={loading}></WordList>
      </div>
    </>
  );
}

const jumpCell = (e) => {
  const current = parseInt(e.target.id.slice(-1));
  const next = document.getElementById(`hive-cell-${(current + 1) % 7}`);
  setTimeout(() => {
    next.focus();
  }, 25);
};

function Hive({ letters, handleLetterUpdate, handleSolve, handleClear }) {
  const cells = [];
  for (let i = 0; i < 7; i++) {
    cells.push(
      <HiveCell
        key={i}
        index={i}
        handleLetterUpdate={handleLetterUpdate}
        jumpCell={jumpCell}
      />
    );
  }

  const validInput = () => {
    return /^([a-z]{7})$/.test(letters.join("").toLowerCase());
  };

  return (
    <div className="sb-hive-box">
      <div className="sb-input">
        <div className="hive-container">
          <div className="hive">{cells}</div>
        </div>
        <div className="sb-buttons">
          <button className="hive-action" onClick={handleClear}>
            Clear
          </button>
          <button
            className={validInput() ? "hive-action" : "hive-action invalid"}
            onClick={handleSolve}
          >
            Solve →
          </button>
        </div>
      </div>
    </div>
  );
}

function HiveCell({ handleLetterUpdate, jumpCell, index }) {
  return (
    <>
      <svg className="hive-cell outer" viewBox="0 0 120 103.92304845413263">
        <polygon
          className="cell-fill"
          points="0,51.96152422706631 30,0 90,0 120,51.96152422706631 90,103.92304845413263 30,103.92304845413263"
          stroke="white"
          strokeWidth="7.5"
        ></polygon>
        <foreignObject
          className="cell-input-box"
          x="10"
          y="10"
          width="100"
          height="150"
        >
          <div
            className="cell-input-container"
            xmlns="http://www.w3.org/1999/xhtml"
          >
            <input
              type="text"
              maxLength="1"
              id={`hive-cell-${index.toString()}`}
              onInput={(e) => handleLetterUpdate(index, e.target.value)}
              onKeyUp={jumpCell}
              onFocus={(e) => e.target.select()}
            />
          </div>
        </foreignObject>
      </svg>
    </>
  );
}

const Spinner = () => {
  return (
    <div className="spinner-container">
      <div className="spinner"></div>
    </div>
  );
};

function WordList({ words, loading }) {
  const wordList = words.sort().map((word, i) => {
    return (
      <li className="sb-word">
        <span key={i}>{word}</span>
      </li>
    );
  });

  const wordListDisplay = () => {
    if (false) {
      return <Spinner />;
    } else {
      return <ul className="sb-wordlist-items-pag">{wordList}</ul>;
    }
  };

  return (
    <div className="sb-status-box">
      <div className="sb-wordlist-box">
        <div className="sb-wordlist-heading-wrap sb-touch-button">
          <div className="sb-wordlist-summary">
            {wordList.length
              ? `Found ${wordList.length} words.`
              : "Hit solve to generate words."}
          </div>
        </div>
        {wordListDisplay}
        <div className="sb-kebob"></div>
      </div>
    </div>
  );
}

export default App;
