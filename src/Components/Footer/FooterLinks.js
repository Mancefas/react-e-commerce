import classes from "./FooterLinks.module.css";

const FooterLinks = () => {
  return (
    <section className={classes.links}>
      <div>
        <h3>Categories</h3>
        <ul>
          <li>Coffee Beans</li>
          <li>Coffee grinders</li>
          <li>Coffee Machines</li>
          <li>Accessories</li>
        </ul>
      </div>

      <div>
        <h3>MY Account</h3>
        <ul>
          <li>Register</li>
          <li>Log in</li>
          <li>Cart</li>
        </ul>
      </div>

      <div>
        <h3>About Us</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum dicta
          deserunt laudantium itaque neque voluptatem.
        </p>
      </div>

      <div>
        <h3>Conatct Us</h3>
        <p>4154 Pratt Avenuo</p>
        <p>Regan</p>
        <p>North Dakota</p>
        <p>58477</p>
      </div>
    </section>
  );
};

export default FooterLinks;
