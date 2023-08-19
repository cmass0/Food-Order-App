import React, { useEffect, useState, useRef } from "react";
import Input from "../../UI/Input";
import classes from "./MealsItemForm.module.css";

const MealsItemForm = (props) => {
  const [Amountval, setAmountval] = useState(true);
  const InputRef = useRef();

  const subEvent = (e) => {
    e.preventDefault();
    const amountref = InputRef.current.value;
    const amountrefNum = +amountref;

    if (amountref.trim().length === 0 || amountrefNum < 1 || amountrefNum > 5) {
      setAmountval(false);
      return;
    }

    props.onAddCart(amountrefNum);
  };

  return (
    <form className={classes.form} onSubmit={subEvent}>
      <Input
        ref={InputRef}
        min="1"
        max="5"
        label="Amount"
        input={{
          id: "amount_" + props.id,
          type: "numbeer",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      ></Input>
      <button className={classes.formbtn}>+ Add</button>
      {!Amountval && <p>Please enter a vaild amount (1~5).</p>}
    </form>
  );
};

export default MealsItemForm;
