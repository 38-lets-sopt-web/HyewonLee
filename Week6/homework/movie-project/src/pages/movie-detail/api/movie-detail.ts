import api from "@/api/instance";

// 영화 상세 정보
export const getMovieDetail = async (movieId: number) => {
  const { data } = await api.get(`/movie/${movieId}`);
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
