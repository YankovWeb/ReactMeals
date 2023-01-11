import React from "react";
import classes from "./Modal.module.css";
import {createPortal} from "react-dom";

const BackDrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClose} />;
};

const ModalOVerlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById("overlays");

const Modal = (props) => {
  return (
    <>
      {createPortal(<BackDrop onClose={props.onClose} />, portalElement)}
      {createPortal(
        <ModalOVerlay>{props.children}</ModalOVerlay>,
        portalElement
      )}
    </>
  );
};

export default Modal;
