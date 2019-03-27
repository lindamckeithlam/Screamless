// export default errorsReducer = (state = [], action) => {
//     switch (action.type) {
//         case ERROR:

//     }
//     return state;
// };

// import { ERROR, RECEIVE_CURRENT_USER } from "../actions/session_actions";

export const errorsReducer = (state = [], action) => {
  switch (action.type) {
    // case RECEIVE_CURRENT_USER:
    //   return [];
    // case ERROR:
    //   return action.errors;
    default:
      return state;
  }
};
