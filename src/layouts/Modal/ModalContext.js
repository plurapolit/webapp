import React, { useState, useRef } from "react";
import ReactModal from "react-modal";

import CloseButton from "../../components/CloseButton/CloseButton";

const ModalContext = React.createContext();
const { Provider } = ModalContext;

const Modal = ({
  show = false,
  children,
}) => {
  const [open, setOpen] = useState(show);
  const style = useRef();
  const label = useRef("PluraPolit");
  const content = useRef(null);
  const closeModal = () => setOpen(false);

  const showContent = (newContent) => {
    content.current = newContent;
    setOpen(true);
  };

  return (
    <>
      <ReactModal
        isOpen={open}
        onRequestClose={closeModal}
        contentLabel={label.current}
        style={style.current}
        ariaHideApp={false}
      >
        <CloseButton onClick={closeModal} />
        {content.current}
      </ReactModal>
      <Provider value={{
        label: label.current,
        style: style.current,
        showContent,
        isModalOpen: open,
        closeModal,
      }}
      >
        {children}
      </Provider>
    </>
  );
};

export { Modal, ModalContext };
