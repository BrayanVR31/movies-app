import { useRef } from "react";
import { useSuspenseQueries } from "@tanstack/react-query";
import { getSeries } from "@/services/serieService";
import { getMovieByName } from "@/services/movieService";
import { useAppStore } from "@/store/useAppStore";

export const useSuspenseSearch = (signal?: AbortSignal) => {
  const userSearch = useAppStore((state) => state.query.search);
  return useSuspenseQueries({
    queries: [
      {
        queryKey: ["search-movies", userSearch],
        queryFn: () => getMovieByName(userSearch, signal),
        staleTime: Infinity,
      },
      {
        queryKey: ["search-series", userSearch],
        queryFn: () => getSeries(userSearch, signal),
        staleTime: Infinity,
      },
    ],
  });
};
