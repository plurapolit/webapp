import React, { useState, useRef } from "react";
import ReactModal from "react-modal";

import CloseButton from "../../components/CloseButton/CloseButton";
import Helper from "../../components/CommentModal/CommentModalHelper";

const ModalContext = React.createContext();
const { Provider } = ModalContext;

const defaultStyle = Helper.modalStyle;

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

  const setStyle = (newStyle) => {
    style.current = newStyle;
  };

  const setLabel = (newLabel) => {
    label.current = newLabel;
  };

  return (
    <>
      <ReactModal
        isOpen={open}
        onRequestClose={closeModal}
        contentLabel={label.current}
        style={style.current ? style.current : defaultStyle}
        ariaHideApp={false}
      >
        <CloseButton onClick={closeModal} />
        {content.current}
      </ReactModal>
      <Provider value={{
        setLabel,
        setStyle,
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
