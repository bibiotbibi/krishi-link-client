import React, { useState, useContext } from "react";
import { Outlet, useNavigate } from "react-router";
import Sidebar from "../components/Dashboard/Sidebar";
import { AuthContext } from "../contexts/AuthContext";
// import { AuthContext } from "../";

// Optional ProfileDropdown component
const ProfileDropdown = () => {
  const [open, setOpen] = useState(false);
  const { user, signOutUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOutUser();
      navigate("/login");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 focus:outline-none"
      >
        <img
          src={ "https://i.ibb.co.com/vxWpWMqY/profile.jpg"}
          alt="avatar"
          className="w-8 h-8 rounded-full border border-gray-300"
        />
        <span className="text-gray-700 font-medium">{user?.displayName || "User"}</span>
        <svg
          className={`w-4 h-4 transition-transform ${open ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {open && (
        <div className="sticky right-0 mt-2 w-48 bg-white shadow-lg rounded-lg py-2 z-50">
          <button
            onClick={() => navigate("/dashboardlayout/profile")}
            className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
          >
            Profile
          </button>
          <button
            onClick={() => navigate("/")}
            className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
          >
            Home
          </button>
          <button
            onClick={handleLogout}
            className="block w-full text-left px-4 py-2 text-red-600 hover:bg-gray-100"
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

const DashboardLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Mobile overlay */}
      <div
        className={`fixed inset-0 bg-black/50 z-40 transition-opacity lg:hidden ${
          isSidebarOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setIsSidebarOpen(false)}
      ></div>

      {/* Sidebar */}
      <aside
        className={`fixed z-50 top-0 left-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300
        ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0`}
      >
        <Sidebar />
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col lg:ml-64">
        {/* Top Navbar */}
        <nav className="flex items-center justify-between p-4 bg-white shadow-md">
          <div className="flex items-center gap-4">
            {/* Mobile toggle */}
            <button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="text-gray-700 focus:outline-none lg:hidden"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            <h1 className="text-2xl font-bold text-gray-700">Dashboard</h1>
          </div>

          {/* Profile Dropdown */}
          <ProfileDropdown />
        </nav>

        {/* Nested routes */}
        <div className="p-6 flex-1 overflow-auto">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default DashboardLayout;
