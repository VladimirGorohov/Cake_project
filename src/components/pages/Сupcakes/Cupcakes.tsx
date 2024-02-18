import RenderImages from "../../RenderImages/RenderImages";

import classes from "./Cupcakes.module.css";

function Cupcakes() {
  const cupcakesImg = [
    "cupcakes-1.jpg",
    "cupcakes-2.jpg",
    "cupcakes-3.jpg",
    "cupcakes-4.jpg",
    "cupcakes-5.jpg",
    "cupcakes-6.jpg",
    "cupcakes-7.jpg",
    "cupcakes-8.jpg",
    "cupcakes-9.jpg",
    "cupcakes-10.jpg",
    "cupcakes-11.jpg",
    "cupcakes-12.jpg",
    "cupcakes-13.jpg",
    "cupcakes-14.jpg",
    "cupcakes-15.jpg",
    "cupcakes-16.jpg",
    "cupcakes-17.jpg",
    "cupcakes-18.jpg",
    "cupcakes-19.jpg",
    "cupcakes-20.jpg",
    "cupcakes-21.jpg",
    "cupcakes-22.jpg",
    "cupcakes-23.jpg",
    "cupcakes-24.jpg",
    "cupcakes-25.jpg",
    "cupcakes-26.jpg",
  ];

  return (
    <div className={classes.cupcakes}>
      <h1>Капкейки</h1>
      <RenderImages img={cupcakesImg} />
    </div>
  );
}

export default Cupcakes;
