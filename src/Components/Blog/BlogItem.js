import classes from "./BlogItem.module.css";
import blog1 from "./Img/blog1.jpg";
import blog2 from "./Img/blog2.jpg";

const BlogItem = () => {
  return (
    <div class={classes.section}>
      <div>
        <h3>First Blog Post </h3>
        <div className={classes.post}>
          <img src={blog1} alt="" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
            quis corrupti tenetur illum eligendi cumque optio possimus
            blanditiis pariatur, eos perspiciatis consequatur quasi maiores
            consectetur temporibus cupiditate ratione nesciunt nobis cum fuga
            rerum quas beatae? Quod culpa necessitatibus dolores facere.
          </p>
        </div>
      </div>

      <div>
        <h3>Second Blog Post </h3>
        <div className={classes.post}>
          <img src={blog2} alt="" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
            quis corrupti tenetur illum eligendi cumque optio possimus
            blanditiis pariatur, eos perspiciatis consequatur quasi maiores
            consectetur temporibus cupiditate ratione nesciunt nobis cum fuga
            rerum quas beatae? Quod culpa necessitatibus dolores facere.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogItem;
