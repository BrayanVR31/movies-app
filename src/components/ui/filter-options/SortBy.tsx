import {
  ArrowUpDown,
  ChevronRight,
  ArrowDownAZ,
  ArrowDownAz,
} from "lucide-react";
import {
  DropdownButton,
  DropdownProvider,
  DropdownContent,
  DropdownTrigger,
  DropdownSubMenuTrigger,
  DropdownWrapper,
  DropdownMenu,
  DropdownItem,
} from "@/components/ui/dropdown";
import { useAppStore } from "@/store/useAppStore";

const SortBy = () => {
  const completeSort = useAppStore((state) => state.query.sort).join(".");
  const genreSelect = useAppStore((state) => state.genreSelect);
  console.log({ completeSort, genreSelect });
  const setQuerySort = useAppStore((state) => state.setQuerySort);
  return (
    <DropdownProvider>
      <DropdownWrapper>
        <DropdownMenu>
          {/** SortBy button */}
          <DropdownItem>
            <DropdownButton className="py-2 cursor-pointer flex items-center bg-neutral-800 text-white rounded-3xl text-sm px-4 hover:bg-neutral-800/80 transition-colors duration-500">
              <span>Sort by</span>
              <ArrowUpDown className="w-4 ml-2" />
            </DropdownButton>
          </DropdownItem>
          {/** SortBy dropdown list */}
          <DropdownContent header={<h4>Choose an option</h4>}>
            {/** title */}
            <DropdownItem>
              <DropdownTrigger withIcon>
                <span>Title</span>
                <ChevronRight />
              </DropdownTrigger>
              {/** subMenu */}
              <DropdownWrapper isSubMenu>
                <DropdownMenu>
                  <DropdownItem>
                    <DropdownSubMenuTrigger
                      onSelect={() =>
                        setQuerySort(
                          genreSelect === "movie" ? "title" : "name",
                          "asc"
                        )
                      }
                      isActive={
                        completeSort === "title.asc" ||
                        completeSort === "name.asc"
                      }
                    >
                      <span>Ascending</span>
                      <ArrowDownAZ />
                    </DropdownSubMenuTrigger>
                  </DropdownItem>
                  <DropdownItem>
                    <DropdownSubMenuTrigger
                      onSelect={() =>
                        setQuerySort(
                          genreSelect === "movie" ? "title" : "name",
                          "desc"
                        )
                      }
                      isActive={
                        completeSort === "title.desc" ||
                        completeSort === "name.desc"
                      }
                    >
                      <span>Descending</span>
                      <ArrowDownAz />
                    </DropdownSubMenuTrigger>
                  </DropdownItem>
                </DropdownMenu>
              </DropdownWrapper>
            </DropdownItem>
            {/** votes */}
            <DropdownItem>
              <DropdownTrigger withIcon>
                <span>Votes</span>
                <ChevronRight />
              </DropdownTrigger>
              {/** subMenu */}
              <DropdownWrapper isSubMenu>
                <DropdownMenu>
                  <DropdownItem>
                    <DropdownSubMenuTrigger
                      onSelect={() => setQuerySort("vote_average", "asc")}
                      isActive={completeSort === "vote_average.asc"}
                    >
                      <span>Ascending</span>
                      <ArrowDownAZ />
                    </DropdownSubMenuTrigger>
                  </DropdownItem>
                  <DropdownItem>
                    <DropdownSubMenuTrigger
                      onSelect={() => setQuerySort("vote_average", "desc")}
                      isActive={completeSort === "vote_average.desc"}
                    >
                      <span>Descending</span>
                      <ArrowDownAz />
                    </DropdownSubMenuTrigger>
                  </DropdownItem>
                </DropdownMenu>
              </DropdownWrapper>
            </DropdownItem>
            {/** popularity */}
            <DropdownItem>
              <DropdownTrigger withIcon>
                <span>Popularity</span>
                <ChevronRight />
              </DropdownTrigger>
              {/** subMenu */}
              <DropdownWrapper isSubMenu>
                <DropdownMenu>
                  <DropdownItem>
                    <DropdownSubMenuTrigger
                      onSelect={() => setQuerySort("popularity", "asc")}
                      isActive={completeSort === "popularity.asc"}
                    >
                      <span>Ascending</span>
                      <ArrowDownAZ />
                    </DropdownSubMenuTrigger>
                  </DropdownItem>
                  <DropdownItem>
                    <DropdownSubMenuTrigger
                      onSelect={() => setQuerySort("popularity", "desc")}
                      isActive={completeSort === "popularity.desc"}
                    >
                      <span>Descending</span>
                      <ArrowDownAz />
                    </DropdownSubMenuTrigger>
                  </DropdownItem>
                </DropdownMenu>
              </DropdownWrapper>
            </DropdownItem>
          </DropdownContent>
        </DropdownMenu>
      </DropdownWrapper>
    </DropdownProvider>
  );
};

export default SortBy;
