import api from "./instance";

// 영화 목록
export const getMovies = async (page = 1) => {
  const { data } = await api.get("/discover/movie", { params: { page } });
  return data;
};

// 영화 상세 정보
export const getMovieDetail = async (movieId: number) => {
  const { data } = await api.get(`/movie/${movieId}`);
  return data;
};

// 게스트 세션 아이디 발급
export const getGuestSession = async () => {
  const { data } = await api.get("/authentication/guest_session/new");
  return data;
};

// 영화 별점 매기기
export const postRating = async (movieId: number, guestSessionId: string, rating: number) => {
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
export const getRatedMovies = async (guestSessionId: string) => {
  const { data } = await api.get(`/guest_session/${guestSessionId}/rated/movies`);
  return data;
};

// 영화 별점 삭제
export const deleteRating = async (movieId: number, guestSessionId: string) => {
  const { data } = await api.delete(`/movie/${movieId}/rating`, {
    params: { guest_session_id: guestSessionId },
  });
  return data;
};
