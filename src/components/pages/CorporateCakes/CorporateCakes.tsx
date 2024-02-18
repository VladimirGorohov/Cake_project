import React from "react";
import RenderImages from "../../RenderImages/RenderImages";

import classes from "./CorporateCakes.module.css";

function CorporateCakes() {
  const corporateCakeImg = [
    "corporatecake-1.jpg",
    "corporatecake-2.jpg",
    "corporatecake-3.jpg",
    "corporatecake-4.jpg",
    "corporatecake-5.jpg",
    "corporatecake-6.jpg",
    "corporatecake-7.jpg",
    "corporatecake-8.jpg",
    "corporatecake-9.jpg",
    "corporatecake-10.jpg",
    "corporatecake-11.jpg",
    "corporatecake-12.jpg",
    "corporatecake-13.jpg",
    "corporatecake-14.jpg",
  ];

  return (
    <div className={classes.corporate__cake}>
      <h1>Корпоративные торты</h1>
      <RenderImages img={corporateCakeImg} />
    </div>
  );
}

export default CorporateCakes;
