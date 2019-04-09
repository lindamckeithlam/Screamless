import { RECEIVE_CUISINES } from "../actions/restaurant_actions";

const initialState = {
  cuisines: []
};

const cuisineReducer = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_CUISINES:
      return { ...state, cuisines: action.cuisines };
    default:
      return state;
  }
};

export default cuisineReducer;
