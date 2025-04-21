import React from "react";
import download from "../assets/demo.jpg";

const Hero = () => {
  return (
    <section className="bg-black text-white w-screen min-h-screen flex items-center px-4 md:px-8 pt-28">
      <div className="w-full flex flex-col md:flex-row items-center justify-between gap-8 max-w-[1300px] mx-auto">
        
        {/* Left Side – Text Content */}
        <div className="w-full md:w-1/2">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight text-center md:text-left">
            Hello, I'm Jeet 
          </h1>
          <p className="mt-6 text-base md:text-xl leading-relaxed text-gray-300 text-center md:text-left">
            I'm a passionate{" "}
            <span className="text-teal-400">Frontend Developer</span> with a
            solid grip on
            <span className="text-teal-400"> HTML</span>,{" "}
            <span className="text-teal-400">CSS</span>, and
            <span className="text-teal-400"> JavaScript</span>. Currently diving
            deep into
            <span className="text-teal-400"> React.js</span> to build clean,
            responsive, and user-friendly web apps. I love writing efficient
            code, and I’m always ready to level up with new tech and fresh
            challenges 🚀.
          </p>

          {/* Contact Me Button */}
          <div className="mt-8 flex justify-center md:justify-start">
            <a
              href="#contact"
              className="inline-block bg-gradient-to-r from-teal-400 via-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 shadow-lg"
            >
              <span className="text-white flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 12.79V12a9 9 0 10-3.6 7.2L21 21l.79-.79-3.6-3.6z"
                  />
                </svg>
                Contact Me
              </span>
            </a>
          </div>
        </div>

        {/* Right Side – Profile Image */}
        <div id="home" className="w-full md:w-1/2 flex justify-center md:justify-end">
          <img
            src={download}
            alt="Jeet - Frontend Developer"
            className="w-full max-w-[400px] rounded-2xl shadow-xl object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
