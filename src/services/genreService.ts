import axios from "./tmdbConfig";
import { GenreResults } from "@/types/tmdb";

export const getGenres = async (resource: string) => {
  return (await axios.get<GenreResults>(`/genre/${resource}/list`)).data;
};
