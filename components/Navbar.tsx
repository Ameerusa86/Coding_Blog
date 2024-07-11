"use client";

// components/Navbar.tsx
import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg fixed w-full z-10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link
              href="/"
              className="text-3xl font-bold tracking-wider hover:text-yellow-300 transition duration-300"
            >
              MyBrand
            </Link>
          </div>
          <div className="hidden md:flex md:flex-grow md:justify-center">
            <div className="flex items-baseline space-x-4">
              <Link
                href="/about"
                className="hover:bg-blue-700 px-3 py-2 rounded-md text-sm font-medium transition duration-300"
              >
                About
              </Link>
              <Link
                href="/blogs"
                className="hover:bg-blue-700 px-3 py-2 rounded-md text-sm font-medium transition duration-300"
              >
                Blogs
              </Link>
              <Link
                href="/contact"
                className="hover:bg-blue-700 px-3 py-2 rounded-md text-sm font-medium transition duration-300"
              >
                Contact
              </Link>
            </div>
          </div>
          <div className="hidden md:block">
            <Link
              href="/login"
              className="hover:bg-blue-700 px-3 py-2 rounded-md text-sm font-medium transition duration-300"
            >
              Login
            </Link>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-600 focus:ring-white transition duration-300"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`${isOpen ? "hidden" : "block"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
              <svg
                className={`${isOpen ? "block" : "hidden"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              href="/about"
              className="hover:bg-blue-700 block px-3 py-2 rounded-md text-base font-medium transition duration-300"
            >
              About
            </Link>
            <Link
              href="/services"
              className="hover:bg-blue-700 block px-3 py-2 rounded-md text-base font-medium transition duration-300"
            >
              Services
            </Link>
            <Link
              href="/contact"
              className="hover:bg-blue-700 block px-3 py-2 rounded-md text-base font-medium transition duration-300"
            >
              Contact
            </Link>
            <Link
              href="/login"
              className="hover:bg-blue-700 block px-3 py-2 rounded-md text-base font-medium transition duration-300"
            >
              Login
            </Link>
          </div>
        </div>
      )}
    </motion.nav>
  );
};

export default Navbar;
