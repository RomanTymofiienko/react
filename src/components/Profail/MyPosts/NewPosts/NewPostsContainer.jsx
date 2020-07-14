import React from 'react';
import { updeteNewPostTextActionCreator, addPostActionCreator } from "../../../redux/profail-reducer";
import NewPosts from "./NewPosts";
import { connect } from 'react-redux';

// const NewPostsContainer = (props) => {
//   let addPost = () => {
//     props.dispatch(addPostActionCreator());
//   };

//   let onPostChange = (text) => {
//     let action =updeteNewPostTextActionCreator(text);
//     props.dispatch(action);
//   }

//   return (
//     <NewPosts updeteNewPostText={onPostChange} addPost={addPost} newPostText={props.newPostText}/>
//   );
// };

let mapStateToProps = (state) => {
  return {
    postData: state.profailPage.postData,
    newPostText: state.profailPage.newPostText
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    updeteNewPostText: (text) => {dispatch(updeteNewPostTextActionCreator(text))},
    addPost: () => {dispatch(addPostActionCreator())}
  }
}

const NewPostsContainer = connect(mapStateToProps, mapDispatchToProps)(NewPosts);

// export default NewPostsContainer;
export default NewPostsContainer;
