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

  if (actions.type === "REMOVE") {
    const duplication = state.items.findIndex((obj) => obj.id === actions.id);

    const updateAmount = state.totalAmount - state.items[duplication].price;
    const updateItemAmount = (state.items[duplication].amount -= 1);
    const updateItems = [...state.items];
    const updateItem = {
      ...state.items[duplication],
      amount: updateItemAmount,
    };
    updateItems[duplication] = updateItem;
    return {
      items: updateItems,
      totalAmount: updateAmount,
    };
  }
  return defaultcartstate;
};

const CartProvider = (props) => {
  const [cartState, dispatchCart] = useReducer(Itemreducer, defaultcartstate);

  const addItemToCart = (item) => {
    dispatchCart({ type: "ADD", item: item });
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
