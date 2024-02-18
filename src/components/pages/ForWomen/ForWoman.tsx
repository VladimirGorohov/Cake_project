import RenderImages from "../../RenderImages/RenderImages";

import classes from "./ForWomen.module.css";

function ForWomen() {
  const forWomenImg = [
    "WomenCake.jpg",
    "WomenCake-0.jpg",
    "WomenCake-1.jpg",
    "WomenCake-2.jpg",
    "WomenCake-3.jpg",
    "WomenCake-4.jpg",
    "WomenCake-5.jpg",
    "WomenCake-6.jpg",
    "WomenCake-7.jpg",
    "WomenCake-8.jpg",
    "WomenCake-9.jpg",
    "WomenCake-10.jpg",
    "WomenCake-11.jpg",
    "WomenCake-12.jpg",
    "WomenCake-13.jpg",
    "WomenCake-14.jpg",
    "WomenCake-15.jpg",
    "WomenCake-16.jpg",
    "WomenCake-17.jpg",
    "WomenCake-18.jpg",
    "WomenCake-19.jpg",
  ];

  return (
    <div className={classes.cupcakes}>
      <h1>Торты для женщин</h1>
      <RenderImages img={forWomenImg} />
    </div>
  );
}

export default ForWomen;
