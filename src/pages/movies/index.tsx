import { Suspense, lazy } from "react";
import { SkeletonMovieList } from "@/components/ui/skeleton";
import { GridTitle } from "@/components/ui/grid/GridTitle";

const MovieList = lazy(() => import("./MovieList"));

const Home = () => {
  return (
    <div>
      <GridTitle>Movies</GridTitle>
      <Suspense fallback={<SkeletonMovieList totalCards={20} />}>
        <MovieList />
      </Suspense>
    </div>
  );
};

export default Home;
