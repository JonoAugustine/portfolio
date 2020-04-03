import React from "react";

const Modal = props => {
  return (
    <div className="modal center closed">
      <i className="fas fa-times exit" onClick={props.toggle} />
    </div>
  );
};

export default Modal;
