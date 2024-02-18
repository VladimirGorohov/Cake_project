import React from "react";
import RenderImages from "../../RenderImages/RenderImages";

import classes from "./ChildrensCake.module.css";

function ChildrensCake() {
  const childrenCakeImg = [
    "boycake-1.jpg",
    "girlcake-1.jpg",
    "boycake-2.jpg",
    "girlcake-2.jpg",
    "boycake-3.jpg",
    "girlcake-3.jpg",
    "boycake-4.jpg",
    "girlcake-4.jpg",
    "boycake-5.jpg",
    "girlcake-5.jpg",
    "boycake-6.jpg",
    "girlcake-6.jpg",
    "boycake-7.jpg",
    "girlcake-7.jpg",
    "boycake-8.jpg",
    "girlcake-8.jpg",
    "boycake-9.jpg",
    "girlcake-9.jpg",
    "boycake-10.jpg",
    "girlcake-10.jpg",
    "boycake-11.jpg",
    "girlcake-11.jpg",
    "boycake-12.jpg",
    "girlcake-12.jpg",
    "boycake-13.jpg",
    "girlcake-13.jpg",
    "boycake-14.jpg",
    "girlcake-14.jpg",
    "boycake-15.jpg",
    "girlcake-15.jpg",
    "boycake-16.jpg",
    "girlcake-16.jpg",
    "boycake-17.jpg",
    "girlcake-17.jpg",
    "boycake-18.jpg",
    "girlcake-18.jpg",
    "boycake-19.jpg",
    "girlcake-19.jpg",
    "boycake-20.jpg",
    "girlcake-20.jpg",
    "boycake-21.jpg",
    "girlcake-21.jpg",
    "boycake-22.jpg",
    "girlcake-22.jpg",
    "boycake-23.jpg",
    "girlcake-23.jpg",
    "boycake-24.jpg",
    "girlcake-24.jpg",
    "boycake-25.jpg",
    "boycake-26.jpg",
    "boycake-27.jpg",
    "boycake-28.jpg",
  ];

  return (
    <div className={classes.children__cake}>
      <h1>Детские торты</h1>
      <RenderImages img={childrenCakeImg} />
    </div>
  );
}

export default ChildrensCake;
