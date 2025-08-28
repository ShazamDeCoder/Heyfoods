import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Handle link click
  const handleLinkClick = () => {
    setIsOpen(false); // close menu
  };

  return (
    <nav className="fixed top-0 left-0 w-full flex items-center justify-between px-4 md:px-12 py-4 bg-white shadow z-50">
      {/* Logo */}
      <div className="p-1 md:p-4">
        <img src="./Images/logo-long.svg" alt="Logo" className="h-8 md:h-8" />
      </div>

      {/* Hamburger Icon (Mobile + Tablet) */}
      <div className="lg:hidden">
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
        </button>
      </div>

      {/* Links + Buttons */}
      <div
        className={`${
          isOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-5 pointer-events-none"
        } lg:opacity-100 lg:translate-y-0 lg:pointer-events-auto transition-all duration-700 ease-in-out flex flex-col lg:flex-row lg:items-center lg:space-x-6 absolute lg:static top-16 left-4 right-4 lg:top-auto lg:left-auto lg:right-auto bg-white lg:bg-transparent shadow lg:shadow-none rounded-lg lg:rounded-none p-6 lg:p-0`}
      >
        <ul className="flex flex-col lg:flex-row gap-4 lg:gap-0 lg:items-center lg:space-x-6">
          <li>
            <a
              href="#hero"
              onClick={handleLinkClick}
              className="block px-4 py-2 text-black font-medium rounded hover:bg-gray-100 lg:hover:bg-transparent"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#features"
              onClick={handleLinkClick}
              className="block px-4 py-2 text-black font-medium rounded hover:bg-gray-100 lg:hover:bg-transparent"
            >
              Features
            </a>
          </li>
          <li>
            <a
              href="#growth"
              onClick={handleLinkClick}
              className="block px-4 py-2 text-black font-medium rounded hover:bg-gray-100 lg:hover:bg-transparent"
            >
              Grow with us
            </a>
          </li>
          <li>
            <a
              href="#location"
              onClick={handleLinkClick}
              className="block px-4 py-2 text-black font-medium rounded hover:bg-gray-100 lg:hover:bg-transparent"
            >
              Locate us
            </a>
          </li>
          <li>
            <a
              href="#footer"
              onClick={handleLinkClick}
              className="block px-4 py-2 text-black font-medium rounded hover:bg-gray-100 lg:hover:bg-transparent"
            >
              Contact us
            </a>
          </li>
        </ul>

        {/* Buttons */}
        <div className="flex flex-col lg:flex-row gap-3 mt-4 lg:mt-0 lg:ml-6">
          <button className="px-6 py-2 text-black font-bold rounded-full border hover:bg-gray-100">
            Sign In
          </button>
          <button className="px-6 py-2 bg-black text-white font-bold rounded-full hover:bg-gray-800">
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
