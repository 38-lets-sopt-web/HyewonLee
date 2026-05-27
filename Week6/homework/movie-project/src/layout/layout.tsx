import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="bg-bg min-h-screen">
      <div className="max-w-7xl mx-auto px-35 pt-5">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
