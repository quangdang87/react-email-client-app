import {RECEIVE_INBOX_DATA} from "../actions/inboxMail.js";

export default (state = {}, {type, inboxData}) => {
  switch (type) {
    case RECEIVE_INBOX_DATA:
      return {...inboxData};
    default:
      return state;
  }
};
