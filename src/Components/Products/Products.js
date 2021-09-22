import React from "react";
import ProductItem from "./ProductItem";
import classes from "./Products.module.css";
import FreeShipping from "./FreeShipping";

function Products(props) {
  const { products, onAdd } = props;
  return (
    <section className={classes.section}>
      <h2>Products</h2>
      <div className={classes.center_section}>
        <div className={classes.itemsGrid}>
          {products.map((item) => (
            <ProductItem
              key={item.id}
              products={item}
              onAdd={onAdd}
            ></ProductItem>
          ))}
        </div>
      </div>
      <FreeShipping />
    </section>
  );
}

export default Products;
