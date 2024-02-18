import RenderImages from "../../RenderImages/RenderImages";

import classes from "./ForGirs.module.css";

function ForGirls() {
  const forGirlsImg = [
    "girlcake-1.jpg",
    "girlcake-2.jpg",
    "girlcake-3.jpg",
    "girlcake-4.jpg",
    "girlcake-5.jpg",
    "girlcake-6.jpg",
    "girlcake-7.jpg",
    "girlcake-8.jpg",
    "girlcake-9.jpg",
    "girlcake-10.jpg",
    "girlcake-11.jpg",
    "girlcake-12.jpg",
    "girlcake-13.jpg",
    "girlcake-14.jpg",
    "girlcake-15.jpg",
    "girlcake-16.jpg",
    "girlcake-17.jpg",
    "girlcake-18.jpg",
    "girlcake-19.jpg",
    "girlcake-20.jpg",
    "girlcake-21.jpg",
    "girlcake-22.jpg",
    "girlcake-23.jpg",
    "girlcake-24.jpg",
  ];

  return (
    <div className={classes.cupcakes}>
      <h1>Торты для девочки</h1>
      <RenderImages img={forGirlsImg} />
    </div>
  );
}

export default ForGirls;
