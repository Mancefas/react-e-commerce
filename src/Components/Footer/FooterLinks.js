import classes from "./FooterLinks.module.css";

const FooterLinks = (props) => {
  return (
    <section className={classes.links}>
      <div>
        <h3>Important</h3>
        <ul>
          <li onClick={props.onClick}>Privacy policy</li>
          <li onClick={props.onClick}>Cookie policy</li>
          <li onClick={props.onClick}>Term and Conditions</li>
          <li onClick={props.onClick}>Help section</li>
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

      <div className={classes.about}>
        <h3>About Us</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum dicta
          deserunt laudantium itaque neque voluptatem.
        </p>
      </div>

      <div>
        <h3>Contact Us</h3>
        <p>4154 Pratt Avenuo</p>
        <p>Regan</p>
        <p>North Dakota</p>
        <p>58477</p>
      </div>
    </section>
  );
};

export default FooterLinks;
