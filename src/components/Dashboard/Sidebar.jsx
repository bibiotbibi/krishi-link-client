import React from "react";
import { Link, useLocation } from "react-router";

const Sidebar = () => {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <div className="fixed flex flex-col bg-secondary shadow-lg w-64 p-1 min-h-screen">
      {/* <h2 className="text-2xl font-bold mb-6 text-white">Dashboard</h2> */}
      <Link to="/" className="ml-5 font-bold text-2xl text-primary my-5"><img className="w-10 h-10   " src="https://i.ibb.co.com/B5wVXjJR/Logo-design-ideas-to-explore-on-Instagram-for-fresh-inspiration-removebg-preview-1.png" alt="" />Krishi Link</Link>

      {/* User-only links */}
      <Link
        to="/dashboardlayout/dashboard"
        className={`p-3 rounded mb-2 text-gray-700 hover:bg-gray-200 ${
          isActive("/dashboardlayout/dashboard") ? "bg-primary text-white" : ""
        }`}
      >
       Dashboard Home
      </Link>

      <Link
        to="/dashboardlayout/profile"
        className={`p-3 rounded mb-2 text-gray-700 hover:bg-gray-200 ${
          isActive("/dashboardlayout/profile") ? "bg-primary text-white" : ""
        }`}
      >
        Profile
      </Link>

      <Link
        to="/dashboardlayout/myinterests"
        className={`p-3 rounded mb-2 text-gray-700 hover:bg-gray-200 ${
          isActive("/dashboardlayout/myinterests") ? "bg-primary text-white" : ""
        }`}
      >
        My Orders
      </Link>

      <Link
        to="/dashboardlayout/myposts"
        className={`p-3 rounded mb-2 text-gray-700 hover:bg-gray-200 ${
          isActive("/dashboardlayout/myposts") ? "bg-primary text-white" : ""
        }`}
      >
        My Crops
      </Link>
    </div>
  );
};

export default Sidebar;
