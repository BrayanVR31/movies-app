import { ReactNode } from "react";
import { useDropdown } from ".";

interface Props {
  children: ReactNode;
  header: ReactNode;
}

const DropdownContent = ({ children, header }: Props) => {
  const { showOptions } = useDropdown();
  if (!showOptions) return null;
  return (
    <div className="absolute bg-neutral-800 rounded-sm text-white left-0 top-full w-max translate-y-1.5 z-50">
      <div className="border-b border-neutral-400 px-4 py-3 text-sm">
        {header}
      </div>
      <div className="py-2">{children}</div>
    </div>
  );
};

export { DropdownContent };
