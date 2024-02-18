import MyButton from "../../UI/MyButton/Mybutton";
import MyInput from "../../UI/MyInput/MyInput";
import MyModal from "../../UI/MyModalCener/MyModal";
import { AiOutlineClose } from "react-icons/ai";
import axios from "axios";

import classes from "./Feedback.module.css";
import { useState } from "react";

interface IFeadback {
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

function Feedback({ setVisible }: IFeadback) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const TOKEN = "6905629399:AAG3fVPr55cqHWkPmRNQq7oQ6zzTXXvjZtY";
  const CHAT_ID = "-1002106240557";
  const URL_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

  function sendData(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    let message = `<b>Заявка с сайта!</b>\n`;
    message += `<b>Имя: </b>${name}\n`;
    message += `<b>Телефон: </b>${phone}`;

    axios.post(URL_API, {
      chat_id: CHAT_ID,
      parse_mode: "html",
      text: message,
    });
    setVisible(false);
    setName("");
    setPhone("");
  }

  return (
    <form className={classes.feedback}>
      <div className={classes.feedback__form}>
        <AiOutlineClose
          className={classes.feedback__close}
          onClick={() => setVisible(false)}
        />
        <h3 className={classes.feedback__header}>заказать обратный звонок</h3>
        <label className={classes.input__label__name}>Имя</label>
        <MyInput
          className={classes.feedback__input}
          type="text"
          name="name"
          value={name}
          onChange={(e: React.FormEvent<HTMLFormElement>) =>
            setName(e.currentTarget.value)
          }
        />
        <label className={classes.input__label__phone}>Телефон</label>
        <MyInput
          className={classes.feedback__input}
          type="text"
          name="phone"
          value={phone}
          onChange={(e: React.FormEvent<HTMLFormElement>) =>
            setPhone(e.currentTarget.value)
          }
        />
        <MyButton
          className={classes.feedback__btn}
          type="submit"
          onClick={sendData}
        >
          Отправить
        </MyButton>
        <p className={classes.feedback__footer}>
          Нажимая кнопку "Отправить вы даете согласие на обработку своих данных"
        </p>
      </div>
    </form>
  );
}

export default Feedback;
