import { useQuery } from "@tanstack/react-query";
import { getMovies } from "./api/movie-list";
import { queryKeys } from "../../api/query-keys";
import MovieCard from "./components/movie-card";

const ListPage = () => {
  const { data } = useQuery({
    queryKey: queryKeys.movies,
    queryFn: () => getMovies(),
  });
  return (
    <div className="w-250 grid grid-cols-4 gap-y-4">
      {data?.results.map((movie) => (
        <MovieCard
          key={movie.id}
          poster_path={movie.poster_path}
          title={movie.title}
          release_date={movie.release_date}
          overview={movie.overview}
        />
      ))}
    </div>
  );
};

export default ListPage;
