import { combineReducers } from "redux";
import usersReducer from "./users_reducer";
import sessionsReducer from "./sessions_reducer";

export default combineReducers({
  users: usersReducer,
  sessions: sessionsReducer
});
