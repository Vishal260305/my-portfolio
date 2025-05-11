import React from "react";
import { FaArrowUp } from "react-icons/fa";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-dark text-gray-400 py-8 mt-0">
      <div className="max-w-7xl mx-auto px-6 text-center flex flex-col items-center gap-4">
        <p className="text-sm">Made by <span className="text-white font-semibold">Vishal Gupta</span></p>
        <p className="text-xs">Stay Connected</p>
        <button
          onClick={scrollToTop}
          className="mt-2 bg-[#5f00ff] hover:bg-[#7f00ff] text-white p-3 rounded-full transition"
          title="Go to Top"
        >
          <FaArrowUp className="text-lg" />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
