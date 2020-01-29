import React from 'react';
import ReactModal from 'react-modal';

const Modal = ({ children, isOpen, onClose, label = 'PluraPolit' }) => (
  <ReactModal
    isOpen={isOpen}
    onRequestClose={onClose}
    contentLabel={label}
  >
    {children}
  </ReactModal>
);

export default Modal;
