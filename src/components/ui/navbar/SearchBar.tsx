import { ChangeEvent, useEffect } from "react";
import { useSearchParams } from "react-router";
import { BiSearch } from "react-icons/bi";
import { useAppStore } from "@/store/useAppStore";
import { useCancellationSearch } from "@/hooks/useCancellationSearch";

const SearchBar = () => {
  const { searchController } = useCancellationSearch();
  const [, setSearchParams] = useSearchParams();
  const setQuerySearch = useAppStore((state) => state.setQuerySearch);
  const querySearch = useAppStore((state) => state.query.search);

  // Cleanup peding search's or tv's request
  useEffect(() => {
    return () => {
      if (searchController.current) {
        searchController.current.abort();
      }
    };
  }, []);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setQuerySearch(event.target.value.trimStart());

    if (searchController.current) {
      searchController.current.abort();
    }
    const controller = new AbortController();
    searchController.current = controller;
  };
  return (
    <form
      onSubmit={(event) => event.preventDefault()}
      className="bg-neutral-700/50 border border-transparent rounded-md overflow-hidden min-w-8 h-8 max-md:hidden flex items-center has-focus:border-indigo-700"
    >
      <input
        className="outline-none transition-all duration-500 px-4 max-w-44 placeholder:text-sm"
        placeholder="Search your movies..."
        value={querySearch}
        onChange={handleChange}
      />
      <button className="cursor-pointer self-stretch bg-indigo-700 hover:bg-indigo-600/80 transition-colors duration-500 px-2">
        <BiSearch />
      </button>
    </form>
  );
};

export default SearchBar;
