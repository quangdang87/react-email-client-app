import {
  READ_DRAFT_MAIL,
  STORE_DRAFT_MAIL,
  DELETE_DRAFT_MAIL,
  RESTORE_DRAFT_MAIL,
} from "../actions/draft.js";

let initialState = {};
initialState.id = 2001;
initialState.data = [
  {
    id: 2000,
    from: "user@tcs.com",
    to: "ievolve@tcs.com",
    subject: "Draft mail",
    time: "2018-01-23T18:25",
    body: "you can edit this",
  },
];

export default (state = {}, action) => {
  switch (action.type) {
    case READ_DRAFT_MAIL:
      return {...state};

    case STORE_DRAFT_MAIL:
      var found = false;

      for (var i = 0; i < state.data.length; i++) {
        if (state.data[i].id === action.payload.id) {
          state.data[i] = action.payload;
          found = true;
          break;
        }
      }
      if (!found) {
        let id = state.id + 1;
        action.payload.time = new Date().toUTCString();
        return {id, data: [...state.data, action.payload]};
      }
      return state;

    case DELETE_DRAFT_MAIL:
      return {
        id: state.id + 1,
        data: state.data.filter((id) => id !== action.payload),
      };
      break;
    case RESTORE_DRAFT_MAIL:
      action.payload.id = state.id + 1;
      action.payload.time = new Date().toUTCString();
      return {id: action.payload.id + 1, data: [...state.data, action.payload]};
      break;
    default:
      return initialState;
  }
};
