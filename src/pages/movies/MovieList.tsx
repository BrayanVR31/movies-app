import { useMoviesByFilter } from "@/hooks/useMovies";
import MovieCard from "@/components/ui/movie-card";
import { GridContainer } from "@/components/ui/grid";

const MovieList = () => {
  const { data } = useMoviesByFilter();
  return (
    <GridContainer>
      {data.results.map((movie) => (
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

export default MovieList;
