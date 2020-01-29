import React from 'react';
import ReactModal from 'react-modal';

const Modal = ({ children, isOpen, onClose, label = 'PluraPolit', style = {} }) => (
  <ReactModal
    isOpen={isOpen}
    onRequestClose={onClose}
    contentLabel={label}
    style={style}
  >
    {children}
  </ReactModal>
);

export default Modal;
