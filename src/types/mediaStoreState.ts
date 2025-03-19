export type MediaStoreState = {
  genre: {
    id: number;
    genreType: "movie" | "tv";
  };
};

export type MediaStoreActions = {
  setGenre: (id: number) => void;
};
