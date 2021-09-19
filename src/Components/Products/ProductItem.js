import React from "react";

function ProductItem(props) {
  const { products, onAdd } = props;

  return (
    <div>
      <h3>{products.name}</h3>
      <div>${products.price}</div>
      <div>
        <button onClick={() => onAdd(products)}>Add To Cart</button>
      </div>
    </div>
  );
}

export default ProductItem;
