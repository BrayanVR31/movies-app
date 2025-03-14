import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  isActive?: boolean;
  onSelect?: () => void;
}

const DropdownTrigger = ({ children, isActive = false, onSelect }: Props) => {
  return (
    <div
      onClick={() => onSelect && onSelect()}
      className={`text-sm px-4 py-2 transition-colors duration-500 cursor-pointer flex [&_svg]:w-4 justify-between items-center ${
        isActive
          ? "bg-indigo-800 hover:bg-indigo-800/80"
          : "hover:bg-neutral-700"
      }`}
    >
      {children}
    </div>
  );
};

export { DropdownTrigger };
