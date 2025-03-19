import { ReactNode } from "react";

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
      className={`cursor-pointer px-4 py-2 flex items-center text-sm justify-between [&>svg]:w-4 ${
        isActive
          ? "bg-indigo-700 hover:bg-indigo-700/70"
          : "hover:bg-neutral-600/70"
      }`}
    >
      {children}
    </div>
  );
};
