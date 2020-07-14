import React from "react";
import s from "./Link.module.css";
import { NavLink } from "react-router-dom";

const Link = (props) => {
  return (
    <ul className={s.link}>
      <li>
        <NavLink to={props.link} activeClassName={s.active}>
        {props.name}
        </NavLink>
      </li>
    </ul>
  );
};

export default Link;
