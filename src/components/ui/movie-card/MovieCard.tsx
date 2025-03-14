import { memo, lazy, Suspense } from "react";
import { LiaStarSolid } from "react-icons/lia";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { SkeletonMovieGenre } from "./MovieGenre";

const MovieGenre = lazy(() =>
  new Promise((resolve) => setTimeout(resolve, 4_000))
    .then(() => import("./MovieGenre"))
    .then((module) => ({
      default: module.MovieGenre,
    }))
);

interface Movie {
  id: number;
  image: string;
  title: string;
  categories: number[];
  voteAverage: number;
}

interface Props {
  movie: Movie;
}

const MovieCard = ({ movie }: Props) => {
  const handleClick = () => {};
  return (
    <div className="bg-neutral-600/65 flex flex-col rounded-md overflow-hidden">
      <div className="group h-64 w-full relative after:content-[''] after:absolute after:w-full after:bg-black after:top-0 after:left-0 after:h-full after:transition-all after:duration-300 overflow-hidden after:opacity-0 hover:after:opacity-85 hover:after:translate-y-0">
        <LazyLoadImage
          className="object-cover min-w-full h-full"
          effect="blur"
          wrapperProps={{
            style: { transitionDelay: "1s" },
          }}
          src={`https://image.tmdb.org/t/p/w500/${movie.image}`}
        />

        <button
          onClick={handleClick}
          className="group-hover:flex text-xs hidden absolute top-1/2  z-10 text-white border px-3 py-2 cursor-pointer -translate-y-1/2 left-1/2 -translate-x-1/2 hover:underline hover:underline-offset-2"
        >
          See more
        </button>
      </div>
      <div className="px-3 py-2 flex flex-1 justify-between ">
        <div className="flex flex-col justify-start">
          <h6 className="text-sm font-semibold text-white">{movie.title}</h6>
          <Suspense fallback={<SkeletonMovieGenre />}>
            <MovieGenre movieGenresIds={movie.categories} />
          </Suspense>
        </div>
        <div>
          <p className="text-xs inline-flex rounded-sm py-1 px-2 items-center gap-x-1">
            <LiaStarSolid className="text-amber-400" />
            <span className="text-gray-300">{movie.voteAverage}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export const SkeletonMovieCard = () => {
  return (
    <div className="animate-pulse">
      <div className="h-64 w-full bg-neutral-600" />
      <div className="h-3 w-1/2 mt-2 bg-neutral-600/90 rounded-sm" />
      <div className="h-3 w-full mt-2 bg-neutral-600/90 rounded-sm" />
    </div>
  );
};

export default memo(MovieCard);
