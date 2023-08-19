import React, { useContext } from "react";
import Cart from "../Cart/Cart";
import classes from "./Header.module.css";
import mealsimg from "../../assets/meals.jpg";
import CartContext from "../../store/cart-context";

const Header = (props) => {
  const cartCtx = useContext(CartContext);

  const Amountitem = cartCtx.items.reduce((curNum, item) => {
    return curNum + item.amount;
  }, 0);

  const closebtn = (e) => {
    if (e) {
      props.onmodal(true);
    }
  };

  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1>FoodCafe</h1>
        <button className={classes.btn} onClick={closebtn}>
          <span className={classes["cart-imoji"]}>🛒</span>
          <span>Your Cart</span>
          {Amountitem > 0 && (
            <span className={classes.count}>{Amountitem}</span>
          )}
          {Amountitem <= 0 && <span className={classes.count}>0</span>}
        </button>
      </header>
      <div className={classes["main-img"]}>
        <img src={mealsimg} />
      </div>
    </React.Fragment>
  );
};

export default Header;
