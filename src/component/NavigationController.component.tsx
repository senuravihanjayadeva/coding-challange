import React from 'react';
import { DOWN_DIRECTION, LEFT_DIRECTION, RIGHT_DIRECTION, UP_DIRECTION } from '../const';
import { GridNavigationProp } from '../types';

function NavigationController({ position, positionChange } : Readonly<GridNavigationProp>) {
  const moveRobot = (direction : string) => {
    const newPosition = { ...position };

    switch (direction) {
      case UP_DIRECTION:
        if (newPosition.y > 1) newPosition.y--;
        break;
      case RIGHT_DIRECTION:
        if (newPosition.x < 5) newPosition.x++;
        break;
      case DOWN_DIRECTION:
        if (newPosition.y < 5) newPosition.y++;
        break;
      case LEFT_DIRECTION:
        if (newPosition.x > 1) newPosition.x--;
        break;
      default:
        break;
    }

    positionChange(newPosition);
  };

  return (
    <React.Fragment>
      <h1 className="text-center">Control Panel</h1>
      <div className="row control-panel">
        <div className="col-12 text-center p-3">
          <button aria-label="up-button" onClick={() => moveRobot(UP_DIRECTION)}>
            <i className="bi bi-arrow-up-square-fill navigation-icon"></i>
          </button>
        </div>
        <div className="col-6 text-start p-3">
          <button
            data-testid={`left-btn`}
            aria-label="left-button"
            onClick={() => moveRobot(LEFT_DIRECTION)}
          >
            <i className="bi bi-arrow-left-square-fill navigation-icon"></i>
          </button>
        </div>
        <div aria-label="right-button" className="col-6 text-end p-3">
          <button data-testid={`right-btn`} onClick={() => moveRobot(RIGHT_DIRECTION)}>
            <i className="bi bi-arrow-right-square-fill navigation-icon"></i>
          </button>
        </div>
        <div aria-label="down-button" className="col-12 text-center p-3">
          <button onClick={() => moveRobot(DOWN_DIRECTION)}>
            <i className="bi bi-arrow-down-square-fill navigation-icon"></i>
          </button>
        </div>
      </div>
    </React.Fragment>
  );
}

export default NavigationController;
