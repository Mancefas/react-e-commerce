import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";
import classes from "./Copyright.module.css";

const Copyright = () => {
  return (
    <div className={classes.copyright}>
      <FontAwesomeIcon icon={faCopyright} size="1x"></FontAwesomeIcon>
      <p>All rights reserved</p>
      <a href="https://devportfolio.eu/">Made by Mantvydas</a>
    </div>
  );
};

export default Copyright;
