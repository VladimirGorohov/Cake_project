import React from "react";
import RenderImages from "../../RenderImages/RenderImages";

import classes from "./BentoCakes.module.css";

function BentoCake() {
  const bentoCakeImg = [
    "bentocake-1.jpg",
    "bentocake-2.jpg",
    "bentocake-3.jpg",
    "bentocake-4.jpg",
    "bentocake-5.jpg",
    "bentocake-6.jpg",
    "bentocake-7.jpg",
    "bentocake-8.jpg",
    "bentocake-9.jpg",
    "bentocake-10.jpg",
    "bentocake-11.jpg",
    "bentocake-12.jpg",
    "bentocake-13.jpg",
    "bentocake-14.jpg",
    "bentocake-15.jpg",
    "bentocake-16.jpg",
    "bentocake-17.jpg",
    "bentocake-18.jpg",
  ];

  return (
    <div className={classes.bento__cakes}>
      <h1>Бенто торты</h1>
      <RenderImages img={bentoCakeImg} />
    </div>
  );
}

export default BentoCake;
