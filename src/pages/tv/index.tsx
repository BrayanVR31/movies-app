import { lazy, Suspense } from "react";
import { GridTitle } from "@/components/ui/grid";
import { withDelay } from "@/utils/promiseDelay";

const TvList = lazy(() => withDelay(import("./TvList")));

const Home = () => {
  return (
    <div>
      <GridTitle>Series</GridTitle>
      <Suspense>
        <TvList />
      </Suspense>
    </div>
  );
};

export default Home;
