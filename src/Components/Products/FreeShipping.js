import classes from "./FreeShipping.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShippingFast } from "@fortawesome/free-solid-svg-icons";
import { faWallet } from "@fortawesome/free-solid-svg-icons";

const FreeShipping = () => {
  return (
    <div className={classes.section}>
      <div className={classes.item}>
        <FontAwesomeIcon icon={faShippingFast} size="2x" />
        <h4>Free shipping on all orders over $30</h4>
      </div>
      <div className={classes.item}>
        <FontAwesomeIcon icon={faWallet} size="2x" />
        <h4>We accept - Paypal, Stripe, Visa, Mastercard</h4>
      </div>
    </div>
  );
};

export default FreeShipping;
