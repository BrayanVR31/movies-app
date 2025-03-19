import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const DropdownMenu = ({ children }: Props) => {
  return (
    <ul className="min-w-max max-h-96 overflow-x-hidden overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar]:bg-neutral-600/70 [&::-webkit-scrollbar-thumb]:bg-neutral-500/65 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar]:rounded-full">
      <div className="border-b border-neutral-400 text-sm px-4 py-3 group-[[data-dropdown-type=sub-menu]]/submenu:block hidden">
        Choose an option
      </div>
      {children}
    </ul>
  );
};

export { DropdownMenu };
