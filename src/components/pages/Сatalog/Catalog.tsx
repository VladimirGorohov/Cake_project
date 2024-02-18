import catalogItem from "../../../system/menu.json";
import { Link } from "react-router-dom";

import classes from "./Catalog.module.css";

interface ICatalog {
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

function Catalog({ setVisible }: ICatalog) {
  return (
    <div className={classes.catalog}>
      <h1 className={classes.catalog__header}>Каталог</h1>
      <ul className={classes.catalog__items}>
        {catalogItem.map((el: { link: string; title: string }) => (
          <Link to={el.link} onClick={() => setVisible(false)}>
            <li className={classes.catalog__item}>{el.title}</li>
          </Link>
        ))}
      </ul>
    </div>
  );
}

export default Catalog;
