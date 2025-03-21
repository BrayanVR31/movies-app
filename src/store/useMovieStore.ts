import { create } from "zustand";
import { MediaStoreState, MediaStoreActions } from "@/types/mediaStoreState";

type MovieState = {} & MediaStoreState;
type MovieActions = {} & MediaStoreActions;

export const useMovieStore = create<MovieState & MovieActions>()((set) => ({
  genre: {
    id: 0,
    genreType: "movie",
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
