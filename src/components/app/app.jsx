import React from "react";
import WelcomScreen from "../welcome-screen/welcome-screen.jsx";
import PropTypes from "prop-types";

const App = (props) => {

  const {errorsCount} = props;
  return (
    <WelcomScreen errorsCount={errorsCount}/>
  );
};

App.propTypes = {
  errorsCount: PropTypes.number.isRequired,
};

export default App;

