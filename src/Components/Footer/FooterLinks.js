import { useState } from "react";
import classes from "./FooterLinks.module.css";
import PolicySample from "./Policy/PolicySample";

const FooterLinks = () => {
  const [policyShown, setPolicyShown] = useState("");
  const showPolicyHandler = (event) => {
    setPolicyShown(event);
  };
  const closePolicyhandler = () => {
    setPolicyShown("");
  };

  console.log(policyShown.length);

  return (
    <div>
      {policyShown.length > 0 && (
        <PolicySample onClose={closePolicyhandler} policy={policyShown} />
      )}
      <section className={classes.links}>
        <div>
          <h3>Important</h3>
          <ul>
            <li onClick={() => showPolicyHandler("Privacy policy")}>
              Privacy policy
            </li>
            <li onClick={() => showPolicyHandler("Cookie policy")}>
              Cookie policy
            </li>
            <li onClick={() => showPolicyHandler("Term and Conditions")}>
              Term and Conditions
            </li>
            <li onClick={() => showPolicyHandler("Help section")}>
              Help section
            </li>
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
            dicta deserunt laudantium itaque neque voluptatem.
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
    </div>
  );
};

export default FooterLinks;
