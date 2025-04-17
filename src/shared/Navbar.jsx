import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../context/authcontext/AuthContext";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleSignOut = () => {
    logOut()
      .then((result) => console.log(result.user))
      .catch((error) => console.log(error));
  };

  const navLinks = (
    <>
      <Link to="/" className="block py-2 px-4 hover:text-teal-400">
        Home
      </Link>
      <Link to="/jobs" className="block py-2 px-4 hover:text-teal-400">
        Jobs
      </Link>
      <Link
        to="/my-application"
        className="block py-2 px-4 hover:text-teal-400"
      >
        My-Application
      </Link>
      <Link to="/contact" className="block py-2 px-4 hover:text-teal-400">
        Contact
      </Link>
    </>
  );

  return (
    <header className="bg-black text-white shadow-md shadow-zinc-700 sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <div>
          <Link
            to="/"
            className="text-2xl font-bold text-teal-100 border border-zinc-800 rounded-xl px-3 py-2"
            style={{
              textShadow: "0 0 5px #00ffcc, 0 0 5px #00ffcc, 0 0 10px #00ffcc",
            }}
          >
            chakriFinder
          </Link>
        </div>

        {/* Desktop Links */}
        <div className="hidden lg:flex space-x-4">{navLinks}</div>

        {/* Desktop Auth Buttons */}
        <div className="hidden lg:flex items-center space-x-3">
          {user ? (
            <button
              onClick={handleSignOut}
              className="bg-red-600 hover:bg-red-700 text-white text-sm px-4 py-2 rounded"
            >
              Logout
            </button>
          ) : (
            <>
              <Link
                to="/register"
                className="border border-gray-500 hover:border-teal-400 text-sm px-4 py-2 rounded"
              >
                Register
              </Link>
              <Link
                to="/signIn"
                className="bg-teal-500 hover:bg-teal-600 text-white text-sm px-4 py-2 rounded"
              >
                Sign In
              </Link>
            </>
          )}
        </div>

        {/* Mobile Toggle */}
        <div className="lg:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white focus:outline-none"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden px-4 pb-4 space-y-2 bg-black border-t border-gray-800">
          {navLinks}
          <div className="space-y-2">
            {user ? (
              <button
                onClick={handleSignOut}
                className="w-full bg-red-600 hover:bg-red-700 text-white text-sm px-4 py-2 rounded"
              >
                Logout
              </button>
            ) : (
              <>
                <Link
                  to="/register"
                  className="block w-full text-center border border-gray-500 hover:border-teal-400 text-sm px-4 py-2 rounded"
                >
                  Register
                </Link>
                <Link
                  to="/signIn"
                  className="block w-full text-center bg-teal-500 hover:bg-teal-600 text-white text-sm px-4 py-2 rounded"
                >
                  Sign In
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
