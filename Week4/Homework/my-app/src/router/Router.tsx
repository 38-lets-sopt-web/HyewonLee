import { createBrowserRouter } from "react-router";
import { Login } from "@pages/Login/Login";
import { SignUp } from "@pages/SignUp/SignUp";
import { MyPage } from "@/pages/MyPage/MyPage";

export const router = createBrowserRouter([
  {
    path: "/login",
    Component: Login,
  },
  {
    path: "/signup",
    Component: SignUp,
  },
  {
    path: "/mypage",
    Component: MyPage,
  },
]);
