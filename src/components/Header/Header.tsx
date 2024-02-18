import Menu from "./Menu";
import Logo from "../UI/Logo/Logo";
import Navigation from "./Navigation/Navigation";

import classes from "./Header.module.css";

interface IHeader {
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
  cartItems: Array<object>;
}

function Header({ setVisible, cartItems }: IHeader) {
  return (
    <div className={classes.header}>
      <div className={classes.header__wrap}>
        <Logo className={classes.header__logo} />
        <Menu setVisible={setVisible} cartItems={cartItems} />
      </div>
      <Navigation />
    </div>
  );
}

export default Header;
