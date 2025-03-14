interface BaseMovie {
  id: number;
  title: string;
  backdrop_path: string;
  poster_path: string;
  vote_average: number;
}

interface Genres {
  id: number;
  name: string;
}

interface MovieDetails extends BaseMovie {
  genres: Genres[];
  overview: string;
  original_language: string;
}

interface Movie extends BaseMovie {
  genre_ids: number[];
}

export type { Movie, MovieDetails };
