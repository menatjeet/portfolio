import React from 'react';
import profile from '../assets/demo.jpg'; // Apna image path daal

const About = () => {
  return (
    <section id="about" className="py-16 bg-black text-white">
      <div className="max-w-3xl mx-auto text-center px-4">
        <h2 className="text-4xl font-bold mb-6">About Me</h2>
        <img
          src={profile}
          alt="My Photo"
          className="w-36 h-36 rounded-full object-cover mx-auto mb-6 shadow-lg"
        />
        <p className="text-lg text-gray-300 leading-relaxed">
          Hi there! 👋 I'm <span className="text-teal-400 font-semibold">Chhotu</span>, a 4th-semester IT student from GTU.
          I'm currently diving into frontend web development — learning 
          <span className="text-teal-400"> HTML</span>, 
          <span className="text-teal-400"> CSS</span>, 
          <span className="text-teal-400"> JavaScript</span>, and 
          <span className="text-teal-400"> React.js</span>. 
          I love building responsive UIs and solving design problems with clean code.
        </p>
      </div>
    </section>
  );
};

export default About;
