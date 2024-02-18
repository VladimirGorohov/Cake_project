import classes from "./HomePage.module.css";
import Block1 from "./Block1";
import Slide from "../../UI/Slider";
import Block2 from "./Block2/Block2";
import Block3 from "./Block3/Block3";
import categoryCake from "../../../system/category-cake.json";

interface IHomePage {
  setCartItems: React.Dispatch<React.SetStateAction<object>>;
  cartItems: Array<object>;
  setVisibleCart: React.Dispatch<React.SetStateAction<boolean>>;
  visible: any;
}

function HomePage({ setCartItems, cartItems, setVisibleCart }: IHomePage) {
  const sliderImg = [
    { img: "Торты для девочки.jpg", link: "/for_girls" },
    { img: "Торты для мальчика.jpg", link: "/for_boys" },
    { img: "Торты для мужчины.jpg", link: "/for_mens" },
    { img: "Торты для женщины.jpg", link: "/for_womens" },
    { img: "Свадебные торты.jpg", link: "/weddings_cake" },
    { img: "Корпоративные торты.jpg", link: "/corporate_cake" },
    { img: "Капкейки.jpg", link: "/cupcakes" },
    { img: "Праздничные торты.jpg", link: "/birthday_cake" },
    { img: "Торты цифры.jpg", link: "/cake_number" },
  ];

  return (
    <main className={classes.content}>
      <Block1 />
      <Slide images={sliderImg} />
      <Block2
        category={categoryCake}
        setCartItems={setCartItems}
        setVisibleCart={setVisibleCart}
        cartItems={cartItems}
      />
      <Block3 />
    </main>
  );
}

export default HomePage;
