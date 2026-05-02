// Router.jsx

import { createBrowserRouter } from "react-router";
import MemberDetail from "../pages/MemberDetail";
import Home from "../pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
  },
  {
    path: "/users/:id",
    Component: MemberDetail,
  },
]);

export default router;
