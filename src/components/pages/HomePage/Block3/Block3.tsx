import React, { useState } from "react";
import MyButton from "../../../UI/MyButton/Mybutton";
import MyModal from "../../../UI/MyModalCener/MyModal";
import Feedback2 from "../../Feedback2/ Feedback2";

import classes from "./Block3.module.css";
import { Link } from "react-router-dom";

function Block3() {
  const [modal, setModal] = useState(false);
  return (
    <div className={classes.block__3}>
      <div className={classes.block__3_images}>
        <img
          className={classes.block__3_img}
          src="./тортпоэскизам.jpg"
          alt="cake"
        />
      </div>
      <div className={classes.block__3_content}>
        <h1 className={classes.block__3_header}>
          Торт <span>по вашему</span> эскизу
        </h1>
        <p className={classes.block__3_text}>
          Дайте идею, мы будем рады возможности воплотить ваши мысли в
          кулинарный шедевр
        </p>
        <MyButton
          onClick={() => setModal(true)}
          className={classes.block__3_btn}
        >
          Заказать
        </MyButton>
      </div>
      <MyModal visible={modal} setVisible={setModal}>
        <Feedback2 setVisible={setModal} />
      </MyModal>
    </div>
  );
}

export default Block3;
