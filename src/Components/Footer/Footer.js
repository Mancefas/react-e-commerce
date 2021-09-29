import FooterLinks from "./FooterLinks";
import classes from "./Footer.module.css";
import Copyright from "./Copyright";

const Footer = (props) => {
  return (
    <div className={classes.ftr}>
      <FooterLinks onClick={props.onClick} />
      <Copyright />
    </div>
  );
};

export default Footer;
