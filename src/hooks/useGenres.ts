import { useSuspenseQuery } from "@tanstack/react-query";
import { getGenres } from "@/services/genreService";
import { useAppStore } from "@/store/useAppStore";

interface GenreOptions {
  type?: "movie" | "tv";
}

export const useGenreList = ({ type }: GenreOptions = {}) => {
  // Get the type of category depending on tv series or movies
  const genreSelect = useAppStore((state) => state.genreSelect);
  const suspenseQuery = useSuspenseQuery({
    queryKey: ["genres", type || genreSelect || ""],
    queryFn: () => getGenres(genreSelect),
  });
  return suspenseQuery;
};
