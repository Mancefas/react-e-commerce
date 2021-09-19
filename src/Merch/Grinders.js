import React from "react";
import GridItem from "../GridForMerch/GridItem";
import Grid from "../GridForMerch/Grid";

const DUMMY_GRINDERS = [
  {
    id: 11,
    name: "Conical Burr Coffee Grinder",
    description:
      " It produced very even coffee grounds that could be used for espresso, cold brew, and everything in between.",
    price: 150,
  },
  {
    id: 22,
    name: "DBM-8 Supreme Grind Automatic",
    description:
      "The finest grinds well for espresso, the medium for drip and pour over, while the coarsest is perfect for cold brew and French press.",
    price: 180,
  },
  {
    id: 33,
    name: "Silent Vortex Electric Grinder",
    description:
      "KRUPS Silent Vortex Electric Grinder was the quietest grinder",
    price: 245,
  },
  {
    id: 44,
    name: "Infinity Plus Burr Grinder",
    description:
      "It features 16 grind settings, each of which is easy to select with clearly labeled markings.",
    price: 2020,
  },
  {
    id: 55,
    name: "Manual Coffee Grinder",
    description:
      "for those looking for the absolute quietest way to grind coffee, a manual coffee grinder is your best bet.",
    price: 29.99,
  },
];

const Grinders = () => {
  const grindersList = DUMMY_GRINDERS.map((grinder) => (
    <GridItem
      key={grinder.id}
      id={grinder.id}
      name={grinder.name}
      description={grinder.description}
      price={grinder.price}
    />
  ));

  return (
    <section>
      <Grid>{grindersList}</Grid>
    </section>
  );
};

export default Grinders;
