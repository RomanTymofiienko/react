import React from "react";
import s from "./NewPosts.module.css";
import Posts from "../Posts/Posts";

const NewPosts = (props) => {

  let postsElement = props.postData.map((post) => (
    <Posts text={post.text} like={post.likeCount} />
  ));

  let newPostElement = React.createRef();

  let addPost = () => {
    props.addPost();
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updeteNewPostText(text);
  }

  return (
    <div className={s.newPosts}>
      <h3>New post</h3>
      <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
      <button onClick={addPost}>Add post</button>
      {postsElement}
    </div>
  );
};

export default NewPosts;
