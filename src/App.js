import { Fragment } from "react";
import "./App.css";
import LandingPage from "./Components/LandingPage";
import NavBar from "./Components/NavBar";

function App() {
  return (
    <Fragment>
      <NavBar />
      <LandingPage />
    </Fragment>
  );
}

export default App;
