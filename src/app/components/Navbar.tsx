"use client";

import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = ["about", "skills", "projects", "interests", "contact"];

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900/80 backdrop-blur-lg shadow-md">
      <div className="max-w-7xl mx-auto px-4">
        <nav className="flex items-center justify-between h-20">
          <a
            href="#hero"
            className="text-2xl font-bold text-white hover:text-indigo-400 transition"
          >
            Ali Salimi
          </a>

          <ul className="hidden md:flex items-center space-x-6 text-white">
            {navItems.map((item) => (
              <li key={item}>
                <a
                  href={`#${item}`}
                  className="hover:text-indigo-400 transition"
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </a>
              </li>
            ))}
          </ul>

          <button
            onClick={toggleMenu}
            className="text-white md:hidden focus:outline-none"
            aria-label="Toggle Menu"
          >
            {menuOpen ? (
              <FiX className="w-6 h-6" />
            ) : (
              <FiMenu className="w-6 h-6" />
            )}
          </button>
        </nav>

        {menuOpen && (
          <div className="md:hidden mt-2 bg-gray-800  rounded-lg py-4 px-6 shadow-lg">
            <ul className="flex flex-col space-y-4 text-white text-center">
              {navItems.map((item) => (
                <li key={item}>
                  <a
                    href={`#${item}`}
                    className="block hover:text-indigo-400 transition"
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}
