import { useEffect, useRef, lazy, Suspense } from "react";
import { useSearchMovieByQuery } from "@/hooks/useMovies";
import { useMovieStore } from "@/store/useMovieStore";
import { useAppStore } from "@/store/useAppStore";
import { GridTitle } from "@/components/ui/grid";
import { SkeletonMovieList, List } from "./MovieList";

const MovieList = lazy(() =>
  new Promise((resolve) => {
    setTimeout(resolve, 1_300);
  })
    .then(() => import("./MovieList"))
    .then((module) => ({
      default: module.default,
    }))
);

interface Props {
  query: string;
}

const MovieSearch = ({ query }: Props) => {
  const search = useAppStore((state) => state.query.search);
  const controller = useRef<AbortController>(null);
  const { data, isPending, isError } = useSearchMovieByQuery({
    query,
    signal: controller.current?.signal,
  });
  useEffect(() => {
    controller.current = new AbortController();
    return () =>
      (controller.current && controller.current.abort()) || undefined;
  }, [search]);

  if (isPending)
    return (
      <div className="italic text-white text-center">Searching results...</div>
    );
  if (isError || !data) return <div>No matches for "{query}"</div>;
  return (
    <div>
      <GridTitle>Search results</GridTitle>
      <Suspense fallback={<SkeletonMovieList totalCards={20} />}>
        <List data={data?.results} />
      </Suspense>
    </div>
  );
};

export default MovieSearch;
