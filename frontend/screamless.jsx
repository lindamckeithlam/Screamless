import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store";
import Root from "./components/RootComponent";
import Geocode from "react-geocode";
import { initialState } from "./reducers/current_user_reducer.js";
import serviceWorker from "../app/serviceWorker";
import { initializeFirebase } from "./components/Firebase";

document.addEventListener("DOMContentLoaded", () => {
  let store;
  if (window.currentUser) {
    const preloadedState = {
      currentUser: {
        ...initialState,
        ...window.currentUser,
        orders: [],
        orderId: null
      },
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
  serviceWorker();
  initializeFirebase();
});
