import thunk from "redux-thunk";
import logger from "redux-logger";
import { applyMiddleware, createStore, compose } from "redux";
import RootReducer from "./reducers/root_reducer.js";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const configureStore = (preloadedState = {}) =>
  createStore(
    RootReducer,
    preloadedState,
    compose(applyMiddleware(thunk, logger))
  );

export default configureStore;
