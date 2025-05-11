import React from "react";
import { FaGithub, FaVideo } from "react-icons/fa";

// ✅ Import images the Vite-friendly way
import notebookImg from "../assets/notebook.png";
import newsImg from "../assets/news.png";
import textImg from "../assets/text.png";

// ✅ Project list
const projects = [
  {
    title: "iNoteBook - Notebook on the Cloud",
    description:
      "A full-stack note making application on the cloud that allows users to create, edit and delete personalized notes with proper security.",
    image: notebookImg,
    tech: ["React", "Node.js", "MongoDB", "Express"],
    codeLink: "https://github.com/Vishal260305/iNotebook",
    videoSrc: "/videos/demo.mp4", // should be in /public/videos folder
  },
  {
    title: "NewsNest - Explore the World!",
    description:
      "A news application with latest news from different categories and user-friendly interface.",
    image: newsImg,
    tech: ["React", "Javascript", "Bootstrap", "Fetch API"],
    codeLink: "https://github.com/Vishal260305/NewsNest",
    videoSrc: "/videos/demo.mp4",
  },
  {
    title: "textAnalyze - Text Editor Tool",
    description:
      "A text utility tool on the web built using React that allows users to perform various functions with the text, live preview and time to read.",
    image: textImg,
    tech: ["React", "Javascript", "Bootstrap"],
    codeLink: "https://github.com/Vishal260305/textAnalyze",
    videoSrc: "/videos/demo.mp4",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="bg-dark text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12 text-center text-white">
          My Projects
        </h2>

        <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-[#11152e] rounded-2xl overflow-hidden shadow-lg flex flex-col hover:scale-105 transition-transform duration-300"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>

                <p className="text-gray-300 text-sm flex-grow">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="bg-[#1f2937] text-gray-200 text-xs px-3 py-1 rounded-full border border-gray-600"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Code and Demo Buttons */}
                <div className="flex gap-4 mt-6">
                  <a
                    href={project.codeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 text-center bg-transparent hover:bg-[#5f00ff] border border-[#5f00ff] text-[#5f00ff] hover:text-white font-semibold py-2 rounded-lg transition"
                  >
                    <FaGithub className="text-lg" /> Code
                  </a>

                  <button
                    onClick={() => window.open(project.videoSrc, "_blank")}
                    className="flex-1 flex items-center justify-center gap-2 text-center bg-[#5f00ff] hover:bg-[#7f00ff] text-white font-semibold py-2 rounded-lg transition"
                  >
                    <FaVideo className="text-lg" /> Demo
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
