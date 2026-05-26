export const queryKeys = {
  movies: ["movies"] as const,
  movieDetail: (id: number) => ["movies", id] as const,
};
