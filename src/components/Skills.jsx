import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaBootstrap,
  FaNodeJs,
} from "react-icons/fa";
import { SiExpress, SiMongodb } from "react-icons/si";

const Skills = () => {
  const skills = [
    { name: "HTML", icon: <FaHtml5 size={50} color="#E34F26" /> },
    { name: "CSS", icon: <FaCss3Alt size={50} color="#1572B6" /> },
    { name: "JavaScript", icon: <FaJs size={50} color="#F7DF1E" /> },
    { name: "React", icon: <FaReact size={50} color="#61DAFB" /> },
    { name: "Bootstrap", icon: <FaBootstrap size={50} color="#7952B3" /> },
    { name: "Node.js", icon: <FaNodeJs size={50} color="#339933" /> },
    { name: "Express.js", icon: <SiExpress size={50} color="#ffffff" /> },
    { name: "MongoDB", icon: <SiMongodb size={50} color="#47A248" /> },
  ];

  return (
    <section id="skills" className="min-h-screen bg-[#0a0a23] text-white flex flex-col justify-center items-center px-4 py-10">
      <h2 className="text-4xl font-bold mb-10">My Skills</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-12 max-w-5xl w-full justify-items-center">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center space-y-2 skill-card"
          >
            <div className="text-5xl">{skill.icon}</div>
            <p className="text-lg">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
