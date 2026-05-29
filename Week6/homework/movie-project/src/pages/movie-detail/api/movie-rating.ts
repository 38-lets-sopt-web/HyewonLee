import api from "@/shared/api/instance";
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

interface GuestSessionResponse {
  success: boolean;
  guest_session_id: string;
  expires_at: string;
}

export const GUEST_SESSION_QUERY_KEY = ["guestSession"] as const;

// 게스트 세션 발급
export const getGuestSession = async (): Promise<GuestSessionResponse> => {
  const { data } = await api.get("/authentication/guest_session/new");
  return data;
};

export const getGuestSessionWithCache = async (): Promise<GuestSessionResponse> => {
  const stored = localStorage.getItem("guestSessionId");
  if (stored) return { guest_session_id: stored, success: true, expires_at: "" };

  const data = await getGuestSession();
  localStorage.setItem("guestSessionId", data.guest_session_id);
  return data;
};

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
      headers: { "Content-Type": "application/json;charset=utf-8" },
    },
  );
  return data;
};

// 별점을 매긴 영화 리스트 조회
export const getRatedMovies = async (guestSessionId: string): Promise<RatedMoviesResponse> => {
  try {
    const { data } = await api.get(`/guest_session/${guestSessionId}/rated/movies`);
    return data;
  } catch {
    return { page: 1, results: [], total_pages: 0, total_results: 0 };
  }
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
