import { create } from "zustand";

export type SortBy = "title" | "vote_average" | "popularity" | "name";
export type SortOrder = "asc" | "desc";
export type GenreType = "tv" | "movie" | "both";

type AppState = {
  query: {
    search: string;
    sort: [sortOption: SortBy, sortOrder: SortOrder];
  };
  lastNavigation: string;
  genreSelect: GenreType;
};

type AppActions = {
  setQuerySearch: (query: string) => void;
  setQuerySort: (by: SortBy, order: SortOrder) => void;
  setLastNavigation: (pathname: string) => void;
  setGenreSelect: (genreSelect: GenreType) => void;
};

export const useAppStore = create<AppState & AppActions>()((set) => ({
  query: {
    search: "",
    sort: ["title", "desc"],
  },
  lastNavigation: "/",
  genreSelect: "movie",
  setQuerySearch: (search) =>
    set((state) => ({
      ...state,
      query: {
        ...state,
        search,
        sort: [...state.query.sort],
      },
    })),
  setQuerySort: (by, order) =>
    set((state) => ({
      ...state,
      query: {
        ...state.query,
        sort: [by, order],
      },
    })),
  setLastNavigation: (lastNavigation) =>
    set((state) => ({
      ...state,
      lastNavigation,
    })),
  setGenreSelect: (genreSelect) =>
    set((state) => ({
      ...state,
      genreSelect,
    })),
}));
