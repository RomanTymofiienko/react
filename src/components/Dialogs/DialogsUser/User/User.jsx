import React from "react";
import s from "./User.module.css";
import { NavLink } from "react-router-dom";

const User = (props) => {
  return (
    <ul className={s.user}>
      <NavLink to={"/dialogs" + props.id}>{props.name}</NavLink>
    </ul>
  );
};

export default User;
