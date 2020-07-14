import React from "react";
import s from "./Message.module.css";

const Message = (props) => {
  return (
    <ul className={s.massage}>
      <li>{props.message}</li>
    </ul>
  );
};

export default Message;
