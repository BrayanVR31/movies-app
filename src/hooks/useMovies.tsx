import { useSuspenseQuery, useQuery, QueryClient } from "@tanstack/react-query";
import {
  getPopularMovies,
  getGenres,
  getMovieById,
  getMoviesByOptions,
} from "@/services/movieService";
import { useMovieStore } from "@/store/useMovieStore";

type MovieType = "popular";
const matchMoviePromise = {
  popular: getPopularMovies,
};

export const useMoviesByFilter = () => {
  const sortBy = useMovieStore((state) => state.movie.queryParams.sortBy);
  const sortByType = Object.keys(sortBy);
  console.log("sortBy: ");
  const genre = useMovieStore((state) => state.movie.queryParams.genre);
  console.log("with_genres?", genre);
  return useSuspenseQuery({
    queryKey: ["search-movies", sortBy, genre],
    queryFn: () =>
      getMoviesByOptions({
        genre,
        sort_by: {
          mode: sortBy[sortByType.join("")],
          type: sortByType.join(""),
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

export const searchMovieByQuery = () => {
  useSuspenseQuery({
    queryKey: ["movie-search"],
  });
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
