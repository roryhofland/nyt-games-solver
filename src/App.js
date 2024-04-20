import "./App.css";
import Popup from "reactjs-popup";
import SpellingBee from "./components/SpellingBee.js";
import About from "./components/About.js";
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

export default App;
