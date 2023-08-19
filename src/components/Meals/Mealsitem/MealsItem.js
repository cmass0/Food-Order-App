import { useContext } from "react";
import classes from "./MealsItem.module.css";
import MealsItemForm from "./MealsItemForm";
import CartContext from "../../../store/cart-context";

const MealsItem = (props) => {
  const cartctx = useContext(CartContext);
  const price = `$${props.price.toFixed(2)}`;

  const onAddCart = (e) => {
    cartctx.addItem({
      type: "ADD",
      id: props.id,
      name: props.name,
      amount: e,
      price: props.price,
    });
  };

  return (
    <div className={classes.mealsitem}>
      <li className={classes.mealsiteminfo}>
        <div className={classes.name}>{props.name}</div>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </li>
      <MealsItemForm id={props.id} onAddCart={onAddCart}></MealsItemForm>
    </div>
  );
};

export default MealsItem;
