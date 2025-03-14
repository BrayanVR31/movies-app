import { useSuspenseGenres } from "@/hooks/useMovies";
import { ChevronDown } from "lucide-react";
import {
  DropdownClose,
  DropdownProvider,
  DropdownContent,
  DropdownTrigger,
} from "@/components/ui/dropdown";
import { useMovieStore } from "@/store/useMovieStore";

export const GenreFilter = () => {
  const setGenre = useMovieStore((state) => state.setGenre);
  const genreId = useMovieStore((state) => state.movie.queryParams.genre);
  const { data } = useSuspenseGenres();
  console.log(genreId);
  return (
    <DropdownProvider>
      <div className="relative max-w-max">
        <DropdownClose className="py-2 cursor-pointer flex items-center bg-neutral-800 text-white rounded-3xl text-sm px-4 hover:bg-neutral-800/80 transition-colors duration-500">
          <span>Genres</span>
          <ChevronDown className="w-4 ml-2" />
        </DropdownClose>
        <DropdownContent header={<h4 className="min-w-36">Choose a genre</h4>}>
          <DropdownTrigger
            onSelect={() => setGenre(0)}
            isActive={genreId === 0}
          >
            All
          </DropdownTrigger>
          {data.genres.map((genre) => (
            <DropdownTrigger
              onSelect={() => setGenre(genre.id)}
              isActive={genreId === genre.id}
              key={genre.id}
            >
              {genre.name}
            </DropdownTrigger>
          ))}
        </DropdownContent>
      </div>
    </DropdownProvider>
  );
};
