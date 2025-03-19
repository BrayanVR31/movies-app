import { useSuspenseQuery, useQuery } from "@tanstack/react-query";
import { getSeriesByFilter } from "@/services/serieService";
import { useTvStore } from "@/store/useTvStore";
import { useAppStore } from "@/store/useAppStore";

interface TvSeriesOptions {
  withSuspense?: boolean;
}

export const useTvSeries = ({ withSuspense = false }: TvSeriesOptions) => {
  const genre = useTvStore((state) => state.genre.id).toString();
  const [type, mode] = useAppStore((state) => state.query.sort);
  const query = useQuery({
    queryKey: ["tv-series", genre, type, mode],
    queryFn: () =>
      getSeriesByFilter({
        genre,
        sortBy: {
          mode,
          type,
        },
      }),
  });
  const suspenseQuery = useSuspenseQuery({
    queryKey: ["tv-series", genre, type, mode],
    queryFn: () =>
      getSeriesByFilter({
        genre,
        sortBy: {
          mode,
          type,
        },
      }),
  });
  return withSuspense ? suspenseQuery : query;
};
