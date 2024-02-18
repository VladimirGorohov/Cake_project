import React from "react";
import RenderImages from "../../RenderImages/RenderImages";

import classes from "./BerthdayCake.module.css";

function BirthdayCake() {
  const bithdayCakeImg = [
    "weddingcake-1.jpg",
    "baptismcake-1.jpg",
    "weddingcake-2.jpg",
    "baptismcake-2.jpg",
    "weddingcake-3.jpg",
    "baptismcake-3.jpg",
    "weddingcake-4.jpg",
    "baptismcake-4.jpg",
    "weddingcake-5.jpg",
    "baptismcake-5.jpg",
    "weddingcake-6.jpg",
    "weddingcake-7.jpg",
    "weddingcake-8.jpg",
    "weddingcake-9.jpg",
    "weddingcake-10.jpg",
    "weddingcake-11.jpg",
  ];

  return (
    <div className={classes.bithday__cake}>
      <h1>Праздничные торты</h1>
      <RenderImages img={bithdayCakeImg} />
    </div>
  );
}

export default BirthdayCake;
