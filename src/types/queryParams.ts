export type SortType = "asc" | "desc";

export interface SortQuery {
  type: string;
  mode: SortType;
}

export interface QueryParams<T = {}> {
  sortBy: T;
  [key: string]: T;
}
