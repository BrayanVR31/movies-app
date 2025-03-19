import { useSuspenseGenres } from "@/hooks/useMovies";

interface Props {
  movieGenresIds: number[];
}

const MovieGenre = ({ movieGenresIds }: Props) => {
  const { data } = useSuspenseGenres();
  return (
    <p className="text-xs text-gray-200">
      {data.genres
        .filter((genreId) => movieGenresIds?.includes(genreId.id))
        .map((genre) => genre.name)
        .join(", ")}
    </p>
  );
};

const SkeletonMovieGenre = () => {
  return (
    <div className="flex w-full flex-col animate-pulse min-h-6">
      <div className="w-10 h-2 mb-2 bg-neutral-600/90 rounded-sm" />
      <div className="w-20 h-2 bg-neutral-600/90 rounded-sm" />
    </div>
  );
};

export { SkeletonMovieGenre };
export { MovieGenre };
