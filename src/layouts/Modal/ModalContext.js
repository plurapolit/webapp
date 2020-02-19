import React, { useState, useRef } from "react";
import ReactModal from "react-modal";

import CloseButton from "../../components/CloseButton/CloseButton";

const ModalContext = React.createContext();
const { Provider } = ModalContext;

const Modal = ({
  show = false,
  children,
}) => {
  const [isOpen, setIsOpen] = useState(show);
  const style = useRef();
  const label = useRef("PluraPolit");
  const content = useRef(null);
  const closeModal = () => setIsOpen(false);

  const setContent = (newContent) => {
    content.current = newContent;
  };

  return (
    <>
      <ReactModal
        isOpen={isOpen}
        onRequestClose={closeModal}
        contentLabel={label.current}
        style={style.current}
        ariaHideApp={false}
      >
        <CloseButton onClick={closeModal} />
        {content.current}
      </ReactModal>
      <Provider value={{
        setIsOpen,
        label: label.current,
        style: style.current,
        setContent,
        isOpen,
      }}
      >
        {children}
      </Provider>
    </>
  );
};

export { Modal, ModalContext };
