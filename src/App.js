import { Fragment } from "react";
import "./App.css";
import LandingPage from "./Components/LandingPage";
import NavBar from "./Components/NavBar";
import Grid from "./GridForMerch/Grid";
import Beans from "./Merch/Beans";
import Grinders from "./Merch/Grinders";

function App() {
  return (
    <Fragment>
      <NavBar />
      <LandingPage />
      <Beans />
      <Grinders />
    </Fragment>
  );
}

export default App;
