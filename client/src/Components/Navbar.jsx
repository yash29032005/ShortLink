import React, { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black text-white shadow-md" style={{ height: "60px" }}>
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <div className="text-2xl font-bold flex justify-between items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z"
            />
          </svg>
          <h1 className="ps-2">ShortLink</h1>
        </div>

        <div className="hidden md:flex space-x-6 justify-center items-center">
          <a href="/" className="hover:text-gray-300">
            Home
          </a>
          <a href="/#about" className="hover:text-gray-300">
            About
          </a>
          <a href="/#footer" className="hover:text-gray-300">
            Contact
          </a>
        </div>

        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✖" : "☰"}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-gray-800 px-4 py-2 space-y-2">
          <a href="/" className="block hover:text-gray-300">
            Home
          </a>
          <a href="/about" className="block hover:text-gray-300">
            About
          </a>
          <a href="/contact" className="block hover:text-gray-300">
            Contact
          </a>
        </div>
      )}
    </nav>
  );
}
