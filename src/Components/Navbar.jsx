import React, { use } from "react";
import { NavLink } from "react-router";
import { GrCloudComputer } from "react-icons/gr";
import { AuthContext } from "../Context/AuthContext";
import Image from "../assets/user.png";
import { signOut } from "firebase/auth";

const Navbar = () => {
  const { user, SignOutUser } = use(AuthContext);
  const handleSignOut = () => {
    SignOutUser()
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const links = (
    <>
      <NavLink to="/"> Home</NavLink>
      <NavLink to='/allServices' className='ml-2'>All Services</NavLink>
      {
        user &&
        <>
        <NavLink to='/addServices' className='ml-2'>Add Services</NavLink>
        <NavLink to='/postedServices' className='ml-2'>My Services</NavLink>
        <NavLink to='/myReviews' className='ml-2'>My Reviews</NavLink>
        </>
      }
    </>
  );

  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <NavLink to="/">
            <div className="flex gap-3  items-center">
              <div>
                <GrCloudComputer size={40} />
              </div>
              <div>
                {" "}
                <h1 className="text-2xl font-semibold"> UserEcho</h1>
              </div>
            </div>
          </NavLink>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end">
          <div>
            <img src={user ? user.photoURL : Image} className="w-[40px] h-[40px]" />
          </div>
          {user ? (
            <button className="btn" onClick={handleSignOut}>
              Logout
            </button>
          ) : (
            <div>
              <NavLink to="/login" className="btn">
                {" "}
                Login
              </NavLink>
              <NavLink to="/register" className="btn">
                Register
              </NavLink>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
