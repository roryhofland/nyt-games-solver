const jumpCell = (e) => {
  const current = parseInt(e.target.id.slice(-1));
  const next = document.getElementById(`hive-cell-${(current + 1) % 7}`);
  setTimeout(() => {
    next.focus();
  }, 25);
};

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
              onChange={jumpCell}
              onFocus={(e) => e.target.select()}
            />
          </div>
        </foreignObject>
      </svg>
    </>
  );
}

export default function Hive({
  letters,
  handleLetterUpdate,
  handleSolve,
  handleClear,
}) {
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
