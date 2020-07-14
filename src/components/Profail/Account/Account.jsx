import React from "react";
import s from "./Account.module.css";
import Avatar from "./Avatar/Avatar";
import Description from "./Description/Description";


const Account = () => {
  return (

      <div className = {s.account}>
        <Avatar />
        <Description />
        </div>

  );
};

export default Account;
