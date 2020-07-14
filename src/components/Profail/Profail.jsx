import React from "react";
import s from "./Profail.module.css";
import Account from "./Account/Account";
import MyPosts from "./MyPosts/MyPosts";


const Profail = (props) => {

  return (
      <div className ={s.profail}>
        <Account />
        <MyPosts />
      </div>  

  );
};

export default Profail;
