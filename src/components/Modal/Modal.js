import React from 'react';
import ReactModal from 'react-modal';

const Modal = ({ children, isOpen, onClose, label = 'PluraPolit', style = {} }) => (
  // TODO: Stell sicher, dass das Modal auf allen screens gut aussieht.

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
