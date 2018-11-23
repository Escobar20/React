import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { IntlProvider } from "react-intl";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <IntlProvider locale="en">
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </IntlProvider>,
  document.getElementById("app")
);
