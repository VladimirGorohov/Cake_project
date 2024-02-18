import RenderImages from "../../RenderImages/RenderImages";

import classes from "./ForMen.module.css";

function ForMan() {
  const forManImg = [
    "MenCake-1.jpg",
    "MenCake-2.jpg",
    "MenCake-3.jpg",
    "MenCake-4.jpg",
    "MenCake-5.jpg",
    "MenCake-6.jpg",
    "MenCake-7.jpg",
    "MenCake-8.jpg",
    "MenCake-9.jpg",
    "MenCake-10.jpg",
    "MenCake-11.jpg",
    "MenCake-12.jpg",
    "MenCake-13.jpg",
    "MenCake-14.jpg",
    "MenCake-15.jpg",
    "MenCake-16.jpg",
    "MenCake-17.jpg",
    "MenCake-18.jpg",
    "MenCake-19.jpg",
    "MenCake-20.jpg",
    "MenCake-21.jpg",
    "MenCake-22.jpg",
    "MenCake-23.jpg",
    "MenCake-24.jpg",
  ];

  return (
    <div className={classes.cupcakes}>
      <h1>Торты для мужчин</h1>
      <RenderImages img={forManImg} />
    </div>
  );
}

export default ForMan;
