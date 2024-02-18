import EmptyCart from "./EmptyCart/EmptyCart";
import CartElement from "./CartElement/CartElement";

import classes from "./Cart.module.css";
import { useEffect, useState } from "react";
import MyButton from "../../UI/MyButton/Mybutton";

interface ICart {
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
}

function Cart({ cartItems, setCartItems }: ICart) {
  const [total, setTotal] = useState({
    price: cartItems.reduce((prev, curr) => {
      return prev + curr.totalPrice;
    }, 0),
  });

  useEffect(() => console.log("Массив CartItems изименися"), [cartItems]);

  useEffect(() => {
    setTotal({
      price: cartItems.reduce((prev, curr) => {
        return prev + curr.totalPrice;
      }, 0),
    });
  }, [cartItems]);

  const clearCart = () => setCartItems([]);

  return (
    <div className={classes.cart}>
      <h1 className={classes.cart__header}>Корзина</h1>
      {cartItems.length == 0 ? (
        <EmptyCart />
      ) : (
        cartItems.map((el) => (
          <CartElement
            cartItems={cartItems}
            title={el.title}
            totalPrice={el.totalPrice}
            img={el.img}
            id={el.id}
            setCartItems={setCartItems}
            el={el}
            count={el.count}
          />
        ))
      )}
      {cartItems.length ? <div>Итого:{total.price} </div> : <div></div>}
      {cartItems.length ? (
        <MyButton onClick={clearCart} className={classes.cart__empty_btn}>
          Очистить корзину
        </MyButton>
      ) : (
        <div></div>
      )}
    </div>
  );
}

export default Cart;
