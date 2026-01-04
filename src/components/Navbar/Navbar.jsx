import React, { useContext } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../../contexts/AuthContext";
import { ChevronDown, User } from "lucide-react";

const Navbar = () => {
  const { user, signOutUser } = useContext(AuthContext);

  const handleSignOut = () => {
    signOutUser()
      .then(() => console.log("Signed out"))
      .catch((err) => console.log(err));
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "All Crops", path: "/allcrops" },
    { name: "About Us", path: "/about" },
  ];

  const authLinks = [
    { name: "Add Crops", path: "/addcrops" },
    { name: "My Posts", path: "/myposts" },
    { name: "My Interests", path: "/myinterests" },
    
  ];

  const linkClass = ({ isActive }) =>
    `px-3 py-2 rounded-full font-medium transition-colors duration-200 ${
      isActive
        ? "bg-secondary text-white"
        : "text-gray-700 hover:bg-secondary hover:text-white"
    }`;

  return (
    <>
      {/* Fixed Navbar */}
      <div className="fixed top-0 left-0 w-full z-50 bg-green-50 shadow-md">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-4 lg:px-8 py-3">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img
              src="https://i.ibb.co.com/B5wVXjJR/Logo-design-ideas-to-explore-on-Instagram-for-fresh-inspiration-removebg-preview-1.png"
              alt="Krishi Link"
              className="w-10 h-10"
            />
            <span className="text-xl font-bold text-primary">Krishi Link</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex gap-2 items-center">
            {navLinks.map((link) => (
              <NavLink key={link.name} to={link.path} className={linkClass}>
                {link.name}
              </NavLink>
            ))}

            {user &&
              authLinks.map((link) => (
                <NavLink key={link.name} to={link.path} className={linkClass}>
                  {link.name}
                </NavLink>
              ))}

            {/* Advanced Dropdown */}
            {user && (
              <div className="relative group">
                <button className="flex items-center gap-1 px-3 py-2 rounded-full font-medium text-gray-700 hover:bg-secondary hover:text-white transition">
                  <User className="w-5 h-5" /> Account
                  <ChevronDown className="w-4 h-4" />
                </button>
                <ul className="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-md opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all">
                  <li>
                    <NavLink
                      to="/dashboardlayout/dashboard"
                      className="block px-4 py-2 hover:bg-green-100"
                    >
                      Dashboard
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/profile"
                      className="block px-4 py-2 hover:bg-green-100"
                    >
                      Profile
                    </NavLink>
                  </li>
                  <li>
                    <button
                      onClick={handleSignOut}
                      className="w-full text-left px-4 py-2 hover:bg-green-100"
                    >
                      Log Out
                    </button>
                  </li>
                </ul>
              </div>
            )}

            {/* Logged-out buttons for desktop */}
            {!user && (
              <>
                <NavLink
                  to="/login"
                  className="bg-primary px-4 py-2 rounded-full text-white hover:bg-secondary transition"
                >
                  Login
                </NavLink>
              
              </>
            )}
          </div>

          {/* Mobile Menu */}
          <div className="lg:hidden dropdown">
            <label tabIndex={0} className="btn btn-ghost p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navLinks.map((link) => (
                <li key={link.name}>
                  <NavLink to={link.path} className={linkClass}>
                    {link.name}
                  </NavLink>
                </li>
              ))}

              {user &&
                authLinks.map((link) => (
                  <li key={link.name}>
                    <NavLink to={link.path} className={linkClass}>
                      {link.name}
                    </NavLink>
                  </li>
                ))}

              {user && (
                <>
                  <li>
                    <NavLink to="/dashboardlayout/dashboard" className={linkClass}>
                      Dashboard
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/profile" className={linkClass}>
                      Profile
                    </NavLink>
                  </li>
                  <li>
                    <button
                      onClick={handleSignOut}
                      className="w-full text-left px-3 py-2 rounded-md hover:bg-secondary"
                    >
                      Log Out
                    </button>
                  </li>
                </>
              )}

              {!user && (
                <>
                  <li>
                    <NavLink
                      to="/login"
                      className="bg-primary px-4 py-2 rounded-md text-white hover:bg-secondary transition"
                    >
                      Login
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/register"
                      className="bg-secondary px-4 py-2 rounded-md text-white hover:bg-primary transition"
                    >
                      Register
                    </NavLink>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </div>

      {/* Spacer */}
      <div className="pt-20"></div>
    </>
  );
};

export default Navbar;
