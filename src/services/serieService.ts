import axios from "./tmdbConfig";
import { BaseResults, TMDBParams } from "@/types/tmdb";
import { Serie } from "@/types/serie";

export const getSeries = async (querySearch = "", signal?: AbortSignal) => {
  const query = querySearch ? `?query=${querySearch}` : "";
  return (
    await axios.get<BaseResults<Serie>>(`/search/tv${query}`, {
      signal,
    })
  ).data;
};

export const getSeriesByFilter = async (queryParams: TMDBParams) => {
  const querySort =
    typeof queryParams?.sortBy !== "string" && queryParams.sortBy;
  const queryGenre =
    queryParams?.genre && queryParams?.genre !== "0"
      ? `&with_genres=${queryParams.genre}`
      : "";
  console.log({ queryGenre, querySort });
  const sortBy = !querySort
    ? ""
    : `&sort_by=${querySort.type}.${querySort.mode}`;
  return (
    await axios.get<BaseResults<Serie>>(
      `/discover/tv?include_adult=false&include_video=false&language=en-US${queryGenre}${sortBy}`
    )
  ).data;
};
