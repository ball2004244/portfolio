import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="py-10 bg-gray-900 border-t border-gray-800">
      <div className="container mx-auto px-4 text-center">
        <div className="flex justify-center space-x-6 mb-4">
          <a
            href="https://github.com/ball2004244"
            className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://linkedin.com/in/tam-nguyen-cs"
            className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="https://x.com/TheAI_Frontier"
            className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter size={24} />
          </a>
        </div>
        <p className="text-gray-500">
          &copy; {new Date().getFullYear()} Tam Nguyen. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
