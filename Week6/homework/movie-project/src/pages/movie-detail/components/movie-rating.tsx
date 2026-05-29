import { useQuery } from "@tanstack/react-query";
import {
  getGuestSessionWithCache,
  getRatedMovies,
  GUEST_SESSION_QUERY_KEY,
} from "@/pages/movie-detail/api/movie-rating";
import MovieRatingForm from "./movie-rating-form";

interface MovieRatingProps {
  id: number;
}

const MovieRating = ({ id }: MovieRatingProps) => {
  const { data: sessionData } = useQuery({
    queryKey: GUEST_SESSION_QUERY_KEY,
    queryFn: getGuestSessionWithCache,
  });

  const guestSessionId = sessionData?.guest_session_id;

  const { data: ratedData } = useQuery({
    queryKey: ["ratedMovies", guestSessionId],
    queryFn: () => getRatedMovies(guestSessionId!),
    enabled: !!guestSessionId,
  });

  const currentRating = ratedData?.results.find((movie) => movie.id === id)?.rating;

  return (
    <MovieRatingForm
      id={id}
      currentRating={currentRating}
      guestSessionId={guestSessionId ?? ""}
    />
  );
};

export default MovieRating;
