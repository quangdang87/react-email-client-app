import {RECEIVE_API_DATA, DELETE_INBOX_MAIL} from "../actions/inbox.js";

let initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_API_DATA:
      let data = action.payload;
      return {...state, data};
      break;

    case DELETE_INBOX_MAIL:
      if (state.data) {
        return {
          ...state,
          data: state.data.filter((obj) => obj.id !== action.payload),
        };
      } else {
        let newState = {data: [{id: 2}]};
        return newState;
      }
      break;

    default:
      return state;
  }
};
