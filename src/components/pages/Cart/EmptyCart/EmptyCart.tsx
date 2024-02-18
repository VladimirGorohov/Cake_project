import MyButton from "../../../UI/MyButton/Mybutton";
import { Link } from "react-router-dom";

import classes from "./EmptyCart.module.css";

function EmptyCart() {
  return (
    <div className={classes.cart__empty}>
      <h2 className={classes.cart__empty_text}>Ваша корзина пуста</h2>
      <Link to="/">
        <MyButton className={classes.cart__empty_btn}>
          Вернуться в магазин
        </MyButton>
      </Link>
    </div>
  );
}

export default EmptyCart;
