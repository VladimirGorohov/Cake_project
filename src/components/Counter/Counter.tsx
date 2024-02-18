// import { CiCirclePlus } from "react-icons/ci";
// import { CiCircleMinus } from "react-icons/ci";
// import { useEffect, useState } from "react";

// import classes from "./Counter.module.css";

// function Counter({ price, count, setTotal }) {
//   const [weight, setWeight] = useState(count);

//   const addWeight = () => {
//     if (weight < 6) {
//       setWeight(weight + 0.5);
//     } else return;
//   };

//   const substractWeight = () => {
//     if (weight > 2) {
//       setWeight(weight - 0.5);
//     } else return;
//   };

//   console.log(count, price);

//   return (
//     <div className={classes.counter}>
//       <CiCircleMinus
//         className={classes.cart__icons_minus}
//         onClick={substractWeight}
//       />
//       <span>{weight} КГ</span>
//       <CiCirclePlus className={classes.cart__icons_plus} onClick={addWeight} />
//       <span>{price * weight}РУБ.</span>
//     </div>
//   );
// }

// export default Counter;
