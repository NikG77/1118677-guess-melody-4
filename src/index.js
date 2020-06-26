import React from "react";
import ReactDom from "react-dom";
import App from "./components/app/app.jsx";
import questions from "./mocks/questions.js";
import {createStore} from "redux";
import {Provider} from "react-redux";
import {reducer} from "./reducer.js";

const Settings = {
  ERROR_COUNT: 3,
};

const store = createStore(reducer);


ReactDom.render(
    <Provider store={store}>
      <App
        errorsCount={Settings.ERROR_COUNT}
        questions={questions}
      />
    </Provider>,
    document.querySelector(`#root`)
);


