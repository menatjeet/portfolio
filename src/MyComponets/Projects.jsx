import React from "react";

const Projects = () => {
  const projects = [
    {
      title: "Portfolio Website",
      desc: "A modern personal portfolio built using React and Tailwind CSS.",
      link: "#",
    },
    {
      title: "Weather App",
      desc: "Real-time weather app using OpenWeatherMap API and React.",
      link: "#",
    },
    {
      title: "E-Commerce UI",
      desc: "A responsive frontend design for an e-commerce website.",
      link: "#",
    },
  ];

  return (
    <section id="projects" className="bg-black text-white py-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-10">🚀 Projects</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-700 p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300"
            >
              <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
              <p className="text-gray-300 mb-4">{project.desc}</p>
              <a
                href={project.link}
                className="inline-block mt-auto text-sm text-blue-400 hover:underline"
              >
                View Project →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
