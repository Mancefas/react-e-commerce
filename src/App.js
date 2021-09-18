import { Fragment, useState } from "react";
import "./App.css";
import NavBar from "./Components/NavBar";
import LandingPage from "./Components/LandingPage";
import Footer from "./Components/Footer/Footer";
import Cart from "./Components/Cart/Cart";

import Beans from "./Merch/Beans";
import Grinders from "./Merch/Grinders";
import Machines from "./Merch/Machines";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCarthandler = () => {
    setCartIsShown(false);
  };

  return (
    <Fragment>
      {cartIsShown && <Cart onClose={hideCarthandler} />}
      <NavBar onClicked={showCartHandler} />
      <LandingPage />
      <Beans />
      <Grinders />
      <Machines />
      <Footer />
    </Fragment>
  );
}

export default App;
