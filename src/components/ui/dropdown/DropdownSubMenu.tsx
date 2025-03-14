import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export const DropdownSubMenu = ({ children }: Props) => {
  return <div className="relative group">{children}</div>;
};

export const DropdownSubMenuContent = ({ children }: Props) => {
  return (
    <div className="absolute hidden group-hover:flex bg-neutral-800 right-0 translate-x-full flex-col min-w-34 rounded-md top-0 py-2">
      {children}
    </div>
  );
};

interface DropdownSubMenuTriggerProps {
  children: ReactNode;
  isActive?: boolean;
  onSelect?: () => void;
}

export const DropdownSubMenuTrigger = ({
  children,
  isActive = false,
  onSelect,
}: DropdownSubMenuTriggerProps) => {
  return (
    <div
      onClick={onSelect}
      className={`cursor-pointer px-4 py-2 flex items-center justify-between  ${
        isActive
          ? "bg-indigo-700 hover:bg-indigo-700/70"
          : "hover:bg-neutral-600/70"
      }`}
    >
      {children}
    </div>
  );
};
