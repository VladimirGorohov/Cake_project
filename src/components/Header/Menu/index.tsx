import { AiOutlineWhatsApp } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";
import { PiHandbagThin } from "react-icons/pi";
import { TfiEmail } from "react-icons/tfi";
import { BsTelephone } from "react-icons/bs";
import { Link } from "react-router-dom";

import "./styles.css";

interface menuInterface {
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
  cartItems: Array<object>;
}

function Menu({ setVisible, cartItems }: menuInterface) {
  return (
    <div className="header__menu">
      <div className="header__contacts">
        <div className="contacts__box">
          <p className="contacts__phone"> +7 (987)8520444 </p>
          <p className="contacts__time">Ежедневно с 9:00 до 21:00</p>
        </div>
        <p className="contacts__btn" onClick={() => setVisible(true)}>
          <BsTelephone className="contacts__btn_icon" />{" "}
          <p className="contacts__btn_text">Обратный звонок</p>
        </p>
        <div className="icons">
          <a href="https://api.whatsapp.com/send?phone=9878520444">
            <AiOutlineWhatsApp className="icons__WhatsApp" />
          </a>
          <a href="https://instagram.com/em_cake56?igshid=OGQ5ZDc2ODk2ZA==">
            <BsInstagram className="icons__Instagram" />
          </a>
          <TfiEmail className="icons__Chat" />
        </div>
        <Link to="/cart">
          <div className="cart">
            <PiHandbagThin className="icons__cart" />
            <div className="cart__num">{cartItems.length}</div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Menu;
