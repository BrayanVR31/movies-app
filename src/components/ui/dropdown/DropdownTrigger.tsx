import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  isActive?: boolean;
  onSelect?: () => void;
  withIcon?: boolean;
}

const DropdownTrigger = ({
  children,
  isActive = false,
  onSelect,
  withIcon = false,
}: Props) => {
  const withIconClassName = withIcon ? "" : "[&_svg]:hidden";
  return (
    <div
      onClick={() => onSelect && onSelect()}
      className={`text-sm px-4 py-2 transition-colors duration-500 cursor-pointer flex [&_svg]:w-3.5 [&_svg]:rotate-90 [&:hover_svg]:rotate-0 [&_svg]:transition-transform [&_svg]:duration-300 ${withIconClassName} justify-between items-center ${
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
