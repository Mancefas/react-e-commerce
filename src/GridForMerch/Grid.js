import React from "react";
import "./Grid.css";

function Grid(props) {
  return (
    <div className="d-flex">
      <div className="grid">{props.children}</div>
    </div>
  );
}

export default Grid;
