import { useState } from "react";
import MyModal from "../UI/MyModalCener/MyModal";
import classes from "./RenderImages.module.css";
import { AiOutlineClose } from "react-icons/ai";

interface IRenderImages {
  children?: React.ReactNode;
  img: string[];
}

function RenderImages({ children, img }: IRenderImages) {
  const [visible, setVisible] = useState(false);
  const [chekedPhoto, setChekedPhoto] = useState("");

  const rootClasses = [classes.myModal__photo];

  if (visible) {
    rootClasses.push(classes.active);
  }

  return (
    <div className={classes.render__img}>
      {children}
      {img.map((img) => (
        <img
          className={classes.img}
          id={img}
          src={img}
          alt={img}
          onClick={(e) => {
            setChekedPhoto(e.currentTarget.id);
            setVisible(true);
          }}
        />
      ))}
      ;
      <MyModal
        className={rootClasses.join(" ")}
        visible={visible}
        setVisible={setVisible}
      >
        <AiOutlineClose
          className={classes.myModal__close}
          onClick={() => setVisible(false)}
        />
        <img className={classes.photo} src={chekedPhoto} alt="cake" />
      </MyModal>
    </div>
  );
}

export default RenderImages;
