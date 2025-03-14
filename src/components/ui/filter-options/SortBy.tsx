import {
  ArrowUpDown,
  ChevronRight,
  ArrowDownAZ,
  ArrowDownAz,
} from "lucide-react";
import {
  DropdownClose,
  DropdownProvider,
  DropdownContent,
  DropdownTrigger,
  DropdownContainer,
  DropdownSubMenu,
  DropdownSubMenuContent,
  DropdownSubMenuTrigger,
} from "@/components/ui/dropdown";
import { useMovieStore } from "@/store/useMovieStore";

const SortBy = () => {
  const sortBy = useMovieStore((state) => state.movie.queryParams.sortBy);
  const setSortOptions = useMovieStore((state) => state.setSortOptions);
  return (
    <DropdownProvider>
      <DropdownContainer>
        <DropdownClose className="py-2 cursor-pointer flex items-center bg-neutral-800 text-white rounded-3xl text-sm px-4 hover:bg-neutral-800/80 transition-colors duration-500">
          <span>Sort by</span>
          <ArrowUpDown className="w-4 ml-2" />
        </DropdownClose>
        <DropdownContent header={<h4>Choose an option</h4>}>
          <DropdownSubMenu>
            <DropdownTrigger>
              <span>Title</span>
              <ChevronRight />
              <DropdownSubMenuContent>
                <DropdownSubMenuTrigger
                  onSelect={() =>
                    setSortOptions({
                      title: "asc",
                    })
                  }
                  isActive={sortBy.title === "asc"}
                >
                  <span>Ascending</span>
                  <ArrowDownAZ />
                </DropdownSubMenuTrigger>
                <DropdownSubMenuTrigger
                  onSelect={() =>
                    setSortOptions({
                      title: "desc",
                    })
                  }
                  isActive={sortBy.title === "desc"}
                >
                  <span>Descending</span>
                  <ArrowDownAz />
                </DropdownSubMenuTrigger>
              </DropdownSubMenuContent>
            </DropdownTrigger>
          </DropdownSubMenu>
          <DropdownSubMenu>
            <DropdownTrigger>
              <span>Votes</span>
              <ChevronRight />
              <DropdownSubMenuContent>
                <DropdownSubMenuTrigger
                  onSelect={() =>
                    setSortOptions({
                      vote_average: "asc",
                    })
                  }
                  isActive={sortBy.vote_average === "asc"}
                >
                  <span>Ascending</span>
                  <ArrowDownAZ />
                </DropdownSubMenuTrigger>
                <DropdownSubMenuTrigger
                  onSelect={() =>
                    setSortOptions({
                      vote_average: "desc",
                    })
                  }
                  isActive={sortBy.vote_average === "desc"}
                >
                  <span>Descending</span>
                  <ArrowDownAz />
                </DropdownSubMenuTrigger>
              </DropdownSubMenuContent>
            </DropdownTrigger>
          </DropdownSubMenu>
          <DropdownSubMenu>
            <DropdownTrigger>
              <span>Popularity</span>
              <ChevronRight />
              <DropdownSubMenuContent>
                <DropdownSubMenuTrigger
                  onSelect={() =>
                    setSortOptions({
                      popularity: "asc",
                    })
                  }
                  isActive={sortBy.popularity === "asc"}
                >
                  <span>Ascending</span>
                  <ArrowDownAZ />
                </DropdownSubMenuTrigger>
                <DropdownSubMenuTrigger
                  onSelect={() =>
                    setSortOptions({
                      popularity: "desc",
                    })
                  }
                  isActive={sortBy.popularity === "desc"}
                >
                  <span>Descending</span>
                  <ArrowDownAz />
                </DropdownSubMenuTrigger>
              </DropdownSubMenuContent>
            </DropdownTrigger>
          </DropdownSubMenu>
        </DropdownContent>
      </DropdownContainer>
    </DropdownProvider>
  );
};

export default SortBy;
