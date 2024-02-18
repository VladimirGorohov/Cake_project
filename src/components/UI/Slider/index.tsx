import { FaArrowCircleRight } from "react-icons/fa";
import { FaArrowCircleLeft } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import Slider from "react-slick";

import classes from "./index.module.css";
import { useState } from "react";
import { Link } from "react-router-dom";

function Slide({ children, images, className }: any) {
  const NextArrow = ({ onClick }: any) => {
    return (
      <div className={classes.arrow__next} onClick={onClick}>
        <FaArrowCircleRight />
      </div>
    );
  };

  const rootClasses = [classes.slide, classes.activSlide];

  const PrevArrow = ({ onClick }: any) => {
    return (
      <div className={classes.arrow__prev} onClick={onClick}>
        <FaArrowCircleLeft />
      </div>
    );
  };

  const [imageIndex, setImageIndex] = useState(0);
  console.log(rootClasses);

  const settings: any = {
    infinite: true,
    lazyLoad: true,
    speed: 500,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current: any, next: any) => setImageIndex(next),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinity: true,
          dots: true,
        },
      },
      {
        breakpoint: 980,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinity: true,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinity: true,
          dots: true,
        },
      },
    ],
  };

  return (
    <div className={className}>
      {children}
      <h1 className={classes.slaider_header}>Категории Тортиков</h1>
      <Slider {...settings}>
        {images.map((img: any, idx: any) => (
          <div
            key={idx}
            className={
              idx === imageIndex ? rootClasses.join(" ") : classes.slide
            }
          >
            <Link className={classes.slide__link} to={img.link}>
              <div className={classes.img__header}>
                <p>{img.img.split(".")[0]}</p>
              </div>
              <div className={classes.img__text}>
                <p>В категрию</p> {<FaArrowRightLong />}
              </div>

              <img className={classes.slide__img} src={img.img} alt={img} />
            </Link>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Slide;
