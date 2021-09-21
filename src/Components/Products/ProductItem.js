import React from "react";
import classes from "./productItem.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";

function ProductItem(props) {
  const { products, onAdd } = props;

  return (
    <div className={classes.item}>
      <h3>{products.name.toUpperCase()}</h3>
      <div>${products.price}</div>
      <div>
        {/* <AddToCartBTN onClick={() => onAdd(products)} /> */}
        <button onClick={() => onAdd(products)}>
          <FontAwesomeIcon className={classes.icon} icon={faCartPlus} />
          Add To Cart
        </button>
      </div>
    </div>
  );
}

export default ProductItem;
