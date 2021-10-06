import React, { useState } from "react";

const RegContext = React.createContext({
  regFormShown: false,
  onRegCancel: () => {},
  onRegNewAcc: () => {},
  showRegFormHandler: () => {},
  hideRegFormHandler: () => {},
});

export const RegContextProvider = (props) => {
  const [regFormShown, setRegFormShown] = useState(false);
  const showRegFormHandler = () => {
    setRegFormShown(true);
  };
  const hideRegFormHandler = () => {
    setRegFormShown(false);
  };

  return (
    <RegContext.Provider
      value={{
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
