import "./App.css";
import { useState } from "react";

function App() {
  const allWords = require("an-array-of-english-words");

  return (
    <div className="App">
      <header className="App-header">lala</header>
      <main className="App-main">
        <SpellingBee allWords={allWords}></SpellingBee>
      </main>
      <footer className="App-footer"></footer>
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

  const handleSolve = () => {
    const r = new RegExp(letters.join("").toLowerCase(), "gi");
    const validWords = allWords.filter(() => r).filter((w) => w.length > 3);
    setWords(validWords);
    alert(validWords);
  };

  return (
    <>
      <div className="sb-container">
        <Hive
          letters={letters}
          handleLetterUpdate={handleLetterUpdate}
          handleSolve={handleSolve}
        ></Hive>
        <WordList></WordList>
      </div>
    </>
  );
}

function Hive({ letters, handleLetterUpdate, handleSolve }) {
  const cells = [];
  for (let i = 0; i < 7; i++) {
    // note: we are adding a key prop here to allow react to uniquely identify each
    // element in this array. see: https://reactjs.org/docs/lists-and-keys.html
    cells.push(<HiveCell index={i} handleLetterUpdate={handleLetterUpdate} />);
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

function WordList() {
  return (
    <div className="sb-status-box">
      <div className="sb-wordlist-box">
        <div className="sb-wordlist-heading-wrap sb-touch-button">
          <div className="sb-wordlist-summary">You have found 24 words</div>
        </div>
        <ul className="sb-wordlist-items-pag">
          <li>
            <span className="sb-anagram">detox</span>
          </li>
          <li>
            <span className="sb-anagram">detoxed</span>
          </li>
          <li>
            <span className="sb-anagram">diode</span>
          </li>
          <li>
            <span className="sb-anagram">ditto</span>
          </li>
          <li>
            <span className="sb-anagram">dodo</span>
          </li>
          <li>
            <span className="sb-anagram">doff</span>
          </li>
          <li>
            <span className="sb-anagram">doffed</span>
          </li>
          <li>
            <span className="sb-anagram">dote</span>
          </li>
          <li>
            <span className="sb-anagram">doted</span>
          </li>
          <li>
            <span className="sb-anagram">dotted</span>
          </li>
          <li>
            <span className="sb-anagram">doxed</span>
          </li>
          <li>
            <span className="sb-anagram">doxxed</span>
          </li>
          <li>
            <span className="sb-anagram">food</span>
          </li>
          <li>
            <span className="sb-anagram">foodie</span>
          </li>
          <li>
            <span className="sb-anagram">foot</span>
          </li>
          <li>
            <span className="sb-anagram">footed</span>
          </li>
          <li>
            <span className="sb-anagram">footie</span>
          </li>
          <li>
            <span className="sb-anagram">foxed</span>
          </li>
          <li>
            <span className="sb-anagram">idiot</span>
          </li>
          <li>
            <span className="sb-anagram">offed</span>
          </li>
          <li>
            <span className="sb-anagram">toed</span>
          </li>
          <li>
            <span className="sb-anagram">toffee</span>
          </li>
          <li>
            <span className="sb-anagram">toot</span>
          </li>
          <li>
            <span className="sb-anagram">tooted</span>
          </li>
        </ul>
        <div className="sb-kebob"></div>
      </div>
    </div>
  );
}

export default App;
