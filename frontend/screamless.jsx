import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store";
import App from "./components/App";
import Root from "./components/root";

document.addEventListener("DOMContentLoaded", () => {
  let store;
  if (window.currentUser) {
    const preloadedState = {
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      },
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
