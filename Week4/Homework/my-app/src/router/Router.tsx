import { createBrowserRouter, Navigate } from "react-router";
import { Login } from "@pages/Login/Login";
import { SignUp } from "@pages/SignUp/SignUp";
import { MyPage } from "@/pages/MyPage/MyPage";
import { MyInfo } from "@/pages/MyInfo/MyInfo";
import { MemberView } from "@/pages/MemberView/MemberView";
import { MemberDetail } from "@/pages/MemberView/MemberDetail/MemberDetail";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/login" replace />,
  },
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
    children: [
      { path: "myinfo", Component: MyInfo },
      { path: "members", Component: MemberView },
      { path: "members/:id", Component: MemberDetail },
    ],
  },
]);
