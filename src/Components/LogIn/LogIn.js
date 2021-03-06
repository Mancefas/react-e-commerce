import React from "react";

import Modal from "../../UI/Modal";
import classes from "./LogIn.module.css";

const LogIn = (props) => {
  return (
    <Modal onClick={props.onClose} onClose={props.onClose}>
      <form className={classes.login}>
        <div>
          <label for="username">Username</label>
          <input
            type="text"
            id="username"
            placeholder="Username or email"
          ></input>
        </div>

        <div>
          <label for="password">Password </label>
          <input type="text" id="password" placeholder="Enter password"></input>
          <p>*doesn't work, because it is just for showing purpose...</p>
        </div>

        <div className={classes.btns}>
          <button type="submit">Log in</button>

          <button>Lost your password?</button>
        </div>
      </form>
    </Modal>
  );
};

export default LogIn;
