import api from "@/shared/api/instance";

export interface MovieDetail {
  id: number;
  title: string;
  original_title: string;
  original_language: string;
  overview: string;
  poster_path: string;
  backdrop_path: string;
  release_date: string;
  runtime: number;
  status: string;
  genres: { id: number; name: string }[];
  vote_average: number;
  vote_count: number;
  origin_country: string[];
  spoken_languages: { english_name: string; iso_639_1: string; name: string }[];
  budget: number;
  revenue: number;
}

// 영화 상세 정보
export const getMovieDetail = async (movieId: number): Promise<MovieDetail> => {
  const { data } = await api.get(`/movie/${movieId}`);
  return data;
};
