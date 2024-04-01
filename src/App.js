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
        >
          github
        </a>
        |
        <a
          className="footer-link"
          href="https://www.nytimes.com/puzzles/spelling-bee"
          target="_blank"
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
    const regex = generateRegex(letters.join(""), letters[6]);
    const validWords = allWords
      .filter((w) => w.match(regex))
      .filter((w) => w.length > 3);
    setWords(validWords);
  };

  return (
    <>
      <div className="sb-container">
        <Hive
          letters={letters}
          handleLetterUpdate={handleLetterUpdate}
          handleSolve={handleSolve}
        ></Hive>
        <WordList words={words}></WordList>
      </div>
    </>
  );
}

const jumpCell = (e) => {
  next = e.nextElementSibling;
};

function Hive({ letters, handleLetterUpdate, handleSolve }) {
  const cells = [];
  for (let i = 0; i < 7; i++) {
    cells.push(
      <HiveCell
        index={i}
        handleLetterUpdate={handleLetterUpdate}
        onKeyUp={(e) => jumpCell(e)}
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
        <button
          className={validInput() ? "hive-action" : "hive-action invalid"}
          onClick={handleSolve}
        >
          Solve →
        </button>
      </div>
    </div>
  );
}

function HiveCell({ handleLetterUpdate, index }) {
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
              placeholder="t"
              onInput={(e) => handleLetterUpdate(index, e.target.value)}
            />
          </div>
        </foreignObject>
      </svg>
    </>
  );
}

function WordList({ words }) {
  const wordList = words.sort().map((word, i) => {
    return (
      <li className="sb-word">
        <span key={i}>{word}</span>
      </li>
    );
  });

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
        <ul className="sb-wordlist-items-pag">{wordList}</ul>
        <div className="sb-kebob"></div>
      </div>
    </div>
  );
}

export default App;
