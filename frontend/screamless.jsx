import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store";
import Root from "./components/RootComponent";

document.addEventListener("DOMContentLoaded", () => {
  let store;
  if (window.currentUser) {
    const preloadedState = {
      currentUser: { ...window.currentUser },
      sessions: { id: window.currentUser.id }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }
  window.store = store;

  const root = document.getElementById("root");
  ReactDOM.render(<Root store={store} />, root);
});
