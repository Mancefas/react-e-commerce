import React from "react";
import "./GridItem.css";
import AddToCartBTN from "../Components/Cart/AddToCartBTN";

function GridItem(props) {
  const price = `$${props.price.toFixed(2)}`;
  const name = `${props.name.toUpperCase()}`;
  return (
    <div className="gridItem">
      <div>
        <h3>{name}</h3>
        <h4>{props.description}</h4>
        <h3>{price}</h3>
        <AddToCartBTN
          id={props.id}
          name={props.name}
          description={props.description}
          price={props.price}
        />
      </div>
    </div>
  );
}

export default GridItem;
