import "./App.css";
import Popup from "reactjs-popup";
import { useState } from "react";
import "reactjs-popup/dist/index.css";

function App() {
  const allWords = require("an-array-of-english-words");

  return (
    <div className="App">
      <header className="App-header">NYT Spelling Bee Solver</header>
      <main className="App-main">
        <SpellingBee allWords={allWords}></SpellingBee>
      </main>
      <footer className="App-footer">
        <Popup
          contentStyle={{ padding: "0px" }}
          trigger={
            <a className="footer-link" href="#">
              about
            </a>
          }
          modal
        >
          <About></About>
        </Popup>
        |
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
    null,
  ]);
  const [words, setWords] = useState([]);
  const [loading, setLoading] = useState(false);
  const [initialSearch, setInitialSearch] = useState(true);

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
    setTimeout(() => {
      setLoading(false);
      setInitialSearch(false);
      setWords(validWords);
    }, 800);
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
        <WordList
          words={words}
          loading={loading}
          initialSearch={initialSearch}
        ></WordList>
      </div>
    </>
  );
}

const About = () => {
  return (
    <div className="sb-modal">
      {" "}
      <div className="sb-modal-header"> About the solver </div>{" "}
      <div className="sb-modal-content">
        {" "}
        This tool can be used as a reference guide for the{" "}
        <a
          href="https://www.nytimes.com/puzzles/spelling-bee"
          target="_blank"
          rel="noreferrer"
        >
          New York Times Spelling Bee
        </a>{" "}
        game. In the game itself, valid words are hand-curated, so this solver
        will likely generate a superset of answers that contain words not
        accepted by the game. The solver uses{" "}
        <a
          href="https://www.npmjs.com/package/an-array-of-english-words"
          target="_blank"
          rel="noreferrer"
        >
          an-array-of-english-words
        </a>{" "}
        as a solution domain.
        <br />
        <br />
        To use the solver, simply fill all the hive cells with letters. Then hit
        'solve' to generate a list of words that use only those letters, and
        contain at least one instance of the center letter.
      </div>{" "}
    </div>
  );
};

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
              placeholder="_"
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

const Spinner = ({ loading }) => {
  return (
    <div
      className={
        loading
          ? "spinner-container fade-component"
          : "spinner-container fade-component active"
      }
    >
      <div className="spinner"></div>
    </div>
  );
};

function WordList({ words, loading, initialSearch }) {
  const wordList = words.sort().map((word, i) => {
    return (
      <li className="sb-word">
        <span key={i}>{word}</span>
      </li>
    );
  });

  const titleCard = () => {
    if (loading) {
      return "Searching...";
    } else if (!initialSearch) {
      return `Found ${wordList.length} words.`;
    } else {
      return "Hit solve to generate words.";
    }
  };

  return (
    <div className="sb-status-box">
      <div className="sb-wordlist-box">
        <div className="sb-wordlist-heading-wrap sb-touch-button">
          <div className="sb-wordlist-summary">{titleCard()}</div>
        </div>
        <ul className="sb-wordlist-items-pag">
          <Spinner loading={loading}></Spinner>
          {wordList}
        </ul>
      </div>
    </div>
  );
}

export default App;
