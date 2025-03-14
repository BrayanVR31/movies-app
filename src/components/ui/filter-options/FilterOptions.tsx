import { Suspense, lazy } from "react";
import SortBy from "./SortBy";

const GenreFilter = lazy(() =>
  import("./GenreFilter").then((module) => ({
    default: module.GenreFilter,
  }))
);

const FilterOptions = () => {
  return (
    <div className="flex justify-center gap-x-4">
      <Suspense fallback={<div>Loading...</div>}>
        <GenreFilter />
      </Suspense>
      <SortBy />
    </div>
  );
};

export { FilterOptions };
