import { create } from "zustand";

type SortOptions = "asc" | "desc";

interface QueryParams {
  genre: number;
  sortBy: {
    [key: string]: SortOptions;
  };
}

interface Details {
  selectedId: number | null;
  keyword: string;
}

interface MovieState {
  movie: {
    queryParams: QueryParams;
    details: Details;
    showModal: boolean;
  };
  setGenre: (genre: number) => void;
  setSelectedId: (selectedId: number) => void;
  setShowModal: (show: boolean) => void;
  setSortOptions: (options: QueryParams["sortBy"]) => void;
  setKeyword: (key: string) => void;
}

const useMovieStore = create<MovieState>()((set) => ({
  movie: {
    queryParams: {
      genre: 0,
      sortBy: {
        title: "asc",
      },
    },
    details: { selectedId: null, keyword: "" },
    showModal: false,
  },
  setShowModal: (showModal) =>
    set((state) => ({
      ...state,
      movie: {
        ...state.movie,
        showModal,
      },
    })),
  setGenre: (genre) =>
    set((state) => ({
      ...state,
      movie: {
        ...state.movie,
        queryParams: {
          ...state.movie.queryParams,
          genre,
        },
      },
    })),
  setSelectedId: (selectedId) =>
    set((state) => ({
      ...state,
      movie: {
        ...state.movie,
        details: {
          ...state.movie.details,
          selectedId,
        },
      },
    })),
  setSortOptions: (options) =>
    set((state) => ({
      ...state,
      movie: {
        ...state.movie,
        queryParams: {
          ...state.movie.queryParams,
          sortBy: { ...options },
        },
      },
    })),
  setKeyword: (keyword) =>
    set((state) => ({
      ...state,
      movie: {
        ...state.movie,
        details: {
          ...state.movie.details,
          keyword,
        },
      },
    })),
}));

export { useMovieStore };
