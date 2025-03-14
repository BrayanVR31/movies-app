import { SkeletonMovieCard } from "../movie-card";

interface SkeletonMovieListProps {
  totalCards: number;
}

export const SkeletonMovieList = ({
  totalCards = 8,
}: SkeletonMovieListProps) => {
  console.log("skeleton movie list rendering...");
  return (
    <div className="grid grid-cols-[repeat(auto-fit,_190px)] justify-between gap-x-4 gap-y-4 text-white">
      {Array(totalCards)
        .fill(null)
        .map((_, index) => (
          <SkeletonMovieCard key={index} />
        ))}
      <SkeletonMovieCard />
    </div>
  );
};
