import classes from "./Cart.module.css";
import ReactDOM from "react-dom";
import React, { Fragment, useContext, useEffect } from "react";
import Modal from "../UI/Modal";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";

const Cart = (props) => {
  const Cartctx = useContext(CartContext);
  const hasitem = Cartctx.totalAmount > 0;

  const cartItemAddHD = (item) => {
    // const duplication = Cartctx.items.findIndex(
    //   (items) => items.name === item.name
    // );

    // const addAmount = (Cartctx.items[duplication].amount += 1);
    Cartctx.addItem({
      type: "BTNADD",
      id: item.id,
      name: item.name,
      amount: item.amount,
      price: item.price,
    });

    // cartctx.addItem({
    //   type: "ADD",
    //   id: props.id,
    //   name: props.name,
    //   amount: e,
    //   price: props.price,
    // });

    // return addAmount;
  };

  const cartItemRemoveHD = (id) => {
    // const duplication = Cartctx.items.findIndex((items) => items.id === id);

    // const plusAmount = (Cartctx.items[duplication].amount -= 1);

    Cartctx.removeItem(id);

    // return plusAmount;
    // Cartctx.removeItem(id);
  };

  const cartitem = (
    <ul className={classes.cartitems}>
      {Cartctx.items.map((item) => (
        <CartItem
          key={item.id}
          id={item.id}
          name={item.name}
          price={item.price}
          amount={item.amount}
          cartItemAddHD={cartItemAddHD}
          cartItemRemoveHD={cartItemRemoveHD}
        ></CartItem>
      ))}
    </ul>
  );

  return (
    <Modal onclose={props.onclose}>
      {cartitem}
      <div className={classes.total}>
        {!hasitem && <span className={classes.isnot}>There is no item</span>}
        {hasitem && <span>Total Amount</span>}
        {hasitem && <span>${Cartctx.totalAmount.toFixed(2)}</span>}
        {/* {!hasitem && <span>0</span>} */}
      </div>
      <div className={classes.actions}>
        <button className={classes.closebtn} onClick={props.onclose}>
          Close
        </button>
        {hasitem && <button className={classes.orderbtn}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
