import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8 px-6 md:px-12">
      <div className="max-w-7xl mx-auto text-center">
        {/* Centered Social Icons */}
        <div className="flex justify-center items-center space-x-6 text-2xl mt-4">
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-teal-400"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-teal-400"
          >
            <i className="fab fa-github"></i>
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-teal-400"
          >
            <i className="fab fa-twitter"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
