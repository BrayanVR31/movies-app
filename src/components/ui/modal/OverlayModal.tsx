import { createPortal } from "react-dom";
import { ModalContentProps, ModalContent } from "./ModalContent";

const OverlayModal = ({ children, header }: ModalContentProps) => {
  return createPortal(
    <ModalContent header={header}>{children}</ModalContent>,
    document.querySelector("#modal-container")!
  );
};

export { OverlayModal };
