import React from "react";

function Grid({ position, positionChange }) {

  const teleportRobot = (x, y) => {
    if (x >= 1 && x <= 5 && y >= 1 && y <= 5) {
      positionChange({ x, y });
    }
  };

  // Generating the grid
  const grid = [];
  for (let y = 1; y <= 5; y++) {
    const row = [];
    for (let x = 1; x <= 5; x++) {
      row.push(
        <div
          key={`${x}-${y}`}
          className={`cell ${
            position.x === x && position.y === y ? "robot" : ""
          }`}
          onClick={() => teleportRobot(x, y)}
        >
        </div>
      );
    }
    grid.push(
      <div key={y}>
        {row}
      </div>
    );
  }

  return (
    <div>
      <div className="grid">{grid}</div>;
    </div>
  );
}

export default Grid;
