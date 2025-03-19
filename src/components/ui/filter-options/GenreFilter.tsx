import { useEffect } from "react";
import { useLocation } from "react-router";
import { useGenreList } from "@/hooks/useGenres";
import { ChevronDown } from "lucide-react";
import {
  DropdownProvider,
  DropdownWrapper,
  DropdownMenu,
  DropdownItem,
  DropdownButton,
  DropdownContent,
  DropdownSubMenuTrigger,
} from "@/components/ui/dropdown";
import { useMovieStore } from "@/store/useMovieStore";
import { useTvStore } from "@/store/useTvStore";
import { useAppStore, GenreType } from "@/store/useAppStore";
import { usePathname } from "@/hooks/usePathname";

type GenreKeys = "movies" | "series";

export const GenreFilter = () => {
  const location = useLocation();
  const pathname = usePathname("movies", "series") || "both";
  const setMovieGenre = useMovieStore((state) => state.setGenre);
  const setTvGenre = useTvStore((state) => state.setGenre);
  const setGenreSelect = useAppStore((state) => state.setGenreSelect);
  const movieGenre = useMovieStore((state) => state.genre);
  const tvGenre = useTvStore((state) => state.genre);
  const matchGenre = {
    movies: {
      handleSelect: setMovieGenre,
      isActive: (id: number) => id === movieGenre.id,
      fetchType: "movie",
    },
    series: {
      handleSelect: setTvGenre,
      isActive: (id: number) => id === tvGenre.id,
      fetchType: "tv",
    },
  };

  console.log({ pathname });
  const handleSelect = (id: number) => () => {
    if (!pathname) return;
    matchGenre[pathname as GenreKeys].handleSelect(id);
  };

  const { data } = useGenreList();
  const { data: movie } = useGenreList({ type: "movie" });
  const { data: tv } = useGenreList({ type: "tv" });

  useEffect(() => {
    if (!pathname) return;
    if (pathname !== "both")
      setGenreSelect(matchGenre[pathname as GenreKeys].fetchType as GenreType);
  }, [location]);

  if (pathname === "both")
    return (
      <DropdownProvider>
        <DropdownWrapper>
          <DropdownMenu>
            <DropdownItem>
              <DropdownButton className="py-2 cursor-pointer flex items-center bg-neutral-800 text-white rounded-3xl text-sm px-4 hover:bg-neutral-800/80 transition-colors duration-500">
                <span>Genre</span>
                <ChevronDown className="ml-1.5" />
              </DropdownButton>
            </DropdownItem>
            <DropdownContent header={<h4>Choose a movie genre</h4>}>
              <DropdownWrapper>
                <DropdownMenu>
                  <DropdownItem>
                    <DropdownSubMenuTrigger
                      isActive={matchGenre["movies"].isActive(0)}
                      onSelect={() => setMovieGenre(0)}
                    >
                      All
                    </DropdownSubMenuTrigger>
                  </DropdownItem>
                  {movie.genres.map((genre) => (
                    <DropdownItem key={genre.id}>
                      <DropdownSubMenuTrigger
                        isActive={matchGenre["movies"].isActive(genre.id)}
                        onSelect={() => setMovieGenre(genre.id)}
                      >
                        {genre.name}
                      </DropdownSubMenuTrigger>
                    </DropdownItem>
                  ))}
                </DropdownMenu>
              </DropdownWrapper>
            </DropdownContent>
          </DropdownMenu>
        </DropdownWrapper>
      </DropdownProvider>
    );
  return (
    <DropdownProvider>
      <DropdownWrapper>
        <DropdownMenu>
          <DropdownItem>
            <DropdownButton className="py-2 cursor-pointer flex items-center bg-neutral-800 text-white rounded-3xl text-sm px-4 hover:bg-neutral-800/80 transition-colors duration-500">
              <span>Genre</span>
              <ChevronDown className="ml-1.5" />
            </DropdownButton>
          </DropdownItem>
          <DropdownContent header={<h4>Choose an option</h4>}>
            <DropdownWrapper>
              <DropdownMenu>
                <DropdownItem>
                  <DropdownSubMenuTrigger
                    isActive={matchGenre?.[pathname as GenreKeys]?.isActive(0)}
                    onSelect={handleSelect(0)}
                  >
                    All
                  </DropdownSubMenuTrigger>
                </DropdownItem>
                {data.genres.map((genre) => (
                  <DropdownItem key={genre.id}>
                    <DropdownSubMenuTrigger
                      isActive={matchGenre?.[pathname as GenreKeys]?.isActive(
                        genre.id
                      )}
                      onSelect={handleSelect(genre.id)}
                    >
                      {genre.name}
                    </DropdownSubMenuTrigger>
                  </DropdownItem>
                ))}
              </DropdownMenu>
            </DropdownWrapper>
          </DropdownContent>
        </DropdownMenu>
      </DropdownWrapper>
    </DropdownProvider>
  );
};
