import { lazy, Suspense } from "react";
import { GridTitle } from "@/components/ui/grid";
import { SkeletonMovieList } from "./MovieList";

const MovieList = lazy(() =>
  new Promise((resolve) => {
    setTimeout(resolve, 1_300);
  })
    .then(() => import("./MovieList"))
    .then((module) => ({
      default: module.default,
    }))
);

const Home = () => {
  return (
    <div>
      <GridTitle>Popular</GridTitle>
      <Suspense fallback={<SkeletonMovieList totalCards={16} />}>
        <MovieList />
      </Suspense>
    </div>
  );
};

export default Home;
