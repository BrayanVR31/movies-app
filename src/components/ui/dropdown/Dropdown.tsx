import {
  createContext,
  Dispatch,
  SetStateAction,
  ReactNode,
  useState,
  useContext,
} from "react";

interface DropdownState {
  showOptions: boolean;
  setShowOptions: Dispatch<SetStateAction<boolean>>;
}

const DropdownCtx = createContext<DropdownState>({
  showOptions: false,
  setShowOptions: () => null,
});

interface Props {
  children: ReactNode;
  isOpen?: boolean;
}

export const DropdownProvider = ({ children, isOpen = false }: Props) => {
  const [showOptions, setShowOptions] = useState(isOpen);
  const value: DropdownState = {
    showOptions,
    setShowOptions,
  };
  return <DropdownCtx.Provider value={value}>{children}</DropdownCtx.Provider>;
};

export const useDropdown = () => {
  const value = useContext(DropdownCtx);
  if (!value)
    throw new Error("Dropdown context must be wrapped into DropdownProvider");
  return value;
};
