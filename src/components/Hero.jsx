import React from "react";
import {
  FaGithub,
  FaLinkedinIn,
  FaTwitter,
  FaEnvelope,
  FaDownload,
  FaInstagram,
  FaCode,
  FaArrowDown,
} from "react-icons/fa";

const Hero = () => {
  return (
    <section className="min-h-screen pb-10 flex flex-col justify-center items-center text-center px-4 bg-[#0a0a23] text-white font-poppins">
      <h2 className="text-base md:text-lg text-blue-400 mb-4">Hi, my name is</h2>

      <h1 className="text-[1.85rem] sm:text-[2.25rem] md:text-[2.75rem] font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#5f00ff] to-[#7f00ff] leading-tight mb-1">
        Vishal Gupta
      </h1>

      <h2 className="text-2xl sm:text-3xl md:text-5xl font-semibold text-white mt-1">
        Web Developer
      </h2>

      <p className="text-gray-400 mt-4 max-w-xl text-base md:text-lg text-center px-2">
        I craft responsive websites where technology meets creativity
      </p>

      <div className="mt-6 flex flex-col sm:flex-row gap-4 items-center">
        <a
          href="/Vishal_Gupta.pdf"
          download
          className="bg-gradient-to-r from-[#5f00ff] to-[#7f00ff] text-white px-5 py-2 rounded-md hover:opacity-90 transition flex items-center gap-2"
        >
          Download Resume <FaDownload />
        </a>
        <a
          href="#contact"
          className="bg-[#11152e] text-white px-5 py-2 rounded-md hover:bg-[#151a34] border border-gray-700 transition"
        >
          Contact Me
        </a>
      </div>

      <div className="flex flex-wrap justify-center gap-6 mt-6 text-2xl text-gray-300">
        <a
          href="https://github.com/Vishal260305"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/vishal-gupta-377047258/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedinIn />
        </a>
        <a
          href="https://instagram.com/vishal_26g"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram />
        </a>
        <a href="mailto:2022uec1571@mnit.ac.in">
          <FaEnvelope />
        </a>
        <a
          href="https://leetcode.com/u/_vg260305._/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaCode />
        </a>
      </div>

      <a href="#about">
      <div
        className="mt-10 animate-bounce text-2xl text-purple-400"
        style={{ animationDuration: "2.5s" }}
      >
        <FaArrowDown />
      </div>
      </a>
    </section>
  );
};

export default Hero;
