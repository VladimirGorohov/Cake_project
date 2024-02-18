import { Link } from "react-router-dom";

import classes from "./CartModal.module.css";
import MyButton from "../MyButton/Mybutton";

interface ICatalog {
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
  cartItems: Array<object>;
}

function CartModal({ setVisible, cartItems }: ICatalog) {
  return (
    <div className={classes.cart__modal}>
      <h1>Товар добавлен в корзину</h1>
      <Link to="/cart" onClick={() => setVisible(false)}>
        <MyButton className={classes.cart__modal_btn}>
          Перейти в корзину корзину
        </MyButton>
      </Link>
      <Link to="/" onClick={() => setVisible(false)}>
        <MyButton className={classes.cart__modal_btn}>
          Продолижть покупки
        </MyButton>
      </Link>
    </div>
  );
}

export default CartModal;
