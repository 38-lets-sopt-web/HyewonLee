export const queryKeys = {
  moviesInfinite: ["movies", "infinite"] as const,
  movieDetail: (id: number) => ["movies", id] as const,
};
