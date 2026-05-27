import api from "@/api/instance";

interface Movie {
  id: number;
  poster_path: string;
  title: string;
  release_date: string;
  overview: string;
  vote_average: number;
}

interface MovieListResponse {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}

// 영화 목록
export const getMovies = async (page = 1): Promise<MovieListResponse> => {
  const { data } = await api.get("/discover/movie", { params: { page } });
  return data;
};
