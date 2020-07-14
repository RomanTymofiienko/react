import profailReducer from "./profail-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
  _state: {
    profailPage: {
      postData: [
        { id: 1, text: "Hi i am Roman", likeCount: "12" },
        { id: 2, text: "I am Sveta", likeCount: "26" },
      ],
      newPostText: "",
    },
    dialogsPage: {
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
      newMessageText: "",
    },
    sidebar: {},
  },
  getState() {
    return this._state;
  },
  _callSubscriber() {
  },
  dispatch(action) {

    this._state.profailPage = profailReducer(this._state.profailPage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);

    this._callSubscriber(this._state);
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

};

export default store;
window.store = store;
 