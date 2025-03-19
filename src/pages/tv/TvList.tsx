import { useTvSeries } from "@/hooks/useSeries";
import TvCard from "@/components/ui/movie-card";
import { GridContainer } from "@/components/ui/grid";

const TvList = () => {
  const { data: series } = useTvSeries({
    withSuspense: true,
  });
  return (
    <GridContainer>
      {series!.results.map((serie) => (
        <TvCard
          key={serie.id}
          movie={{
            id: serie.id,
            title: serie.name,
            image: serie.poster_path,
            categories: serie.genre_ids,
            voteAverage: serie.vote_average,
          }}
        />
      ))}
    </GridContainer>
  );
};

export default TvList;
