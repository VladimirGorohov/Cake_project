import { MdOutlinePayment } from "react-icons/md";
import { TbTruckDelivery } from "react-icons/tb";
import { GiPriceTag } from "react-icons/gi";
// import { useSelector } from "react-redux";
// import { useDispatch } from "react-redux";
import React from "react";

import "./style.css";
import { Link } from "react-router-dom";

function Block1() {
  return (
    <div className="block__1">
      <Link to="/price" className="box">
        {/* <div className="box"> */}
        <GiPriceTag className="box__img" />
        <p className="box__text">Цены</p>
        {/* </div> */}
      </Link>
      <Link to="/payment_info" className="box">
        {/* <div className="box"> */}
        <MdOutlinePayment className="box__img" />
        <p className="box__text">Способ оплаты</p>
        {/* </div> */}
      </Link>
      <Link to="delivery_info" className="box">
        {/* <div className="box"> */}
        <TbTruckDelivery className="box__img" />
        <p className="box__text">Доствка</p>
        {/* </div> */}
      </Link>
    </div>
  );
}

export default Block1;
