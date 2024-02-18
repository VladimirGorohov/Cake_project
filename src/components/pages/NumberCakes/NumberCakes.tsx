import React from "react";
import RenderImages from "../../RenderImages/RenderImages";

import classes from "./NumberCakes.module.css";

function NumberCakes() {
  const numberCakeImg = [
    "NumberCake-1.jpg",
    "NumberCake-2.jpg",
    "NumberCake-3.jpg",
    "NumberCake-4.jpg",
    "NumberCake-5.jpg",
    "NumberCake-6.jpg",
    "NumberCake-7.jpg",
    "NumberCake-8.jpg",
    "NumberCake-9.jpg",
    "NumberCake-10.jpg",
    "NumberCake-11.jpg",
    "NumberCake-12.jpg",
    "NumberCake-13.jpg",
  ];

  return (
    <div className={classes.number__cake}>
      <h1>Торт цифра</h1>
      <RenderImages img={numberCakeImg} />
    </div>
  );
}

export default NumberCakes;
