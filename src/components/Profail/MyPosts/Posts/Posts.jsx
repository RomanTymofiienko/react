import React from "react";
import s from "./Posts.module.css";

const Posts = (props) => {

  return (
    <div className={s.posts}>
      <p>{props.text}</p>
      <div>{props.like}</div>
    </div>
  );
};

export default Posts;
