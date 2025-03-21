import { PiPopcornThin } from "react-icons/pi";
import MovieCard, { SkeletonMovieCard } from "@/components/ui/movie-card";
import { Movie } from "@/types/movie";
import { useMovies } from "@/hooks/useMovies";
import { useMovieStore } from "@/store/useMovieStore";
import { useAppStore } from "@/store/useAppStore";
import { GridContainer } from "@/components/ui/grid";
import { sortMovies, filterByGenre } from "@/utils/sortList";

interface ListProps {
  data: Movie[];
}
const List = ({ data }: ListProps) => {
  if (data.length <= 0)
    return (
      <div className="text-neutral-300 text-lg flex flex-col w-full items-center mt-12">
        <PiPopcornThin className="text-8xl" />
        <h5>Sorry, we couldn't find any results.</h5>
      </div>
    );
  return (
    <GridContainer>
      {data.map((movie) => (
        <MovieCard
          key={movie.id}
          movie={{
            id: movie.id,
            title: movie.title,
            image: movie.poster_path,
            categories: movie.genre_ids,
            voteAverage: Math.floor(movie.vote_average),
          }}
        />
      ))}
    </GridContainer>
  );
};

const MovieList = () => {
  const [by, order] = useAppStore((state) => state.query.sort);
  const selectedGenre = useMovieStore((state) => state.genre.id);
  const { data: movies } = useMovies("popular");
  const filterMoviesByGenre = filterByGenre(movies.results, selectedGenre);
  const transformedMovies = sortMovies(filterMoviesByGenre, [by, order]);
  return <List data={transformedMovies} />;
};

interface SkeletonMovieListProps {
  totalCards: number;
}

export const SkeletonMovieList = ({
  totalCards = 8,
}: SkeletonMovieListProps) => {
  return (
    <div className="grid grid-cols-[repeat(auto-fit,_190px)] justify-between gap-x-4 gap-y-4 text-white">
      {Array(totalCards)
        .fill(null)
        .map((_, index) => (
          <SkeletonMovieCard key={index} />
        ))}
      <SkeletonMovieCard />
    </div>
  );
};

export default MovieList;
