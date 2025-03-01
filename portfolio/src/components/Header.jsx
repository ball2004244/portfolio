import React from "react";

const Header = () => {
  return (
    <header className="fixed w-full bg-gray-900/80 backdrop-blur-sm text-white z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500">
          TN
        </h1>
        <nav>
          <ul className="flex space-x-6">
            {["Home", "Projects", "Blogs"].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="relative group text-gray-300 hover:text-cyan-400 transition-colors duration-300"
                >
                  {item}
                  <span className="absolute inset-x-0 bottom-0 h-0.5 bg-cyan-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
