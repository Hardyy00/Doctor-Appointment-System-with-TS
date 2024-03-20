import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

const Modal: React.FC<{
  children: React.ReactNode;
  open: boolean;
  onClose: () => void;
}> = ({ children, open, onClose }) => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const modal = dialogRef.current;
    if (open) {
      modal?.showModal();
    }

    return () => {
      modal?.close();
    };
  }, [open]);

  return createPortal(
    <dialog ref={dialogRef} onClose={onClose}>
      {children}
    </dialog>,
    document.getElementById("modal")!
  );
};

export default Modal;
