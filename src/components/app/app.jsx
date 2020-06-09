import React from "react";
import WelcomScreen from "../welcome-screen/welcome-screen.jsx";

const App = (props) => {
  // eslint-disable-next-line react/prop-types
  const {errorsCount} = props;
  return (
    <WelcomScreen errorsCount={errorsCount}/>
  );
};

export default App;

