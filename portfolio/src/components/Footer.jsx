import React from "react";

const Footer = () => {
  return (
    <footer className="py-10 bg-gray-900 border-t border-gray-800">
      <div className="container mx-auto px-4 text-center">
        <div className="flex justify-center space-x-6 mb-4">
          {["GitHub", "LinkedIn", "Twitter"].map((social) => (
            <a
              key={social}
              href="#"
              className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
            >
              {social}
            </a>
          ))}
        </div>
        <p className="text-gray-500">
          &copy; {new Date().getFullYear()} Tam Nguyen. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
