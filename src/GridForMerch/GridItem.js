import React from "react";
import "./GridItem.css";

function GridItem(props) {
  const price = `$${props.price.toFixed(2)}`;
  const name = `${props.name.toUpperCase()}`;
  return (
    <div className="gridItem">
      <div>
        <h3>{name}</h3>
        <h4>{props.description}</h4>
        <h3>{price}</h3>
      </div>
    </div>
  );
}

export default GridItem;
