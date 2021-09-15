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
  console.log(beansList);
  return (
    <section>
      <Grid>{beansList}</Grid>;
    </section>
  );
}

// const DUMMY_BEANS = [
//   {
//     id: "m1",
//     name: "Sushi",
//     description: "Finest fish and veggies",
//     price: 22.99,
//   },
//   {
//     id: "m2",
//     name: "Schnitzel",
//     description: "A german specialty!",
//     price: 16.5,
//   },
//   {
//     id: "m3",
//     name: "Barbecue Burger",
//     description: "American, raw, meaty",
//     price: 12.99,
//   },
//   {
//     id: "m4",
//     name: "Green Bowl",
//     description: "Healthy...and green...",
//     price: 18.99,
//   },
// ];

// const Beans = () => {
//   const mealsList = DUMMY_BEANS.map((meal) => (
//     <GridItem
//       key={meal.id}
//       name={meal.name}
//       description={meal.description}
//       price={meal.price}
//     />
//   ));
//   console.log(mealsList);

//   return (
//     <section>
//       <Grid>{mealsList}</Grid>
//     </section>
//   );
// };

export default Beans;
