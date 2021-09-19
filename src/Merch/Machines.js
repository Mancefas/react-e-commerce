import React from "react";
import GridItem from "../GridForMerch/GridItem";
import Grid from "../GridForMerch/Grid";

const DUMMY_MACHINES = [
  {
    id: 111,
    name: "Breville the Barista Express Espresso ",
    description:
      "Breville will have you expertly extracting rich black espresso with the perfect crema in no time.",
    price: 349.99,
  },
  {
    id: 222,
    name: "De’Longhi Dedica Style ",
    description:
      "If you like to be more involved with your coffee making, you can be your own favourite barista with the numerous features.",
    price: 200,
  },
  {
    id: 333,
    name: "EspressoWorks 7 ",
    description:
      "Is there anything more pleasing than the aroma of freshly ground coffee beans? ",
    price: 125,
  },
  {
    id: 444,
    name: "Nespresso Essenza",
    description:
      "In spite of its somewhat homunculus stature, the Nespresso Essenza nonetheless offers sizable features.",
    price: 75.55,
  },
  {
    id: 555,
    name: "Nescafé Dolce Gusto ",
    description:
      "While appearances can be deceptive, the Nescafé coffee maker has style and substance in equal parts.",
    price: 70.99,
  },
];

const Machines = () => {
  const machinesList = DUMMY_MACHINES.map((machine) => (
    <GridItem
      key={machine.id}
      id={machine.id}
      name={machine.name}
      description={machine.description}
      price={machine.price}
    />
  ));

  return (
    <section>
      <Grid>{machinesList}</Grid>
    </section>
  );
};

export default Machines;
