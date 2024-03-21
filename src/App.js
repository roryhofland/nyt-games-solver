import hexCell from "./hexCell.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">lala</header>
      <main className="App-main">
        <SpellingBee></SpellingBee>
      </main>
      <footer className="App-footer"></footer>
    </div>
  );
}

function SpellingBee() {
  return (
    <>
      <div className="sb-container">
        <WordList></WordList>
        <Hive></Hive>
      </div>
    </>
  );
}

function Hive() {
  return (
    <div className="sb-hive-box">
      <div className="sb-input">
        <div className="hive-container">
          <div className="hive">
            <HiveCell></HiveCell>
            <HiveCell></HiveCell>
            <HiveCell></HiveCell>
            <HiveCell></HiveCell>
            <HiveCell></HiveCell>
            <HiveCell></HiveCell>
            <HiveCell></HiveCell>
          </div>
        </div>
      </div>
    </div>
  );
}

function HiveCell() {
  return (
    <>
      <svg
        className="hive-cell outer"
        viewBox="0 0 120 103.92304845413263"
        data-testid="hive-cell-outer"
      >
        <polygon
          className="cell-fill"
          points="0,51.96152422706631 30,0 90,0 120,51.96152422706631 90,103.92304845413263 30,103.92304845413263"
          stroke="white"
          strokeWidth="7.5"
          data-testid="cell-fill"
        ></polygon>
        <input
          className="cell-input"
          type="text"
          maxLength="1"
          placeholder="t"
          x="50%"
          y="50%"
          dy="0.35em"
        />
        <text
          class="cell-letter"
          x="50%"
          y="50%"
          dy="0.35em"
          data-testid="cell-letter"
        >
          o
        </text>
      </svg>
    </>
  );
}

function WordList() {
  return (
    <div className="sb-status-box">
      <div className="sb-wordlist-box">
        <div className="sb-wordlist-heading">
          <div
            className="sb-wordlist-heading-wrap sb-touch-button"
            data-testid="touch-button"
          >
            <div className="sb-wordlist-summary">You have found 24 words</div>
          </div>
        </div>
        <div className="sb-wordlist-list">
          <div className="sb-wordlist-scroll-anchor"></div>
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
    </div>
  );
}

export default App;
