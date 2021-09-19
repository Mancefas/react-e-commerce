import React from "react";
import GridItem from "../GridForMerch/GridItem";
import Grid from "../GridForMerch/Grid";

const DUMMY_BEANS = [
  {
    id: 1,
    name: "Espresso",
    description: "Strongest espresso coffe beans that you ever tried",
    price: 22,
  },
  {
    id: 2,
    name: "Lungo",
    description: "Longest lungo coffe beans that you ever tried",
    price: 10,
  },
  {
    id: 3,
    name: "Latte",
    description: "Milkiest latte coffe beans that you ever tried",
    price: 45,
  },
  {
    id: 4,
    name: "MOCHA",
    description: "Most cholocate coffe beans that you ever tried",
    price: 20,
  },
  {
    id: 5,
    name: "CAPPUCCINO",
    description: "Tasties cappuccino coffe beans that you ever tried",
    price: 16,
  },
  {
    id: 6,
    name: "Cold brew",
    description: "Coffee beans specialy made for cold brew coffee",
    price: 12,
  },
];

function Beans() {
  const beansList = DUMMY_BEANS.map((bean) => (
    <GridItem
      key={bean.id}
      name={bean.name}
      description={bean.description}
      price={bean.price}
    />
  ));

  return (
    <section>
      <Grid>{beansList}</Grid>;
    </section>
  );
}

export default Beans;
