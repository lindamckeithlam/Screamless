import thunk from "redux-thunk";
// import logger from "redux-logger";
import { applyMiddleware, createStore } from "redux";
import RootReducer from "./reducers/root_reducer.js";
import { composeWithDevTools } from "redux-devtools-extension";

const configureStore = (preloadedState = {}) =>
  createStore(
    RootReducer,
    preloadedState,
    composeWithDevTools(applyMiddleware(thunk))
  );

export default configureStore;
