import { useReducer } from "react";
import CartContext from "./cart-context";

const defaultcartstate = {
  items: [],
  totalAmount: 0,
};

const Itemreducer = (state, actions) => {
  if (actions.type === "ADD") {
    const duplication = state.items.findIndex(
      (obj) => obj.name === actions.item.name
    );

    const updateAmount =
      state.totalAmount + actions.item.price * actions.item.amount;
    if (duplication !== -1) {
      state.items[duplication].amount += actions.item.amount;

      return {
        items: state.items,
        totalAmount: updateAmount,
      };
    }

    const updateItem = state.items.concat(actions.item);
    return {
      items: updateItem,
      totalAmount: updateAmount,
    };
  }

  if (actions.type === "BTNADD") {
    console.log(actions.item.amount);
    console.log(actions.item.price);
    console.log(state.totalAmount);

    const duplication = state.items.findIndex(
      (obj) => obj.name === actions.item.name
    );

    const updateAmount = state.totalAmount + state.items[duplication].price;

    if (duplication !== -1) {
      state.items[duplication].amount += 1;

      return {
        items: state.items,
        totalAmount: updateAmount,
      };
    }

    const updateItem = state.items.concat(actions.item);

    return {
      items: updateItem,
      totalAmount: updateAmount,
    };
  }

  if (actions.type === "REMOVE") {
    const duplication = state.items.findIndex((obj) => obj.id === actions.id);

    const updateAmount = state.totalAmount - state.items[duplication].price;

    return {
      items: state.items,
      totalAmount: updateAmount,
    };
  }
  return defaultcartstate;
};

const CartProvider = (props) => {
  const [cartState, dispatchCart] = useReducer(Itemreducer, defaultcartstate);

  const addItemToCart = (item) => {
    dispatchCart({ type: item.type, item: item });
  };

  const removeItemFromCart = (id) => {
    dispatchCart({ type: "REMOVE", id: id });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCart,
    removeItem: removeItemFromCart,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
