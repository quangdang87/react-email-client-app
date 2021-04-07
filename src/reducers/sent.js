import {READ_SENT_MAIL} from "../actions/sentMail.js";
import {STORE_SENT_MAIL, DELETE_SENT_MAIL} from "../actions/sentMail.js";

let initialState = {};
initialState.id = 1001;
initialState.data = [
  {
    id: 1000,
    from: "user@tcs.com",
    to: "ievolve@tcs.com",
    subject: "This is a sent mail",
    time: "2018-01-23T18:25",
    body: "All your mails that are successfullly sent will be listed here",
  },
];

export default (state = {}, action) => {
  switch (action.type) {
    case READ_SENT_MAIL:
      return state;
      break;
    case STORE_SENT_MAIL:
      // let data = action.payload;
      action.payload.time = new Date().toUTCString();
      if (action.payload.id === 1) action.payload.id = 1001;
      if (state.id) {
        return {id: state.id + 1, data: [...state.data, action.payload]};
      } else {
        let data = [];
        if (state.data) data = [...state.data];
        data.push(action.payload);
        return {id: 1001, data};
      }
      break;
    case DELETE_SENT_MAIL:
      if (state.data) {
        return {
          id: state.id + 1,
          data: state.data.filter((obj) => obj.id !== action.payload),
        };
      } else return state;
      break;
    default:
      return state;
  }
};
