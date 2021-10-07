import React, { useState } from "react";

const RegContext = React.createContext({
  regFormShown: false,
  landingPageShown: true,
  onRegCancel: () => {},
  onRegNewAcc: () => {},
  showRegFormHandler: () => {},
  hideRegFormHandler: () => {},
});

export const RegContextProvider = (props) => {
  const [regFormShown, setRegFormShown] = useState(false);
  const showRegFormHandler = () => {
    setRegFormShown(true);
    setLandingPageShown(false);
  };
  const hideRegFormHandler = () => {
    setRegFormShown(false);
    setLandingPageShown(true);
  };

  const [landingPageShown, setLandingPageShown] = useState(true);
  const landPageHandler = () => {
    setLandingPageShown(true);
  };
  const landingPageHideHander = () => {
    setLandingPageShown(false);
  };

  return (
    <RegContext.Provider
      value={{
        landingPageShown: landingPageShown,
        landPageHandler: landPageHandler,
        landingPageHideHander: landingPageHideHander,
        regFormShown: regFormShown,
        showRegFormHandler: showRegFormHandler,
        hideRegFormHandler: hideRegFormHandler,
      }}
    >
      {props.children}
    </RegContext.Provider>
  );
};

export default RegContext;
