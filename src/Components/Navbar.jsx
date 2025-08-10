import React, { use } from "react";
import { NavLink } from "react-router";
import { GrCloudComputer } from "react-icons/gr";
import { AuthContext } from "../Context/AuthContext";
import Image from "../assets/user.png";

const Navbar = () => {
  const { user, SignOutUser } = use(AuthContext);

  const handleSignOut = () => {
    SignOutUser()
      .then((result) => console.log(result))
      .catch((error) => console.log(error));
  };

  const links = (
    <>
      <NavLink
        to="/"
        className={({ isActive }) =>
          `px-4 py-2 rounded-md transition-colors duration-300 ${
            isActive ? "bg-indigo-600 text-white" : "text-gray-300 hover:bg-indigo-500 hover:text-white"
          }`
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/allServices"
        className={({ isActive }) =>
          `ml-2 px-4 py-2 rounded-md transition-colors duration-300 ${
            isActive ? "bg-indigo-600 text-white" : "text-gray-300 hover:bg-indigo-500 hover:text-white"
          }`
        }
      >
        All Services
      </NavLink>
      <NavLink
        to="/contactus"
        className={({ isActive }) =>
          `ml-2 px-4 py-2 rounded-md transition-colors duration-300 ${
            isActive ? "bg-indigo-600 text-white" : "text-gray-300 hover:bg-indigo-500 hover:text-white"
          }`
        }
      >
        Contact Us
      </NavLink>
      {user && (
        <>
          <NavLink
            to="/addServices"
            className={({ isActive }) =>
              `ml-2 px-4 py-2 rounded-md transition-colors duration-300 ${
                isActive ? "bg-indigo-600 text-white" : "text-gray-300 hover:bg-indigo-500 hover:text-white"
              }`
            }
          >
            Add Services
          </NavLink>
          <NavLink
            to="/postedServices"
            className={({ isActive }) =>
              `ml-2 px-4 py-2 rounded-md transition-colors duration-300 ${
                isActive ? "bg-indigo-600 text-white" : "text-gray-300 hover:bg-indigo-500 hover:text-white"
              }`
            }
          >
            My Services
          </NavLink>
          <NavLink
            to="/myReviews"
            className={({ isActive }) =>
              `ml-2 px-4 py-2 rounded-md transition-colors duration-300 ${
                isActive ? "bg-indigo-600 text-white" : "text-gray-300 hover:bg-indigo-500 hover:text-white"
              }`
            }
          >
            My Reviews
          </NavLink>
        </>
      )}
    </>
  );

  return (
    <nav className="sticky top-0 z-50 bg-gray-900 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo and Brand */}
        <NavLink to="/" className="flex items-center gap-3 text-indigo-400 hover:text-indigo-500 transition">
          <GrCloudComputer size={36} />
          <h1 className="text-2xl font-bold font-serif">UserEcho</h1>
        </NavLink>

        {/* Desktop Menu */}
        <div className="hidden lg:flex space-x-2">{links}</div>

        {/* User Profile and Auth Buttons */}
        <div className="flex items-center gap-4">
          <img
            src={user?.photoURL || Image}
            alt="User Avatar"
            className="w-10 h-10 rounded-full border-2 border-indigo-500 object-cover"
          />
          {user ? (
            <button
              onClick={handleSignOut}
              className="px-4 py-2 bg-indigo-600 rounded-md text-white hover:bg-indigo-700 transition"
            >
              Logout
            </button>
          ) : (
            <>
              <NavLink
                to="/login"
                className="px-4 py-2 text-indigo-400 border border-indigo-400 rounded-md hover:bg-indigo-600 hover:text-white transition"
              >
                Login
              </NavLink>
              <NavLink
                to="/register"
                className="px-4 py-2 bg-indigo-600 rounded-md text-white hover:bg-indigo-700 transition"
              >
                Register
              </NavLink>
            </>
          )}
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <details className="relative">
            <summary className="list-none cursor-pointer px-3 py-2 rounded-md text-gray-300 hover:bg-indigo-600 hover:text-white">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </summary>
            <ul className="absolute right-0 mt-2 w-48 bg-gray-800 rounded-md shadow-lg py-2 text-gray-300 flex flex-col space-y-2">
              {links}
            </ul>
          </details>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
