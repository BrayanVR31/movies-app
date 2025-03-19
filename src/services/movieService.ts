import axios from "./tmdbConfig";
import { Movie, MovieDetails } from "@/types/movie";

interface TMDB<T> {
  page: number;
  results: T[];
  total_pages: number;
  total_results: number;
}

interface Genre {
  id: number;
  name: string;
}

interface TMDBGenres {
  genres: Genre[];
}

export const getLastestMovies = async () => {
  return (await axios.get("/movie/changes")).data;
};

export const getUpcomingMovies = async () => {
  return (await axios.get("/movie/upcoming")).data;
};

export const getPopularMovies = async () => {
  return (await axios.get<TMDB<Movie>>("/movie/popular?include_adult=false"))
    .data;
};

export const getGenres = async () => {
  return (await axios.get<TMDBGenres>("/genre/movie/list")).data;
};

export const getMovieById = async (id: number) => {
  return (await axios.get<MovieDetails>(`/movie/${id}`)).data;
};

type SortMode = "asc" | "desc";

interface FilterOptions {
  genre?: number;
  sort_by?: {
    type: string;
    mode: SortMode;
  };
}

export const getMoviesByOptions = async ({ sort_by, genre }: FilterOptions) => {
  const sort = sort_by ? `&sort_by=${sort_by.type}.${sort_by.mode}` : "";
  const genres = genre && genre !== 0 ? `&with_genres=${genre}` : "";
  return (
    await axios.get<TMDB<Movie>>(
      `/discover/movie?include_adult=false&include_video=false&language=en-US&year=2025${genres}${sort}&vote_count.gte=85`
    )
  ).data;
};

export const getMovieByName = async (keyword: string, signal?: AbortSignal) => {
  return (
    await axios.get<TMDB<Movie>>(
      `search/movie?query=${keyword}&include_adult=false`,
      {
        signal,
      }
    )
  ).data;
};
