import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  isSubMenu?: boolean;
}

const DropdownWrapper = ({ children, isSubMenu = false }: Props) => {
  return (
    <div
      data-dropdown-type={isSubMenu ? "sub-menu" : "menu"}
      className={`group/submenu ${
        !isSubMenu
          ? "relative"
          : "absolute z-10 hidden group-hover/dropdown:block bg-neutral-800 rounded-sm text-sm text-white shadow-lg shadow-neutral-900/45 w-max"
      }`}
    >
      {children}
    </div>
  );
};

export { DropdownWrapper };
