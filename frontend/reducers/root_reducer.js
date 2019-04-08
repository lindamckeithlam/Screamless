import { combineReducers } from "redux";
// import errorsReducer from "./errors_reducer.js";
import cuisineReducer from "./cuisines_reducer";
import currentUserReducer from "./current_user_reducer";
import sessionsReducer from "./sessions_reducer";
import restaurantReducer from "./restaurant_reducer";
import currentOrderReducer from "./current_order_reducer";
import sessionErrorsReducer from "./session_error_reducer";
import uiReducer from "./ui_reducer";

export default combineReducers({
  // entities: entitiesReducer,
  sessions: sessionsReducer,
  errors: sessionErrorsReducer,
  ui: uiReducer,
  currentUser: currentUserReducer,
  restaurants: restaurantReducer,
  currentOrder: currentOrderReducer,
  cuisines: cuisineReducer
});
