import React from "react";
import s from "./DialogsUser.module.css";
import User from "./User/User";

const DialogsUser = (props) => {

    let userElemants = props.userData.map( dialog =>  <User name={dialog.name} id={dialog.id}/> )

  return (
    <div className={s.dialogsUser}>
        {userElemants}
    </div>
  );
};

export default DialogsUser;
