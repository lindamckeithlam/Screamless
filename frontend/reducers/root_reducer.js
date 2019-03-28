import { combineReducers } from "redux";
// import entitiesReducer from "./entities_reducer.js";
// import errorsReducer from "./errors_reducer.js";
import entitiesReducer from "./entities_reducer";
import sessionsReducer from "./sessions_reducer";
import sessionErrorsReducer from "./session_error_reducer";
import uiReducer from "./ui_reducer";

export default combineReducers({
  entities: entitiesReducer,
  sessions: sessionsReducer,
  errors: sessionErrorsReducer,
  ui: uiReducer
});
