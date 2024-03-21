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
      <img src={hexCell} className="hive-cell" alt="v" />
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
            <div className="sb-toggle-expand">
              <span className="sb-toggle-icon"></span>
            </div>
          </div>
        </div>
        <div className="sb-wordlist-list">
          <div class="sb-wordlist-window">
            <div class="sb-wordlist-pag">
              <div class="sb-wordlist-scroll-anchor"></div>
              <ul class="sb-wordlist-items-pag">
                <li>
                  <span class="sb-anagram">detox</span>
                </li>
                <li>
                  <span class="sb-anagram">detoxed</span>
                </li>
                <li>
                  <span class="sb-anagram">diode</span>
                </li>
                <li>
                  <span class="sb-anagram">ditto</span>
                </li>
                <li>
                  <span class="sb-anagram">dodo</span>
                </li>
                <li>
                  <span class="sb-anagram">doff</span>
                </li>
                <li>
                  <span class="sb-anagram">doffed</span>
                </li>
                <li>
                  <span class="sb-anagram">dote</span>
                </li>
                <li>
                  <span class="sb-anagram">doted</span>
                </li>
                <li>
                  <span class="sb-anagram">dotted</span>
                </li>
                <li>
                  <span class="sb-anagram">doxed</span>
                </li>
                <li>
                  <span class="sb-anagram">doxxed</span>
                </li>
                <li>
                  <span class="sb-anagram">food</span>
                </li>
                <li>
                  <span class="sb-anagram">foodie</span>
                </li>
                <li>
                  <span class="sb-anagram">foot</span>
                </li>
                <li>
                  <span class="sb-anagram">footed</span>
                </li>
                <li>
                  <span class="sb-anagram">footie</span>
                </li>
                <li>
                  <span class="sb-anagram">foxed</span>
                </li>
                <li>
                  <span class="sb-anagram">idiot</span>
                </li>
                <li>
                  <span class="sb-anagram">offed</span>
                </li>
                <li>
                  <span class="sb-anagram">toed</span>
                </li>
                <li>
                  <span class="sb-anagram">toffee</span>
                </li>
                <li>
                  <span class="sb-anagram">toot</span>
                </li>
                <li>
                  <span class="sb-anagram">tooted</span>
                </li>
              </ul>
            </div>
            <div class="sb-kebob"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
