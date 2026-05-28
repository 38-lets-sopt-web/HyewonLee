import { useNavigate, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getMovieDetail } from "@/pages/movie-detail/api/movie-detail";
import MovieInfo from "./components/movie-info";
import MovieOverview from "./components/movie-overview";
import MovieBasic from "./components/movie-basic";
import MovieRating from "./components/movie-rating";

const DetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { data } = useQuery({
    queryKey: ["movie", Number(id)],
    queryFn: () => getMovieDetail(Number(id)),
  });

  if (!data) return null;

  return (
    <>
      <p onClick={() => navigate(-1)} className="text-white text-body-medium py-6">
        ← 목록으로 돌아가기
      </p>
      <div className="flex flex-col gap-4">
        <MovieInfo
          backdrop_path={data.backdrop_path}
          poster_path={data.poster_path}
          title={data.title}
          release_date={data.release_date}
          genres={data.genres}
          vote_average={data.vote_average}
          vote_count={data.vote_count}
          runtime={data.runtime}
          status={data.status}
        />
        <MovieOverview overview={data.overview} />
        <div className="flex gap-4">
          <MovieBasic
            original_title={data.original_title}
            original_language={data.original_language}
            origin_country={data.origin_country}
            spoken_languages={data.spoken_languages}
            budget={data.budget}
            revenue={data.revenue}
          />
          <MovieRating id={data.id} />
        </div>
      </div>
    </>
  );
};

export default DetailPage;
