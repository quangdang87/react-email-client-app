import {STORE_COMPOSE_MAIL} from "../actions/compose.js";

let initialState = {};
initialState.data = {
  id: "",
  from: "user@tcs.com",
  to: "",
  subject: "",
  time: "",
  body: "",
};

export default (state = initialState, action) => {
  switch (action.type) {
    case STORE_COMPOSE_MAIL:
      if (action.payload) {
        if (Array.isArray(action.payload))
          return {...state, data: [...action.payload]};
        else return {...state, data: {...action.payload}};
      } else {
        return initialState;
      }
    default:
      return state;
  }
};
