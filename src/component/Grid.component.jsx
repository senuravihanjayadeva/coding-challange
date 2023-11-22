import React, { useState } from 'react';
import PropTypes from 'prop-types';
import FadeLoader from 'react-spinners/FadeLoader';

function Grid({ position, positionChange }) {
  const [loading, setLoading] = useState(false);

  const teleportRobot = (x, y) => {
    console.time("teleport-time")
    setLoading(true);
    const totalDistance = Math.abs(position.x - x) + Math.abs(position.y - y);
    if (x >= 1 && x <= 5 && y >= 1 && y <= 5) {
      setTimeout(() => {
        setLoading(false);
        positionChange({ x, y });
        console.timeEnd("teleport-time");
      }, 1000 * totalDistance);
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
          className={`cell ${position.x === x && position.y === y ? 'robot' : ''}`}
          onClick={() => teleportRobot(x, y)}></div>
      );
    }
    grid.push(<div key={x}>{row}</div>);
  }

  return (
    <div>
      <div className="grid">
        {grid}
        <FadeLoader
          color={'blue'}
          loading={loading}
          size={50}
          aria-label="Loading Spinner"
          data-testid="loader"
          className="loader-spinner"
        />
      </div>
    </div>
  );
}

Grid.propTypes = {
  position: PropTypes.object.isRequired,
  positionChange: PropTypes.func.isRequired
};

export default Grid;
