import { memo } from "react";
import { Modal } from "@/components/ui/modal";
import { useSuspenseMovie } from "@/hooks/useMovies";
import { useModal, useMovieModal } from "@/hooks/useModal";
import { useMovieStore } from "@/store/useMovieStore";

interface Props {
  movieId?: number | null;
  showDialog?: boolean;
}

const MovieModal = ({ showDialog = false }: Props) => {
  const movieId = useMovieStore((state) => state.movie.details.selectedId);
  const { data: movie } = useSuspenseMovie(movieId!);
  const showModal = useMovieStore((state) => state.movie.showModal);
  useMovieModal();
  if (selectedId !== movieId) return null;
  console.log("movie modal");
  return (
    <Modal
      isOpen={showModal}
      header={<div className="min-h-6" />}
      onCloseModal={() => console.log("closing modal...")}
    >
      <div className="max-w-full h-72 rounded-lg overflow-hidden">
        <img
          className="min-w-full max-h-full object-cover"
          src={`https://image.tmdb.org/t/p/w780/${movie.backdrop_path}`}
        />
      </div>
      <div className="mt-8">
        <div>
          <h5 className="text-xl font-semibold text-white mb-2">
            {movie.title}
          </h5>
          <p className="text-neutral-400 flex gap-x-6 text-sm *:after:content-['/'] *:after:absolute *:after:-left-4 *:first-of-type:after:content-['']">
            {movie.genres.map((genre) => (
              <span className="relative" key={genre.id}>
                {genre.name}
              </span>
            ))}
          </p>
          <div className="mt-2">
            <p className="text-sm text-white">
              Language: {movie.original_language.toUpperCase()}
            </p>
          </div>
        </div>
        <div className="mt-6">
          <h6 className="font-semibold text-neutral-200 mb-3">Overview</h6>
          <p className="text-neutral-300 text-justify text-sm">
            {movie.overview}
          </p>
        </div>
      </div>
    </Modal>
  );
};

const MemoizedModal = memo(MovieModal);

export { MovieModal, MemoizedModal };
