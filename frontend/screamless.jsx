import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store";
import App from "./components/App";

document.addEventListener("DOMContentLoaded", () => {
  const store = configureStore();
  const root = document.getElementById("root");
  ReactDOM.render(<App />, root);
});
