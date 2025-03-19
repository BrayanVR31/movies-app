import { Movie } from "@/types/movie";
import { SortOrder, SortBy } from "@/store/useAppStore";

export const sortMoviesByTitle = (list: Movie[], order: SortOrder = "asc") => {
  return list.sort((a, b) => {
    const firstCodeLetter = a.title.charCodeAt(0);
    const secondCodeLetter = b.title.charCodeAt(0);
    if (order === "asc") {
      if (firstCodeLetter === secondCodeLetter) return 0;
      if (firstCodeLetter < secondCodeLetter) return -1;
      return 1;
    } else if (order === "desc") {
      if (firstCodeLetter === secondCodeLetter) return 0;
      if (firstCodeLetter > secondCodeLetter) return -1;
      return 1;
    }
    return 0;
  });
};

const sortByVotes = (list: Movie[], order: SortOrder = "asc") => {
  return list.sort((a, b) => {
    if (order === "asc") {
      if (a.vote_average === b.vote_average) return 0;
      if (a.vote_average < b.vote_average) return -1;
      return 1;
    } else if (order === "desc") {
      if (a.vote_average === b.vote_average) return 0;
      if (a.vote_average > b.vote_average) return -1;
      return 1;
    }
    return 0;
  });
};

const sortByPopularity = (list: Movie[], order: SortOrder = "asc") => {
  return list.sort((a, b) => {
    if (order === "asc") {
      if (a.popularity === b.popularity) return 0;
      if (a.popularity < b.popularity) return -1;
      return 1;
    } else if (order === "desc") {
      if (a.popularity === b.popularity) return 0;
      if (a.popularity > b.popularity) return -1;
      return 1;
    }
    return 0;
  });
};

export const sortMovies = (
  list: Movie[],
  [key, order]: [key: SortBy, order: SortOrder]
) => {
  if (key === "title") return sortMoviesByTitle(list, order);
  else if (key === "vote_average") return sortByVotes(list, order);
  else if (key === "popularity") return sortByPopularity(list, order);
  return list;
};

export const filterByGenre = (list: Movie[], genre: number) => {
  if (genre === 0) return list;
  return list.filter((movie) => movie.genre_ids.includes(genre));
};
