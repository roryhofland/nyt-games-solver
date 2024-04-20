import Spinner from "./Spinner.js";

export default function WordList({ words, loading, initialSearch }) {
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
