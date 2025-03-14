import { lazy, Suspense } from "react";
import { useMovies } from "../../hooks/useMovies";
import { SkeletonMovieList } from "@/components/ui/skeleton";

const MovieList = lazy(() =>
  new Promise((resolve) => setTimeout(resolve, 4_000)).then(
    () => import("./MovieList")
  )
);

const SuspenseMovieList = () => {
  const { data } = useMovies("popular");
  return (
    <Suspense fallback={<SkeletonMovieList totalCards={16} />}>
      <MovieList />
    </Suspense>
  );
};

export default SuspenseMovieList;
