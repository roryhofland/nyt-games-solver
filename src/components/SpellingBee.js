import Hive from "./Hive.js";
import WordList from "./WordList.js";
import { useState } from "react";

export default function SpellingBee({ allWords }) {
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
