import { ReactNode } from "react";

export interface ModalHeaderProps {
  children: ReactNode;
}

const ModalHeader = ({ children }: ModalHeaderProps) => {
  return <div className="text-white relative w-full">{children}</div>;
};

export { ModalHeader };
