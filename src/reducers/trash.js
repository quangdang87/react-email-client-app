import {
  READ_TRASH_MAIL,
  STORE_TRASH_MAIL,
  RESTORE_TRASH_MAIL,
} from "../actions/delete.js";

let initialState = {};
initialState.id = 3001;
initialState.data = [
  {
    id: 3000,
    from: "user@tcs.com",
    to: "ievolve@tcs.com",
    subject: "Trash mail",
    folder: "sent",
    folderId: "2",
    time: "2018-01-23T18:25",
    body: "you can restore this",
  },
];

export default (state = {}, action) => {
  switch (action.type) {
    case READ_TRASH_MAIL:
      return state;
      break;
    case STORE_TRASH_MAIL:
      if (action.payload.folder == "inbox") {
        let found = false;
        for (let i = 0; i < state.data.length; i++) {
          if (
            state.data[i].folderId == action.payload.folderId &&
            state.data[i].folder == "inbox"
          ) {
            found = true;
            // console.log(initialState.data[i].folderId);
            state.data[i] = {...action.payload};
            break;
          }
        }
        if (!found) {
          return {id: state.id + 1, data: [...state.data, action.payload]};
        }
        return state;
      } else {
        let found = false;
        for (let i = 0; i < state.data.length; i++) {
          if (state.data[i].folderId == action.payload.folderId) {
            found = true;
            // console.log(initialState.data[i].folderId);
            state.data[i] = {...action.payload};
            break;
          }
        }
        if (!found) {
          if (action.payload.id === 1) action.payload.id = 3001;
          return {id: state.id + 1, data: [...state.data, action.payload]};
        }
        return state;
        break;
      }
    case RESTORE_TRASH_MAIL:
      if (state.data)
        return {
          id: state.id + 1,
          data: state.data.filter((obj) => obj.id !== action.payload),
        };
      else return state;
      break;
    default:
      return state;
  }
};
