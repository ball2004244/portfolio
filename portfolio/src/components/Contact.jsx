import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-2 text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500">
          Get In Touch
        </h2>
        <p className="text-gray-400 text-center mb-10 max-w-2xl mx-auto">
          Let's collaborate on something amazing
        </p>
        <form className="max-w-lg mx-auto bg-gray-800/50 p-8 rounded-lg border border-gray-700">
          <div className="mb-6">
            <label htmlFor="name" className="block text-cyan-400 mb-2 text-sm">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full bg-gray-900/50 text-gray-300 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-cyan-500 transition-colors"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="email" className="block text-cyan-400 mb-2 text-sm">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full bg-gray-900/50 text-gray-300 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-cyan-500 transition-colors"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="block text-cyan-400 mb-2 text-sm">
              Message
            </label>
            <textarea
              id="message"
              rows="5"
              className="w-full bg-gray-900/50 text-gray-300 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-cyan-500 transition-colors"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold py-3 rounded-lg hover:opacity-90 transition-opacity focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-gray-900"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
