import Header from "../Header/Header";
import HomePage from "../pages/HomePage/HomePage";
import AdditionsCake from "../pages/AdditionsCakes";
import Feedback from "../pages/Feedback/ Feedback";
import MyModal from "../UI/MyModalCener/MyModal";
import BtnScrollUp from "../UI/BtnScrollUP/BtnScrollUp";
import Footer from "../Footer/Footer";
import FooterMobile from "../FooterMobile/FooterMobile";
import Catalog from "../pages/Сatalog/Catalog";
import Contacts from "../pages/Сontacts/Contacts";
import Cart from "../pages/Cart/Cart";
import Loyout from "../pages/Loyout/Loyout";
import MyModalFooter from "../UI/MyModalFooter/MyModalFooter";
import { Route, Routes } from "react-router-dom";
import { useState, Suspense } from "react";
import CartModal from "../UI/CartModal/CartModal";
import { LazyBerthdayCake } from "../pages/BirthdayCakes/BirthdayCake.lazy";
import { LazyChildrenCake } from "../pages/ChildrensCakes/ChildrenCake.lazy";
import { LazyCorporateCakes } from "../pages/CorporateCakes/CorporeteCakes.lazy";
import { LazyCupcakes } from "../pages/Сupcakes/Cupcakes.lazy";
import { LazyBentoCakes } from "../pages/BentoCakes/BentoCakes.lazy";
import { LazyForGirls } from "../pages/ForGirls/ForGirls.lazy";
import { LazyForBoys } from "../pages/ForBoys/ForBoys.lazy";
import { LazyForMen } from "../pages/ForMen/ForMen.lazy";
import { LazyForWoman } from "../pages/ForWomen/ForWoman.lazy";
import { LazyWeddingsCakes } from "../pages/WeddingCakes/WeddingsCakes.lazy";
import { LazyNumberCakes } from "../pages/NumberCakes/NumberCakes.lazy";
import { LazyPrice } from "../pages/Price/Price.lazy";
import { LazyPayment } from "../pages/Payment/Payment.lazy";
import { LazyDelivery } from "../pages/Delivery/Delivery.lazy";

import classes from "../App/index.module.css";

function App() {
  const [modalFeedback, setModalFeedback] = useState(false);
  const [modalCatalog, setModalCatalog] = useState(false);
  const [modalContact, setModalContact] = useState(false);
  const [modalCart, setModalCart] = useState(false);
  const [arrowUp, setArrowUp] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  function scrollVisible() {
    if (window.scrollY > 300) {
      setArrowUp(true);
    } else {
      setArrowUp(false);
    }
  }

  window.onscroll = scrollVisible;

  return (
    <div className={classes.root}>
      <Header setVisible={setModalFeedback} cartItems={cartItems} />
      <div className={classes.wrapper}>
        <MyModal visible={modalFeedback} setVisible={setModalFeedback}>
          <Feedback setVisible={setModalFeedback} />
        </MyModal>
        <MyModal visible={modalCart} setVisible={setModalCart}>
          <CartModal setVisible={setModalCart} cartItems={cartItems} />
        </MyModal>
        <MyModalFooter visible={modalCatalog} setVisible={setModalCatalog}>
          <Catalog setVisible={setModalCatalog} />
        </MyModalFooter>
        <MyModalFooter visible={modalContact} setVisible={setModalContact}>
          <Contacts />
        </MyModalFooter>

        <Routes>
          <Route
            path="/"
            element={
              <Suspense fallback={<p>Loading...</p>}>
                <Loyout />
              </Suspense>
            }
          >
            <Route
              path="/"
              element={
                <HomePage
                  visible={modalFeedback}
                  setVisibleCart={setModalCart}
                  setCartItems={setCartItems}
                  cartItems={cartItems}
                />
              }
            ></Route>
            <Route path="/birthday_cake" element={<LazyBerthdayCake />}></Route>
            <Route path="/children_cake" element={<LazyChildrenCake />}></Route>
            <Route
              path="/corporate_cake"
              element={<LazyCorporateCakes />}
            ></Route>
            <Route path="/cupcakes" element={<LazyCupcakes />}></Route>
            <Route path="/bentocakes" element={<LazyBentoCakes />}></Route>
            <Route path="/additions" element={<AdditionsCake />}></Route>
            <Route path="/for_girls" element={<LazyForGirls />}></Route>
            <Route path="/for_boys" element={<LazyForBoys />}></Route>
            <Route path="/for_mens" element={<LazyForMen />}></Route>
            <Route path="/for_womens" element={<LazyForWoman />}></Route>
            <Route
              path="/weddings_cake"
              element={<LazyWeddingsCakes />}
            ></Route>
            <Route path="/cake_number" element={<LazyNumberCakes />}></Route>
            <Route path="/price" element={<LazyPrice />}></Route>
            <Route path="/payment_info" element={<LazyPayment />}></Route>
            <Route path="/delivery_info" element={<LazyDelivery />}></Route>
            <Route
              path="/cart"
              element={
                <Cart cartItems={cartItems} setCartItems={setCartItems} />
              }
            ></Route>
          </Route>
        </Routes>
        <BtnScrollUp arrowUp={arrowUp} setArrowUp={setArrowUp} />
      </div>
      <Footer />

      <FooterMobile
        setVisibleFeedback={setModalFeedback}
        setVisibleCatalog={setModalCatalog}
        setModalContact={setModalContact}
        cartItems={cartItems}
      />
    </div>
  );
}

export default App;
