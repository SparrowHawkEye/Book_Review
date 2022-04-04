import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {

  let activeStyle = {
    // textDecoration: "underline",
    color: "rgb(240 82 82)"

  };
  // let activeClassName = "underline"
   
  return (
      <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800 mb-5">
        <div className="container flex flex-wrap justify-between items-center  mx-auto">
          <button
            data-collapse-toggle="mobile-menu"
            type="button"
            className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="mobile-menu"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
            <svg
              className="hidden w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
          <div className="hidden w-full md:block md:w-full" id="mobile-menu">
            <ul className="flex flex-col mt-4 md:flex-row md:justify-center md:space-x-8 md:mt-4 md:mb-6 md:text-sm md:font-medium">
              <li>
                <NavLink
                  to="/" style={({ isActive }) =>
                  isActive ? activeStyle : undefined
                }
                  className="block text-xl py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-gray-700 md:p-0 dark:text-white"
                  aria-current="page"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/reviews" style={({ isActive }) =>
                  isActive ? activeStyle : undefined
                }
                  className="block text-xl py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-red-500 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Reviews
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard" style={({ isActive }) =>
                  isActive ? activeStyle : undefined
                }
                  className="block text-xl py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-red-500 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Dashboard
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/blogs" style={({ isActive }) =>
                  isActive ? activeStyle : undefined
                }
                  className="block text-xl py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-red-500 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Blogs
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about" style={({ isActive }) =>
                  isActive ? activeStyle : undefined
                }
                  className="block  text-xl py-2 pr-4 pl-3 text-gray-700 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-red-500 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  About
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
  );
};

export default Header;

