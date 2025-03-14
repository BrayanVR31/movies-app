import { ReactNode, JSX } from "react";

export interface ModalContentProps {
  children: ReactNode;
  header: () => JSX.Element;
}

const ModalContent = ({ children, header }: ModalContentProps) => {
  return (
    <div className="bg-neutral-800 w-1/2 min-h-60 rounded-lg py-4 px-8 relative shadow-lg shadow-neutral-800/40">
      {header && header()}
      <div>{children}</div>
    </div>
  );
};

export { ModalContent };
