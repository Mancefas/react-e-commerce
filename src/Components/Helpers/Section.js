import React from "react";
import classes from "./Section.module.css";

const Section = (props) => {
  return (
    <section className={classes.section}>
      <div className={classes.inner}>{props.children}</div>
    </section>
  );
};

export default Section;
