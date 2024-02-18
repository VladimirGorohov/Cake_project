import React, { useState } from "react";
import MyButton from "../../../UI/MyButton/Mybutton";

import classes from "./Block2.module.css";

interface IBlock2 {
  category: any;
  // Array<{
  //   title?: string;
  //   discription?: string;
  //   price?: number;
  //   note?: string;
  //   id?: number;
  //   img?: string;
  // }>;
  setCartItems: React.Dispatch<React.SetStateAction<object>>;
  cartItems: Array<{ id?: number }>;
  setVisibleCart: React.Dispatch<React.SetStateAction<boolean>>;
}

function Block2({
  category,
  setCartItems,
  cartItems,
  setVisibleCart,
}: IBlock2) {
  let [discription, setDiscription] = useState(category[1]);
  let [item, setItem] = useState(null);

  const addCart = () => {
    const newCake = cartItems.map((el) => el.id).indexOf(discription.id);
    if (newCake === -1) {
      setCartItems([...cartItems, discription]);
    } else return;
    setVisibleCart(true);
  };

  const changeCake = function (e: any) {
    setDiscription(category[e.target.id - 1]);
    setItem(e.target.id);
  };

  const categoryCake = category.map((el: any) => (
    <div
      onClick={changeCake}
      className={item === el.id ? classes.cake && classes.active : classes.cake}
      id={el.id}
      key={el.id}
    >
      {el.title}
    </div>
  ));

  return (
    <div className={classes.block__2}>
      <h1 className={classes.header}>Попробуйте наши начинки</h1>
      <div className={classes.types__cake}>
        <ul className={classes.type__cake}>{categoryCake}</ul>
        <div className={classes.cake__disc}>
          <h1 className={classes.cake__title}>{discription.title}</h1>
          <div className={classes.cake__info}>
            <img
              src={discription.img}
              className={classes.cake__img}
              alt="cake"
            />
            <div className={classes.cake__text__box}>
              <p className={classes.cake__text}>{discription.discription}</p>
              <p className={classes.cake__price}>{discription.price}</p>
              <p className={classes.cake__price_text}>{discription.note}</p>
              <MyButton className={classes.block__2_btn} onClick={addCart}>
                В корзину
              </MyButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Block2;
