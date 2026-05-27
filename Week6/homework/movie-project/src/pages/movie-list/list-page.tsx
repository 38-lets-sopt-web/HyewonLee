import { useQuery } from "@tanstack/react-query";
import { getMovies } from "@/pages/movie-list/api/movie-list";
import { queryKeys } from "@/api/query-keys";
import MovieCard from "@/pages/movie-list/components/movie-card";
import FilterDropdown from "./components/filter-dropdown";

const ListPage = () => {
  const { data } = useQuery({
    queryKey: queryKeys.movies,
    queryFn: () => getMovies(),
  });
  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between items-center">
        <h3 className="text-red text-heading">🇲 🇴 🇻 🇮 🇪 &nbsp; 🇪 🇽 🇵 🇱 🇴 🇷 🇪 🇷</h3>
        <FilterDropdown />
      </div>
      <div className="grid grid-cols-4 gap-y-4">
        {data?.results.map((movie) => (
          <MovieCard
            key={movie.id}
            poster_path={movie.poster_path}
            title={movie.title}
            release_date={movie.release_date}
            overview={movie.overview}
            vote_average={movie.vote_average}
          />
        ))}
      </div>
    </div>
  );
};

export default ListPage;
