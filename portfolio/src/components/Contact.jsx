import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    setSuccess(false);

    try {
      const response = await fetch(
        `https://api.github.com/repos/ball2004244/portfolio/dispatches`,
        {
          method: "POST",
          headers: {
            Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`,
            Accept: "application/vnd.github.v3+json",
          },
          body: JSON.stringify({
            event_type: "contact-form-submission",
            client_payload: formData,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      setSuccess(true);
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      setError("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-2 text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500">
          Get In Touch
        </h2>
        <p className="text-gray-400 text-center mb-10 max-w-2xl mx-auto">
          If you want to collaborate or just have a chat, feel free to reach out!
        </p>
        <form
          className="max-w-lg mx-auto bg-gray-800/50 p-8 rounded-lg border border-gray-700"
          onSubmit={handleSubmit}
        >
          <div className="mb-6">
            <label htmlFor="name" className="block text-cyan-400 mb-2 text-sm">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full bg-gray-900/50 text-gray-300 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-cyan-500 transition-colors"
              value={formData.name}
              onChange={handleChange}
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
              value={formData.email}
              onChange={handleChange}
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
              className="w-full bg-gray-900/50 text-gray-300 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-cyan-500 transition-colors resize-none"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold py-3 rounded-lg hover:opacity-90 transition-opacity focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-gray-900"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
          {error && <p className="text-red-500 text-center mt-4">{error}</p>}
          {success && <p className="text-green-500 text-center mt-4">Message sent successfully!</p>}
        </form>
      </div>
    </section>
  );
};

export default Contact;
