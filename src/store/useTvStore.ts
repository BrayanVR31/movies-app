import { create } from "zustand";
import { MediaStoreState, MediaStoreActions } from "@/types/mediaStoreState";

type TvState = {} & MediaStoreState;
type TvActions = {} & MediaStoreActions;

export const useTvStore = create<TvState & TvActions>()((set) => ({
  genre: {
    id: 0,
    genreType: "tv",
  },
  setGenre: (id) =>
    set((state) => ({
      ...state,
      genre: {
        ...state.genre,
        id,
      },
    })),
}));
