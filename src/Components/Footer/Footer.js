import FooterLinks from "./FooterLinks";
import classes from "./Footer.module.css";
import Copyright from "./Copyright";

const Footer = () => {
  return (
    <div className={classes.ftr}>
      <FooterLinks />
      <Copyright />
    </div>
  );
};

export default Footer;
