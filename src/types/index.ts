export interface Position {
  x: number;
  y: number;
}

type positionChange = (position: Position) => void;

export interface GridNavigationProp {
  position: Position;
  positionChange: positionChange;
}
