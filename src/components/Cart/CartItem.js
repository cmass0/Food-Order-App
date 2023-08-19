import React from "react";
import classes from "./CartItem.module.css";

const CartItem = (props) => {
  const onclickAddBtn = () => {
    props.cartItemAddHD({
      name: props.name,
      id: props.id,
      amount: props.amount,
      price: props.price,
    });
  };

  const onclickRemoveBtn = () => {
    props.cartItemRemoveHD(props.id);
  };

  return (
    <React.Fragment>
      {props.amount > 0 && (
        <li className={classes.itemlist}>
          <div>
            <h2 className={classes.itemname}>{props.name}</h2>
            <span className={classes.itemprice}>${props.price}</span>
            <span className={classes.itemamount}>x {props.amount}</span>
          </div>
          <span className={classes.minplusbtn}>
            <button className={classes.minusbtn} onClick={onclickRemoveBtn}>
              -
            </button>
            <button className={classes.plusbtn} onClick={onclickAddBtn}>
              +
            </button>
          </span>
        </li>
      )}
    </React.Fragment>
  );
};

export default CartItem;
