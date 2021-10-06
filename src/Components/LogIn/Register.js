import React from "react";
import Section from "../Helpers/Section";
import classes from "./Register.module.css";

const Register = () => {
  return (
    <Section>
      <div className={classes.register}>
        <div>
          {" "}
          <h2>Enter your information</h2>{" "}
        </div>
        <form>
          <div>
            <label for="registerFirstName">First Name*</label>
            <input
              type="text"
              id="registerFirstName"
              placeholder="Your First Name"
            ></input>
          </div>

          <div>
            <label for="registerLastName">Last Name*</label>
            <input
              type="text"
              id="registerLastName"
              placeholder="Your Last Name"
            ></input>
          </div>

          <div>
            <label for="e-mail">E-mail*</label>
            <input
              type="text"
              id="e-mail"
              placeholder="Enter Your Email"
            ></input>
          </div>

          <div>
            <label for="pass">Password*</label>
            <input
              type="text"
              id="pass"
              placeholder="Enter Your password"
            ></input>
          </div>

          <div className={classes.btns}>
            <button type="submit" className={classes.btn}>
              Create new account
            </button>

            <button type="button" className={classes.btn2}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </Section>
  );
};

export default Register;
