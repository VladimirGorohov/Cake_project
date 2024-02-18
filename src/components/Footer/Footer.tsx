import React from "react";
import Logo from "../UI/Logo/Logo";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";
import { CiMail } from "react-icons/ci";

import classes from "./Footer.module.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className={classes.footer}>
      <div className={classes.footer__content}>
        <Logo className={classes.footer__logo} />
        <div className={classes.footer__block}>
          <p>Телефон</p>
          <Link to="tel:+79878474497">
            <p>+7(987)8520444</p>
          </Link>
        </div>
        <div className={classes.footer__block}>
          <p>Мы на связи</p>
          <div className={classes.footer__mail}>
            <CiMail className={classes.footer__mail_icon} />
            <Link to="mailto:em_cake56@mail.ru">
              <p>em_cake56@mail.ru</p>
            </Link>
          </div>
        </div>
        <div className={classes.footer__block}>
          <p>Мы в соцсетях</p>
          <AiOutlineWhatsApp className={classes.footer__img} />
          <BsInstagram className={classes.footer__img} />
        </div>
      </div>
      <p className={classes.footer__text}>
        Вся представленная на сайте информация носит информационный характер и
        ни при каких условиях не является публичной офертой.
      </p>
    </div>
  );
}

export default Footer;
