// import Counter from "../../../Counter/Counter";
import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";
import { useEffect, useState } from "react";

import classes from "./CartElement.module.css";
import MyButton from "../../../UI/MyButton/Mybutton";

interface ICartElements {
  cartItems: Array<{
    price: string;
    title: string;
    img: string;
    prev: any;
    id: number;
    count: number;
    totalPrice: number;
  }>;
  setCartItems: React.Dispatch<React.SetStateAction<object>>;
  title: string;
  totalPrice: number;
  img: string;
  el: object;
  id: number;
  count: number;
}

function CartElement({
  cartItems,
  setCartItems,
  title,
  totalPrice,
  img,
  el,
  id,
  count,
}: ICartElements) {
  const addWeight = (id: number) => {
    setCartItems(
      cartItems.map((prod) => {
        if (prod.id === id && prod.count < 6) {
          return {
            ...prod,
            count: prod.count + 0.5,
            totalPrice: (prod.count + 0.5) * Number(prod.price.slice(0, 4)),
          };
        }
        return prod;
      })
    );
  };

  const substractWeight = (id: number) => {
    setCartItems(
      cartItems.map((prod) => {
        if (prod.id === id && prod.count > 2) {
          return {
            ...prod,
            count: prod.count - 0.5,
            totalPrice: (prod.count - 0.5) * Number(prod.price.slice(0, 4)),
          };
        }
        return prod;
      })
    );
  };

  const removeItems = (el: any) => {
    setCartItems(cartItems.filter((elem) => elem.id !== el.id));
  };

  return (
    <div className={classes.cart__element}>
      <div className={classes.cart__box}>
        <img className={classes.cart__el_photo} src={img} />
        <p className={classes.cart__el_text}>{title}</p>
        <div className={classes.counter}>
          <CiCircleMinus
            className={classes.cart__icons_minus}
            onClick={() => substractWeight(id)}
          />
          <span>{count} КГ</span>
          <CiCirclePlus
            className={classes.cart__icons_plus}
            onClick={() => addWeight(id)}
          />
        </div>
        <div>{totalPrice}</div>
        <MyButton
          onClick={() => removeItems(el)}
          className={classes.cart__btn_delete}
        >
          Удалить
        </MyButton>
      </div>
    </div>
  );
}
export default CartElement;
