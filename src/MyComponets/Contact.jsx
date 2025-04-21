import React from 'react'

const Contact = () => {
  return (
    <section id="contact" className="bg-black text-white py-16 px-6 md:px-12">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">📞 Contact Me</h2>
        <p className="text-gray-400 mb-8">
          Got a project or want to work together? Drop a message below! 👇
        </p>

        <form className="space-y-6">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full px-4 py-3 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-teal-400"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full px-4 py-3 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-teal-400"
          />
          <textarea
            placeholder="Your Message"
            rows="5"
            className="w-full px-4 py-3 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-teal-400"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-teal-400 to-indigo-500 text-white py-3 px-6 rounded-xl font-semibold hover:from-indigo-500 hover:to-teal-400 transition duration-300"
          >
            Send Message 🚀
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact