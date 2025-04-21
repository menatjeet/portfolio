import React, { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="w-full bg-black text-white px-6 py-4 shadow-md fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <span className="text-2xl font-bold">Portfolio</span>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-lg">
          <li>
            <a
              href="#home"
              className="cursor-pointer transition-colors duration-300"
              style={{ color: "white" }}
              onMouseEnter={(e) => (e.target.style.color = "blue")}
              onMouseLeave={(e) => (e.target.style.color = "white")}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="cursor-pointer transition-colors duration-300"
              style={{ color: "white" }}
              onMouseEnter={(e) => (e.target.style.color = "blue")}
              onMouseLeave={(e) => (e.target.style.color = "white")}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="cursor-pointer transition-colors duration-300"
              style={{ color: "white" }}
              onMouseEnter={(e) => (e.target.style.color = "blue")}
              onMouseLeave={(e) => (e.target.style.color = "white")}
            >
              Experience
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="cursor-pointer transition-colors duration-300"
              style={{ color: "white" }}
              onMouseEnter={(e) => (e.target.style.color = "blue")}
              onMouseLeave={(e) => (e.target.style.color = "white")}
            >
              Contact
            </a>
          </li>
        </ul>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white">
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
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-black mt-2 space-y-2 text-center">
          <a
            href="#home"
            className="block transition-colors duration-300"
            style={{ color: "white" }}
            onMouseEnter={(e) => (e.target.style.color = "blue")}
            onMouseLeave={(e) => (e.target.style.color = "white")}
          >
            Home
          </a>
          <a
            href="#about"
            className="block transition-colors duration-300"
            style={{ color: "white" }}
            onMouseEnter={(e) => (e.target.style.color = "blue")}
            onMouseLeave={(e) => (e.target.style.color = "white")}
          >
            About
          </a>
          <a
            href="#projects"
            className="block transition-colors duration-300"
            style={{ color: "white" }}
            onMouseEnter={(e) => (e.target.style.color = "blue")}
            onMouseLeave={(e) => (e.target.style.color = "white")}
          >
            Experience
          </a>
          <a
            href="#contact"
            className="block transition-colors duration-300"
            style={{ color: "white" }}
            onMouseEnter={(e) => (e.target.style.color = "blue")}
            onMouseLeave={(e) => (e.target.style.color = "white")}
          >
            Contact
          </a>
        </div>
      )}
    </div>
  );
};

export default Navbar;