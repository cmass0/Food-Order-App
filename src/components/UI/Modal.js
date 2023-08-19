import React, { useState } from "react";
import classes from "./Modal.module.css";
import ReactDOM from "react-dom";
import Cart from "../Cart/Cart";

const BackDrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onclose}></div>;
};

const ModalOverlay = (props) => {
  return <div className={classes.modal}>{props.children}</div>;
};

const Modal = (props) => {
  return (
    <React.Fragment>
      <div>
        {ReactDOM.createPortal(
          <BackDrop onclose={props.onclose} />,
          document.getElementById("backdrop-root")
        )}
      </div>
      <div>
        {ReactDOM.createPortal(
          <ModalOverlay>{props.children}</ModalOverlay>,
          document.getElementById("modal-root")
        )}
      </div>
    </React.Fragment>
  );
};

export default Modal;
