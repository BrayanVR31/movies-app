import {
  createContext,
  useContext,
  useState,
  Dispatch,
  SetStateAction,
  ReactNode,
  useRef,
  useEffect,
} from "react";
import { useMovieStore } from "@/store/useMovieStore";

interface ModalState {
  showModal: boolean;
  setShowModal: Dispatch<SetStateAction<boolean>>;
}

const ModalCtx = createContext<ModalState>({
  showModal: false,
  setShowModal: () => null,
});

export const useModal = () => {
  return useContext(ModalCtx);
};

interface Props {
  children: ReactNode;
}

const ModalProvider = ({ children }: Props) => {
  const [showModal, setShowModal] = useState(false);
  const modalContainer = useRef<HTMLDivElement>(null);
  const value: ModalState = {
    showModal,
    setShowModal,
  };
  useEffect(() => {
    const modalState = showModal ? "open" : "close";
    // Set the modal container reference
    if (!modalContainer.current) {
      modalContainer.current = document.querySelector("#modal-container");
    } else {
      modalContainer.current.setAttribute("data-state", modalState);
    }
  }, [showModal]);
  return <ModalCtx.Provider value={value}>{children}</ModalCtx.Provider>;
};

export const useMovieModal = () => {
  const showModal = useMovieStore((state) => state.movie.showModal);
  const modalContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const modalState = showModal ? "open" : "close";
    // Set the modal container reference
    if (!modalContainer.current) {
      modalContainer.current = document.querySelector("#modal-container");
    } else {
      modalContainer.current.setAttribute("data-state", modalState);
    }
  }, [showModal]);
};

export { ModalProvider };
