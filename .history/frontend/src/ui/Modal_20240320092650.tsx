import { useRef } from "react";
import { createPortal } from "react-dom";

const Modal: React.FC = () => {
  const dialogRef = useRef();

  return createPortal(
    <dialog ref={dialogRef}></dialog>,
    document.getElementById("modal")
  );
};

export default Modal;
