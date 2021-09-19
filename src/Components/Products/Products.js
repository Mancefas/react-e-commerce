import React from "react";
import ProductItem from "./ProductItem";

function Products(props) {
  const { products, onAdd } = props;
  return (
    <section>
      <h2>Products</h2>
      <div>
        {products.map((item) => (
          <ProductItem
            key={item.id}
            products={item}
            onAdd={onAdd}
          ></ProductItem>
        ))}
      </div>
    </section>
  );
}

export default Products;
