import { MdOutlineKeyboardArrowUp } from "react-icons/md";

import classes from "./BtnScrollUp.module.css";

interface IBtnScrollUp {
  arrowUp: any;
  setArrowUp: any;
}

function BtnScrollUp({ arrowUp, setArrowUp }: IBtnScrollUp) {
  const handlerScrolUp = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <div
      className={arrowUp ? classes.active : classes.btnScrollUp}
      onClick={handlerScrolUp}
    >
      <MdOutlineKeyboardArrowUp className={classes.arrowUp} />
    </div>
  );
}

export default BtnScrollUp;
