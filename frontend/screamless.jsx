import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store";
import App from "./components/App";
import Root from "./components/root";

document.addEventListener("DOMContentLoaded", () => {
  const store = configureStore();

  // TESTING!!!!!!!!!
  window.store = store;
  // TESTING!!!!!!!!!

  const root = document.getElementById("root");
  ReactDOM.render(<Root store={store} />, root);
});
