const ADD_MESSAGE = "ADD-MESSAGE";
const UPDETE_NEW_MESSAGE_TEXT = "UPDETE-NEW-MESSAGE-TEXT";

let initialState = {
  userData: [
    { id: 1, name: "Dimych" },
    { id: 2, name: "Roman" },
    { id: 3, name: "Sveta" },
    { id: 4, name: "Victor" },
  ],
  messagesData: [
    { id: 1, message: "Hi" },
    { id: 2, message: "bye" },
    { id: 3, message: "Yes" },
    { id: 4, message: "Yo" },
  ],
  newMessageText: ""
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE: {
      let newMessage = {
        id: 5,
        message: state.newMessageText,
      };

      return {
        ...state,
        messagesData: [...state.messagesData, newMessage],
        newMessageText:  "",
      }
    }
    case UPDETE_NEW_MESSAGE_TEXT: {
      return {
        ...state,
        newMessageText: action.newText,
      }
    }
    default:
      return state;
  }
};

export const addMessageActionCreator = () => {
  return {
    type: ADD_MESSAGE,
  };
};

export const updeteNewMessageTextActionCreator = (text) => {
  return {
    type: UPDETE_NEW_MESSAGE_TEXT,
    newText: text,
  };
};

export default dialogsReducer;
