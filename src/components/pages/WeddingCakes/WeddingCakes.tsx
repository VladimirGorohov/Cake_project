import React from "react";
import RenderImages from "../../RenderImages/RenderImages";

import classes from "./WeddingCakes.module.css";

function WeddingCakes() {
  const weddingCakeImg = [
    "weddingcake-1.jpg",
    "weddingcake-2.jpg",
    "weddingcake-3.jpg",
    "weddingcake-4.jpg",
    "weddingcake-5.jpg",
    "weddingcake-6.jpg",
    "weddingcake-7.jpg",
    "weddingcake-8.jpg",
    "weddingcake-9.jpg",
    "weddingcake-10.jpg",
    "weddingcake-11.jpg",
  ];

  return (
    <div className={classes.wedding__cake}>
      <h1>Свадебные торты</h1>
      <RenderImages img={weddingCakeImg} />
    </div>
  );
}

export default WeddingCakes;
