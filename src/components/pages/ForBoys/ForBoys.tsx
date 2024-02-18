import RenderImages from "../../RenderImages/RenderImages";

import classes from "./ForBoys.module.css";

function ForBoys() {
  const forBoysImg = [
    "boycake-1.jpg",
    "boycake-2.jpg",
    "boycake-3.jpg",
    "boycake-4.jpg",
    "boycake-5.jpg",
    "boycake-6.jpg",
    "boycake-7.jpg",
    "boycake-8.jpg",
    "boycake-9.jpg",
    "boycake-10.jpg",
    "boycake-11.jpg",
    "boycake-12.jpg",
    "boycake-13.jpg",
    "boycake-14.jpg",
    "boycake-15.jpg",
    "boycake-16.jpg",
    "boycake-17.jpg",
    "boycake-18.jpg",
    "boycake-19.jpg",
    "boycake-20.jpg",
    "boycake-21.jpg",
    "boycake-22.jpg",
    "boycake-23.jpg",
    "boycake-24.jpg",
  ];

  return (
    <div className={classes.cupcakes}>
      <h1>Торты для мальчика</h1>
      <RenderImages img={forBoysImg} />
    </div>
  );
}

export default ForBoys;
