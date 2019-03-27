import { combineReducers } from "redux";
// import entitiesReducer from "./entities_reducer.js";
// import errorsReducer from "./errors_reducer.js";
import usersReducer from "./users_reducer.js";
import sessionsReducer from "./sessions_reducer.js";

export default combineReducers({
  //   entities: entitiesReducer,
  users: usersReducer,
  sessions: sessionsReducer
});
