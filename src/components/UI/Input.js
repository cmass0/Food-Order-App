import classes from "./Input.module.css";
import React, { useState } from "react";

const Input = React.forwardRef((props, ref) => {
  return (
    <div className={classes.inputform}>
      <label htmlFor={props.input.id} className={classes.inputlabel}>
        {props.label}
      </label>
      <input ref={ref} {...props.input} className={classes.input}></input>
    </div>
  );
});
export default Input;
