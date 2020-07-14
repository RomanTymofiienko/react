const ADD_POST = "ADD-POST";
const UPDETE_NEW_POST_TEXT = "UPDETE-NEW-POST-TEXT";

let initialState = {
  postData: [
    { id: 1, text: "Hi i am Roman", likeCount: "12" },
    { id: 2, text: "I am Sveta", likeCount: "26" },
  ],
  newPostText: "",
};

const profailReducer = (state = initialState, action) => {

  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: 5,
        text: state.newPostText,
        likeCount: 0,
      };
     return {
        ...state,
        newPostText: "",
        postData: [...state.postData, newPost],
      };
    case UPDETE_NEW_POST_TEXT:
     return {
        ...state,
        newPostText: action.newText
      };
    default:
      return state;
  }
};

export const addPostActionCreator = () => {
  return {
    type: ADD_POST,
  };
};

export const updeteNewPostTextActionCreator = (text) => {
  return {
    type: UPDETE_NEW_POST_TEXT,
    newText: text,
  };
};

export default profailReducer;
