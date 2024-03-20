import { useRef } from "react";
import { createPortal } from "react-dom";

const Modal: React.FC<{
  children: React.ReactNode;
  open: boolean;
  onClose: () => void;
}> = ({ children, open, onClose }) => {
  const dialogRef = useRef(null);

  return createPortal(
    <dialog ref={dialogRef} onClose={onClose}>
      {children}
    </dialog>,
    document.getElementById("modal")!
  );
};

export default Modal;
