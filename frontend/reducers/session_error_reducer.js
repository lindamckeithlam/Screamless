import { ERROR, RECEIVE_CURRENT_USER } from "../actions/session_actions";

export default function sessionErrorsReducer(state = [], action) {
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return [];
    case ERROR:
      return action.errors;
    default:
      return state;
  }
}
