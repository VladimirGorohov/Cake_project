import React from "react";
import { HiOutlineBookOpen } from "react-icons/hi2";
import { PiBookOpenTextThin } from "react-icons/pi";
import { PiHandbagThin } from "react-icons/pi";
import { PiPhoneLight } from "react-icons/pi";
import { PiBookOpenThin } from "react-icons/pi";
import { CiUser } from "react-icons/ci";
import { Link } from "react-router-dom";

import classes from "./FooterMobile.module.css";

interface IFooterMobile {
  setVisibleFeedback: React.Dispatch<React.SetStateAction<boolean>>;
  setVisibleCatalog: React.Dispatch<React.SetStateAction<boolean>>;
  setModalContact: React.Dispatch<React.SetStateAction<boolean>>;
  cartItems: Array<object>;
}

function FooterMobile({
  setVisibleFeedback,
  setVisibleCatalog,
  setModalContact,
  cartItems,
}: IFooterMobile) {
  return (
    <div className={classes.footer__mobile}>
      <div className={classes.footer__mobile_wrap}>
        <div
          className={classes.footer__link}
          onClick={() => setVisibleCatalog(true)}
        >
          <PiBookOpenTextThin className={classes.footer__mobile_item} />
          Каталог
        </div>
        <Link className={classes.footer__link} to="/cart">
          <PiHandbagThin className={classes.footer__mobile_item} />
          Корзина
          <span className={classes.footer__cart_num}>{cartItems.length}</span>
        </Link>
        <div
          className={classes.footer__link}
          onClick={() => setVisibleFeedback(true)}
        >
          <PiPhoneLight className={classes.footer__mobile__phone} />
        </div>
        <div className={classes.footer__link}>
          <CiUser className={classes.footer__mobile_item} />
          Профиль
        </div>
        <div
          className={classes.footer__link}
          onClick={() => setModalContact(true)}
        >
          <PiBookOpenThin className={classes.footer__mobile_item} />
          Контакты
        </div>
      </div>
    </div>
  );
}

export default FooterMobile;
