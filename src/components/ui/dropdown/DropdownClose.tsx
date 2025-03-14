import {
  MouseEvent,
  HTMLAttributes,
  ReactNode,
  useRef,
  RefObject,
  useEffect,
} from "react";
import { useDropdown } from ".";
import { useOuterClick } from "@/hooks/useOuterClick";

interface Props {
  className?: HTMLAttributes<HTMLButtonElement>["className"];
  children: ReactNode;
  onClose?: () => void;
}

export const DropdownClose = ({ className, children, onClose }: Props) => {
  const refButton = useRef(null);
  const { setShowOptions, showOptions } = useDropdown();
  const { watchOnClick } = useOuterClick(
    refButton as unknown as RefObject<Node>
  );
  const activeClassName = showOptions ? "bg-indigo-600" : "";
  const onClick = () => {
    setShowOptions(!showOptions);
    onClose && onClose();
  };
  watchOnClick(() => setShowOptions(false));
  return (
    <button
      ref={refButton}
      className={`cursor-pointer ${className} ${activeClassName}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
