import { FormEvent } from "react";
import { BiSearch } from "react-icons/bi";
import { useMovieStore } from "@/store/useMovieStore";

const SearchBar = () => {
  const setKeyword = useMovieStore((state) => state.setKeyword);
  const keyword = useMovieStore((state) => state.movie.details.keyword);
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(keyword);
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="bg-neutral-700/50 border border-transparent rounded-md overflow-hidden min-w-8 h-8 max-md:hidden flex items-center has-focus:border-indigo-700"
    >
      <input
        className="outline-none transition-all duration-500 px-4 max-w-44 placeholder:text-sm"
        placeholder="Search your movies..."
        value={keyword}
        onChange={(event) => setKeyword(event.target.value)}
      />
      <button className="cursor-pointer self-stretch bg-indigo-700 hover:bg-indigo-600/80 transition-colors duration-500 px-2">
        <BiSearch />
      </button>
    </form>
  );
};

export default SearchBar;
