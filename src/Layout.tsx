import { lazy, Suspense, useDeferredValue } from "react";
import { Outlet, useSearchParams } from "react-router";
import { Navbar } from "@/components/ui/navbar";
import { ModalProvider } from "@/hooks/useModal";
import { FilterOptions } from "@/components/ui/filter-options";
import { useSuspenseSearch } from "@/hooks/useSearch";
import { withDelay } from "@/utils/promiseDelay";
import { useAppStore } from "@/store/useAppStore";
import ErrorBoundary from "./components/ui/ErrorBoundary";
import { CancellationSearchProvider } from "@/hooks/useCancellationSearch";

const MovieSearch = lazy(() =>
  new Promise((resolve) => setTimeout(resolve, 1_390)).then(
    () => import("@/components/ui/movie-search")
  )
);

const SearchResults = lazy(() =>
  withDelay(import("@/components/ui/search-results"), 1_755)
);

const Layout = () => {
  const searchQuery = useAppStore((state) => state.query.search);
  const deferredSearchQuery = useDeferredValue(searchQuery);
  const staledQuery = searchQuery !== deferredSearchQuery;
  // const [searchParams] = useSearchParams();
  // const searchQuery = Object.fromEntries([...searchParams]);
  // const deferredSearchQuery = useDeferredValue(searchQuery.movie);
  return (
    <CancellationSearchProvider>
      <ModalProvider>
        <div className="min-h-screen bg-neutral-950">
          <div className="bg-neutral-900 text-gray-300 sticky top-0 left-0 z-[51]">
            <div className="max-w-nav mx-auto">
              <Navbar />
            </div>
          </div>
          <div className="max-w-nav mx-auto min-h-app-y mb-8">
            <div className="mt-8 mb-4">
              <FilterOptions />
            </div>
            {searchQuery ? (
              <ErrorBoundary
                fallback={
                  <div className="text-red-300/70">Error to search results</div>
                }
              >
                <Suspense
                  fallback={
                    <div className="flex gap-x-2 animate-bounce">
                      <div className="w-2 aspect-square  rounded-full bg-neutral-500" />
                      <div className="w-2 aspect-square  rounded-full bg-neutral-500" />
                      <div className="w-2 aspect-square  rounded-full bg-neutral-500" />
                    </div>
                  }
                >
                  {/* <MovieSearch query={deferredSearchQuery} /> */}
                  <SearchResults searchQuery={deferredSearchQuery} />
                </Suspense>
              </ErrorBoundary>
            ) : (
              <Outlet />
            )}
          </div>
        </div>
      </ModalProvider>
    </CancellationSearchProvider>
  );
};

export default Layout;
