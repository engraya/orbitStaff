import { useState } from "react";
import { Link } from "react-router-dom";

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle the menu visibility
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <section className="w-full sticky top-0 z-50 px-8 text-gray-700 bg-gray-900">
      <div className="container flex flex-wrap items-center justify-between py-3 mx-auto md:flex-row max-w-7xl">
        {/* Logo Section */}
        <div className="flex items-center justify-between w-full md:w-auto">
          <Link
            to="/"
            className="flex items-center text-gray-100 font-medium mb-5 md:mb-0"
          >
            <span className="text-xl font-black leading-none">
              SoftEmployee<span className="text-indigo-400">.</span>
            </span>
          </Link>
          {/* Hamburger Menu */}
          <button
            onClick={toggleMenu}
            className="text-gray-100 flex justify-center items-center focus:outline-none md:hidden"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex flex-wrap items-center text-base">
          <Link
            to="/"
            className="mr-5 font-medium leading-6 text-gray-200 hover:text-gray-400"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="mr-5 font-medium leading-6 text-gray-200 hover:text-gray-400"
          >
            About
          </Link>
        </nav>

        {/* Desktop Button */}
        <div className="hidden md:flex items-center ml-5">
          <Link
            to="/dashboard"
            className="px-4 py-2 font-bold text-white bg-indigo-600 rounded-md shadow-sm hover:bg-indigo-500"
          >
            Directory
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${
          isMenuOpen ? "flex" : "hidden"
        } flex-col items-center space-y-4 mt-4 md:hidden`}
      >
        <Link
          to="/"
          className="text-gray-200 font-medium hover:text-gray-400"
          onClick={toggleMenu}
        >
          Home
        </Link>
        <Link
          to="/about"
          className="text-gray-200 font-medium hover:text-gray-400"
          onClick={toggleMenu}
        >
          About
        </Link>
        <Link
          to="/dashboard"
          className="px-4 py-2 text-white font-bold bg-indigo-600 rounded-md shadow-sm hover:bg-indigo-500"
          onClick={toggleMenu}
        >
          Directory
        </Link>
      </div>
    </section>
  );
}

export default NavBar;
