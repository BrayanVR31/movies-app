import { useEffect } from "react";
import { useSuspenseSearch } from "@/hooks/useSearch";
import { useCancellationSearch } from "@/hooks/useCancellationSearch";
import MovieCard from "@/components/ui/movie-card";
import { GridContainer } from "@/components/ui/grid";

interface Props {
  searchQuery: string;
}

const SearchResults = ({ searchQuery }: Props) => {
  if (searchQuery === "") return null;
  const { searchController } = useCancellationSearch();
  const [movieSearch, tvSearch] = useSuspenseSearch(
    searchController.current?.signal
  );
  const matchedMovies = movieSearch.data.results.length > 0;
  const matchedTvs = tvSearch.data.results.length > 0;
  // When there aren't any matched results
  if (!matchedMovies && !matchedTvs)
    return (
      <p className="text-white text-center">
        No matches for <span className="italic">"{searchQuery}"</span>
      </p>
    );
  console.log({ movieSearch, tvSearch });
  return (
    <GridContainer>
      {movieSearch.data.results.map((movie) => (
        <MovieCard
          key={movie.id}
          movie={{
            id: movie.id,
            title: movie.title,
            categories: movie.genre_ids,
            image: movie.poster_path,
            voteAverage: movie.vote_average,
          }}
        />
      ))}
      {tvSearch.data.results.map((tv) => (
        <MovieCard
          key={tv.id}
          movie={{
            id: tv.id,
            title: tv.name,
            categories: tv.genre_ids,
            image: tv.poster_path,
            voteAverage: tv.vote_average,
          }}
        />
      ))}
    </GridContainer>
  );
};

export default SearchResults;
