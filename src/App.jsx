import React, { useState } from 'react';
import Grid from './component/Grid.component';
import NavigationController from './component/NavigationController.component';

const App = () => {
  const [position, setPosition] = useState({ x: 1, y: 1 });

  const positionChange = (position) => {
    setPosition(position);
  };

  return (
    <div className="container p-5">
      <h1 className="text-center">Pronto Coding Challenge</h1>
      <div className="row p-5">
        <div className="col-lg-6 col-md-12 col-sm-12">
          <Grid positionChange={positionChange} position={position} />
        </div>
        <div className="col-lg-6 col-md-12 col-sm-12">
          <NavigationController position={position} positionChange={positionChange} />
        </div>
      </div>
    </div>
  );
};

export default App;
