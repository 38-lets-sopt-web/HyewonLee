import api from "@/api/instance";
import type { MovieDetail } from "@/pages/movie-detail/api/movie-detail";

interface RatingResponse {
  status_code: number;
  status_message: string;
  success: boolean;
}

interface RatedMovie extends MovieDetail {
  rating: number;
}

interface RatedMoviesResponse {
  page: number;
  results: RatedMovie[];
  total_pages: number;
  total_results: number;
}

// 영화 별점 매기기
export const postRating = async (
  movieId: number,
  guestSessionId: string,
  rating: number,
): Promise<RatingResponse> => {
  const { data } = await api.post(
    `/movie/${movieId}/rating`,
    { value: rating },
    {
      params: { guest_session_id: guestSessionId },
    },
  );
  return data;
};

// 별점을 매긴 영화 리스트 조회
export const getRatedMovies = async (guestSessionId: string): Promise<RatedMoviesResponse> => {
  const { data } = await api.get(`/guest_session/${guestSessionId}/rated/movies`);
  return data;
};

// 영화 별점 삭제
export const deleteRating = async (
  movieId: number,
  guestSessionId: string,
): Promise<RatingResponse> => {
  const { data } = await api.delete(`/movie/${movieId}/rating`, {
    params: { guest_session_id: guestSessionId },
  });
  return data;
};
