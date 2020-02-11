import React from "react";
import ReactModal from "react-modal";

const Modal = ({
  children,
  isOpen,
  closeModal,
  label = "PluraPolit",
  style = {},
}) => (
  <ReactModal
    isOpen={isOpen}
    onRequestClose={closeModal}
    contentLabel={label}
    style={style}
    ariaHideApp={false}
  >
    {children}
  </ReactModal>
);

export default Modal;
