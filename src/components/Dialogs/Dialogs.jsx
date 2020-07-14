import React from "react";
import s from "./Dialogs.module.css";
import DialogsUser from "./DialogsUser/DialogsUser";
import MessagesContainer from "./Messages/MessagesContainer";

const Dialogs = (props) => {
  return (
    <div className={s.dialogs}>
      <DialogsUser userData={props.dialogsPage.userData} />
      <MessagesContainer />
    </div>
  );
};

export default Dialogs;
