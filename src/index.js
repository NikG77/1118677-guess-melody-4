import React from "react";
import ReactDom from "react-dom";
import App from "./components/app/app.jsx";
import questions from "./mocks/questions/js";

const Settings = {
  ERROR_COUNT: 3,
};


ReactDom.render(
    <App
      errorsCount={Settings.ERROR_COUNT}
      questions={questions}
    />,
    document.querySelector(`#root`)
);


