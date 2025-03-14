import { useMoviesByFilter } from "@/hooks/useMovies";
import { Suspense, lazy } from "react";
import { SkeletonMovieList } from "@/components/ui/skeleton";

const MovieList = lazy(() => import("./MovieList"));

const Home = () => {
  const { data } = useMoviesByFilter();
  console.log(data);
  return (
    <div>
      <h4>Movies</h4>
      <Suspense fallback={<SkeletonMovieList totalCards={20} />}>
        <MovieList />
      </Suspense>
    </div>
  );
};

export default Home;
