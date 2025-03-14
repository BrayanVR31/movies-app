import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const DropdownContainer = ({ children }: Props) => {
  return <div className="relative max-w-max">{children}</div>;
};

export { DropdownContainer };
