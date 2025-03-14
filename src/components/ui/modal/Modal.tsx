import { createPortal } from "react-dom";
import { useEffect, useRef, ReactNode } from "react";
import { X } from "lucide-react";
import { useModal } from "@/hooks/useModal";

interface Props {
  header: ReactNode;
  children: ReactNode;
  isOpen?: boolean;
  onCloseModal?: () => void;
}

const Modal = ({ children, header, onCloseModal, isOpen }: Props) => {
  if (!isOpen) return null;
  return (
    <div className="bg-neutral-800 w-1/2 min-h-60 rounded-lg py-6 px-8 relative shadow-lg shadow-neutral-800/40">
      <div className="text-white relative w-full mb-4">
        {header}
        <button
          onClick={onCloseModal}
          className="group cursor-pointer [&>svg]:w-5 absolute right-0 top-0"
        >
          <X className="text-gray-400 group-hover:text-gray-200 transition-colors duration-500 " />
        </button>
      </div>
      <div>{children}</div>
    </div>
  );
};

const PortalModal = ({ children, ...props }: Props) => {
  return createPortal(
    <Modal {...props}>{children}</Modal>,
    document.querySelector("#modal-container")!
  );
};

export { PortalModal as Modal };
