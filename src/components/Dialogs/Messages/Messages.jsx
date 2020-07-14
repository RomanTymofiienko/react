import React from "react";
import s from "./Messages.module.css";
import Message from "./Message/Message";


const Messages = (props) => {
  let newMessageElement = React.createRef();

  let addMessage = () => {
    props.addMessage();
  };

  let onMessageChange = () => {
    let text = newMessageElement.current.value;
    props.updeteNewMessageText(text);
  };

  let messagesElemants = props.messagesData.map((message) => (
    <Message message={message.message} id={message.id} />
  ));

  return (
    <div className={s.messages}>
      {messagesElemants}
      <textarea
        onChange={onMessageChange}
        ref={newMessageElement}
        value={props.newMessageText}
      ></textarea>
      <button onClick={addMessage}>Add message</button>
    </div>
  );
};

export default Messages;
