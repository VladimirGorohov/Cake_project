import { TfiEmail } from "react-icons/tfi";
import { BsInstagram } from "react-icons/bs";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { Link } from "react-router-dom";

import classes from "./Contacts.module.css";


function Contacts() {
  return (
    <div className={classes.contact}>
      <h1 className={classes.contact__header}>Контакты</h1>
      <h3 className={classes.contact__header_el}>Наша почта</h3>
      <Link
        to="mailto:em_cake56@mail.ru"
        className={classes.contacts__header_link}
      >
        <TfiEmail className={classes.contacts__img_mail} />
        <p className={classes.contacts__text}>em_cake56@mail.ru</p>
      </Link>
      <h3 className={classes.contact__header_el}>Наши соцсети</h3>
      <Link
        to="https://instagram.com/em_cake56?igshid=OGQ5ZDc2ODk2ZA=="
        className={classes.contacts__header_link}
      >
        <p className={classes.contacts__text}>Instagram</p>
        <BsInstagram className={classes.contacts__img_mail} />
      </Link>
      <Link
        to="https://api.whatsapp.com/send?phone=9878520444"
        className={classes.contacts__header_link}
      >
        <p className={classes.contacts__text}>WhatsApp</p>
        <AiOutlineWhatsApp className={classes.contacts__img_mail} />
      </Link>
      <h3 className={classes.contact__header_el}>
        Ежедневно с<span className={classes.header__time}> 9:00 </span>до{" "}
        <span className={classes.header__time}>21:00</span>
      </h3>
      <h3 className={classes.contact__header_el}>+7(987)8520444</h3>
    </div>
  );
}

export default Contacts;
