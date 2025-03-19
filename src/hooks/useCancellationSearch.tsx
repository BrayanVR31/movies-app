import { createContext, ReactNode, RefObject, useContext, useRef } from "react";

interface CancellationSearchState {
  searchController: RefObject<AbortController | null>;
}

const CancellationSearchCtx = createContext<CancellationSearchState>({
  searchController: { current: null },
});

interface Props {
  children: ReactNode;
}

export const CancellationSearchProvider = ({ children }: Props) => {
  const searchController = useRef<AbortController>(null);
  const value: CancellationSearchState = {
    searchController,
  };
  return (
    <CancellationSearchCtx.Provider value={value}>
      {children}
    </CancellationSearchCtx.Provider>
  );
};

export const useCancellationSearch = () => {
  const context = useContext(CancellationSearchCtx);
  return context;
  if (!context)
    throw new Error(
      "useCancellationSearch must be wrapped in a CancellationSearchProvider"
    );
};
