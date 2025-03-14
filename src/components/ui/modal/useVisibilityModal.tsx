import {
  useState,
  useEffect,
  useRef,
  useContext,
  Dispatch,
  SetStateAction,
  createContext,
  ReactNode,
} from "react";

const useVisibilityModal = () => {
  const [visibility, setVisibility] = useState(false);
  const parentModal = useRef<HTMLDivElement>(null);
  useEffect(() => {
    parentModal.current = document.querySelector("#modal-container");
    if (parentModal.current) {
      if (visibility) parentModal.current.setAttribute("data-state", "open");
      else parentModal.current.setAttribute("data-state", "close");
    }
  }, [visibility]);
  return { visibility, setVisibility };
};

interface ModalState {
  visibility: boolean;
  setVisibility: Dispatch<SetStateAction<boolean>>;
}

interface Props {
  children: ReactNode;
}

const ModalCtx = createContext<ModalState>({
  setVisibility: () => null,
  visibility: false,
});

const ModalProvider = ({ children }: Props) => {
  const { visibility, setVisibility } = useVisibilityModal();
  const value: ModalState = {
    visibility,
    setVisibility,
  };
  return <ModalCtx.Provider value={value}>{children}</ModalCtx.Provider>;
};

const useVisibility = () => {
  return useContext(ModalCtx);
};

export { useVisibilityModal, ModalProvider, useVisibility };
