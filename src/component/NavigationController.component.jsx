import React from "react";

function NavigationController({ position, positionChange }) {
  const moveRobot = (direction) => {
    const newPosition = { ...position };

    switch (direction) {
      case "left":
        if (newPosition.y > 1) newPosition.y--;
        break;
      case "down":
        if (newPosition.x < 5) newPosition.x++;
        break;
      case "right":
        if (newPosition.y < 5) newPosition.y++;
        break;
      case "up":
        if (newPosition.x > 1) newPosition.x--;
        break;
      default:
        break;
    }

    positionChange(newPosition);
  };

  return (
    <div className="row">
        <div className="col-12 text-center p-3">
          <button onClick={() => moveRobot("up")}>
            <i className="bi bi-arrow-up-square-fill navigation-icon"></i>
          </button>
        </div>
        <div className="col-6 text-start p-3">
          <button onClick={() => moveRobot("left")}>
            <i className="bi bi-arrow-left-square-fill navigation-icon"></i>
          </button>
        </div>
        <div className="col-6 text-end p-3">
          <button onClick={() => moveRobot("right")}>
            <i className="bi bi-arrow-right-square-fill navigation-icon"></i>
          </button>
        </div>
        <div className="col-12 text-center p-3">
          <button onClick={() => moveRobot("down")}>
            <i className="bi bi-arrow-down-square-fill navigation-icon"></i>
          </button>
      </div>
    </div>
  );
}

export default NavigationController;
