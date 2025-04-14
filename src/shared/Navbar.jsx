import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../context/authcontext/AuthContext";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleSignOut = () => {
    logOut()
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => console.log(error));
  };

  const links = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/jobs">Jobs</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
    </>
  );

  return (
    <div className="sticky top-0 z-50 w-full shadow-md bg-base-100">
      <div className="navbar max-w-7xl mx-auto px-4">
        {/* Left - Logo */}
        <div className="navbar-start">
          <div className="dropdown lg:hidden">
            <button tabIndex={0} className="btn btn-ghost">
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
            </button>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-200 rounded-box w-52"
            >
              {links}
            </ul>
          </div>
          <a
            className="btn btn-ghost text-xl text-[#00ffcc] animate-pulse"
            style={{
              textShadow: "0 0 5px #00ffcc, 0 0 10px #00ffcc, 0 0 20px #00ffcc",
            }}
          >
            chakriFinder
          </a>
        </div>

        {/* Center - Nav Links */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 space-x-1">{links}</ul>
        </div>

        {/* Right - Auth Buttons */}
        <div className="navbar-end space-x-2">
          {user ? (
            <button
              className="btn btn-outline-none btn-error btn-sm rounded text-white px-4"
              onClick={handleSignOut}
            >
              Logout
            </button>
          ) : (
            <>
              <Link to="/register" className="btn btn-outline btn-sm">
                Register
              </Link>
              <Link to="/signIn" className="btn btn-primary btn-sm">
                Sign In
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
