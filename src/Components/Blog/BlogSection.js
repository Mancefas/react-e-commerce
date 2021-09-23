import React from "react";
import BlogItem from "./BlogItem";
import classes from "./BlogSection.module.css";

const BlogSection = () => {
  return (
    <section className={classes.blog}>
      <h2>Latest news </h2>
      <BlogItem />
    </section>
  );
};

export default BlogSection;
