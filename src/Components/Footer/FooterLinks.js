import { useState, useContext } from "react";
import classes from "./FooterLinks.module.css";
import PolicySample from "./Policy/PolicySample";
import RegContext from "../../store/reg-context";
import LogIn from "../LogIn/LogIn";

const FooterLinks = (props) => {
  const [policyShown, setPolicyShown] = useState("");
  const showPolicyHandler = (event) => {
    setPolicyShown(event);
  };
  const closePolicyhandler = () => {
    setPolicyShown("");
  };

  const [loginShown, setLoginShown] = useState(false);
  const showLoginHandler = () => {
    setLoginShown(true);
  };
  const hideLoginHanlder = () => {
    setLoginShown(false);
  };

  const cntx = useContext(RegContext);

  return (
    <div>
      {policyShown.length > 0 && (
        <PolicySample onClose={closePolicyhandler} policy={policyShown} />
      )}
      {loginShown && <LogIn onClose={hideLoginHanlder} />}
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
            <li onClick={cntx.showRegFormHandler}>Register</li>
            <li onClick={showLoginHandler}>Log in</li>
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
