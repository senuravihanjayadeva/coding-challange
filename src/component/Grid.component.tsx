import React, { useState } from 'react';
import FadeLoader from 'react-spinners/FadeLoader';
import { GridNavigationProp } from '../types';

function Grid({ position, positionChange }: Readonly<GridNavigationProp>) {
  const [loading, setLoading] = useState(false);

  const teleportRobot = (x: number, y: number) => {
    console.time('teleport-time');
    setLoading(true);
    const totalDistance = Math.abs(position.x - x) + Math.abs(position.y - y);
    if (x >= 1 && x <= 5 && y >= 1 && y <= 5) {
      setTimeout(() => {
        setLoading(false);
        positionChange({ x, y });
        console.timeEnd('teleport-time');
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
          data-testid={`cell-${x}-${y}`}
          aria-label={`cell-${x}-${y}`}
          className={`cell ${position.x === x && position.y === y ? 'robot' : ''}`}
          onClick={() => teleportRobot(x, y)}
          onKeyDown={() => teleportRobot(x, y)}>
          {position.x === x && position.y === y && (
            <FadeLoader
              color={'black'}
              loading={loading}
              aria-label="Loading Spinner"
              data-testid="loader"
              className="loader-spinner"
            />
          )}
        </div>
      );
    }
    grid.push(<div key={x}>{row}</div>);
  }

  return (
    <div>
      <div className="grid">{grid}</div>
    </div>
  );
}

export default Grid;
