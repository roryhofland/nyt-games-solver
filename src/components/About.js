export default function About() {
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
}
