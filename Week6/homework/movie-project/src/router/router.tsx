import { createBrowserRouter } from "react-router-dom";
import { ROUTE_PATH } from "./path";
import ListPage from "@/pages/movie-list/list-page";

export const router = createBrowserRouter([
  {
    path: ROUTE_PATH.HOME,
    Component: ListPage,
  },
  {
    path: ROUTE_PATH.MOVIE_DETAIL,
    lazy: async () => {
      const { default: DetailPage } = await import("@/pages/movie-detail/detail-page");
      return { Component: DetailPage };
    },
  },
]);
