import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import { mirageJsConfig } from "./services/miragejs.config";

mirageJsConfig();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
