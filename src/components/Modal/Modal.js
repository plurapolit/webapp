import React from 'react';
import ReactModal from 'react-modal';

const Modal = ({
  children, isOpen, onClose, label = 'PluraPolit', style = {},
}) => (
  // TODO: Stell sicher, dass das Modal auf allen screens gut aussehen.

  <ReactModal
    isOpen={isOpen}
    onRequestClose={onClose}
    contentLabel={label}
    style={style}
    ariaHideApp={false}
  >
    {children}
  </ReactModal>
);

export default Modal;
