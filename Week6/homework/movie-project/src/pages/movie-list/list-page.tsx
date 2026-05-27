import { useInfiniteQuery } from "@tanstack/react-query";
import { getMovies } from "@/pages/movie-list/api/movie-list";
import { queryKeys } from "@/api/query-keys";
import MovieCard from "@/pages/movie-list/components/movie-card";
import FilterDropdown from "./components/filter-dropdown";
import { useEffect, useRef } from "react";

const ListPage = () => {
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } = useInfiniteQuery({
    queryKey: queryKeys.moviesInfinite,
    queryFn: ({ pageParam }) => getMovies(pageParam),
    initialPageParam: 1,
    getNextPageParam: (lastPage) => {
      if (lastPage.page < lastPage.total_pages) return lastPage.page + 1;
      return undefined;
    },
  });

  const movies = data?.pages.flatMap((page) => page.results) ?? [];

  const observerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && hasNextPage && !isFetchingNextPage) fetchNextPage();
    });
    if (observerRef.current) observer.observe(observerRef.current);
    return () => observer.disconnect();
  }, [hasNextPage, fetchNextPage, isFetchingNextPage]);

  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between items-center">
        <h3 className="text-red text-heading">🇲 🇴 🇻 🇮 🇪 &nbsp; 🇪 🇽 🇵 🇱 🇴 🇷 🇪 🇷</h3>
        <FilterDropdown />
      </div>
      <div className="grid grid-cols-4 gap-y-4">
        {movies.map((movie) => (
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
      <div ref={observerRef} className="h-4" />
    </div>
  );
};

export default ListPage;
