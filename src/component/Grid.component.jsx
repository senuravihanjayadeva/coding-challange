import React from "react";
import PropTypes from 'prop-types';

function Grid({ position, positionChange }) {

  const teleportRobot = (x, y) => {
    let xDistance = position.x - x;
    let yDistance = position.y - y;
    console.log(xDistance,yDistance)
    if (x >= 1 && x <= 5 && y >= 1 && y <= 5) {
      setTimeout(()=>{
        positionChange({ x, y });
      },2000)
    }
  };

  // Generating the grid
  const grid = [];
  for (let x = 1; x <= 5; x++) {
    const row = [];
    for (let y = 1; y <= 5; y++) {
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
      <div key={x}>
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

Grid.propTypes = {
  position: PropTypes.object.isRequired,
  positionChange: PropTypes.func.isRequired
};

export default Grid;
