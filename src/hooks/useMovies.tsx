import { useSuspenseQuery, useQuery, QueryClient } from "@tanstack/react-query";
import { useSearchParams } from "react-router";
import {
  getPopularMovies,
  getGenres,
  getMovieById,
  getMoviesByOptions,
  getMovieByName,
} from "@/services/movieService";
import { useMovieStore } from "@/store/useMovieStore";
import { useAppStore } from "@/store/useAppStore";

type MovieType = "popular";
const matchMoviePromise = {
  popular: getPopularMovies,
};

export const useMoviesByFilter = () => {
  const genre = useMovieStore((state) => state.genre.id);
  const [type, mode] = useAppStore((state) => state.query.sort);
  return useSuspenseQuery({
    queryKey: ["search-movies", genre, type, mode],
    queryFn: () =>
      getMoviesByOptions({
        genre,
        sort_by: {
          mode,
          type,
        },
      }),
  });
};

const useMovies = (type: MovieType) => {
  return useSuspenseQuery({
    queryKey: [`movies-${type}`],
    queryFn: matchMoviePromise[type],
  });
};

interface SearchMovieByQueryOptions {
  query: string;
  signal?: AbortSignal;
}

export const useSearchMovieByQuery = ({
  query,
  signal,
}: SearchMovieByQueryOptions) => {
  return useQuery({
    queryKey: ["movie-search", query],
    queryFn: () => getMovieByName(query, signal),
  });
  /*
  return useSuspenseQuery({
    queryKey: ["movie-search", keyword],
    queryFn: () => getMovieByName(keyword, controller.current?.signal),
  });
  */
};

const usePrefetchMovies = (type: MovieType) => {
  const queryClient = new QueryClient();
  return () =>
    queryClient.prefetchQuery({
      queryKey: [`movies-${type}`],
      queryFn: matchMoviePromise[type],
    });
};

const useGenres = () => {
  return useQuery({
    queryKey: ["movies-genres"],
    queryFn: getGenres,
    select: (data) => data.genres,
  });
};

export const useSuspenseGenres = () => {
  return useSuspenseQuery({
    queryKey: ["movies-genres"],
    queryFn: getGenres,
  });
};

const usePrefetchGenres = () => {
  const queryClient = new QueryClient();
  return () =>
    queryClient.prefetchQuery({
      queryKey: ["movies-genres"],
      queryFn: getGenres,
    });
};

const usePrefetchMovieById = (id: number) => {
  const queryClient = new QueryClient();
  return () =>
    queryClient.prefetchQuery({
      queryKey: ["movie", id],
      queryFn: () => getMovieById(id),
    });
};

const useSuspenseMovie = (id: number) => {
  return useSuspenseQuery({
    queryKey: ["movie", id],
    queryFn: () => getMovieById(id),
  });
};

export {
  useMovies,
  useGenres,
  usePrefetchMovies,
  usePrefetchGenres,
  usePrefetchMovieById,
  useSuspenseMovie,
};
