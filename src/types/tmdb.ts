import { QueryParams, SortQuery } from "@/types/queryParams";

export type BaseResource = {
  id: number;
  backdrop_path: string;
  poster_path: string;
  vote_average: number;
  genre_ids: number[];
};

export type BaseResults<T> = {
  page: number;
  results: Array<T & BaseResource>;
  total_pages: number;
  total_results: number;
};

export interface Genre {
  id: number;
  name: string;
}

export interface GenreResults {
  genres: Genre[];
}

export type TMDBParams = QueryParams<string | Partial<SortQuery>>;
