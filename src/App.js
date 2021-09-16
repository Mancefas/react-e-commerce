import { Fragment } from "react";
import "./App.css";
import NavBar from "./Components/NavBar";
import LandingPage from "./Components/LandingPage";
import Footer from "./Components/Footer/Footer";

import Beans from "./Merch/Beans";
import Grinders from "./Merch/Grinders";
import Machines from "./Merch/Machines";

function App() {
  return (
    <Fragment>
      <NavBar />
      <LandingPage />
      <Beans />
      <Grinders />
      <Machines />
      <Footer />
    </Fragment>
  );
}

export default App;
