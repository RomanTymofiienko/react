import React from "react";
import { addMessageActionCreator, updeteNewMessageTextActionCreator } from "../../redux/dialogs-reducer";
import Messages from "./Messages";
import { connect } from 'react-redux';

// const MessagesContainer = (props) => {

//   let addMessage = () => {
//     props.dispatch(addMessageActionCreator());
//   };

//   let onMessageChange = (text) => {
//     props.dispatch(updeteNewMessageTextActionCreator(text));
//   };
//   return (
//     <Messages addMessage={addMessage} updeteNewMessageText={onMessageChange} dialogsPage={props.dialogsPage} />
//   );
// };

let mapStateToProps = (state) => {
  return {
    messagesData: state.dialogsPage.messagesData,
    newMessageText: state.dialogsPage.newMessageText
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    updeteNewMessageText: (text) => {dispatch(updeteNewMessageTextActionCreator(text))},
    addMessage: () => {dispatch(addMessageActionCreator())}
  }
}

const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages);

export default MessagesContainer;
