import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store";
import Root from "./components/RootComponent";
import Geocode from "react-geocode";
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

  // testing //
  window.store = store;
  window.geocode = Geocode;
  // testing //
  const root = document.getElementById("root");
  ReactDOM.render(<Root store={store} />, root);
});
