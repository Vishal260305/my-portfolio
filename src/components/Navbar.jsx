import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "projects", "contact"];
      const scrollPosition = window.scrollY;

      let found = false;

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (
            scrollPosition >= offsetTop - 50 &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            const newUrl = section === "home" ? "/" : `#${section}`;
            if (window.location.hash !== newUrl) {
              window.history.replaceState(null, "", newUrl);
            }
            found = true;
          }
        }
      });

      if (!found && scrollPosition <= 10) {
        setActiveSection("home");
        if (window.location.hash !== "/") {
          window.history.replaceState(null, "", "/");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full backdrop-blur-md shadow-lg z-50 px-6 py-4 border-b border-gray-700 bg-[#0f172a]/80 text-white transition-all duration-300">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-xl font-semibold bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
          Portfolio
        </h1>

        {/* Desktop menu */}
        <ul className="hidden md:flex space-x-8 text-sm font-medium">
          {["home", "about", "skills", "projects", "contact"].map((item) => (
            <li key={item}>
              <a
                href={`#${item}`}
                className={`transition duration-200 ${
                  activeSection === item
                    ? "text-blue-500"
                    : "hover:text-blue-500"
                }`}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {isOpen && (
        <div className="md:hidden mt-2 px-4 py-3 rounded-md space-y-3 text-sm font-medium border border-gray-700 bg-[#0f172a]/95">
          {["home", "about", "skills", "projects", "contact"].map((item) => (
            <a
              key={item}
              href={`#${item}`}
              onClick={toggleMenu}
              className={`block transition duration-200 ${
                activeSection === item
                  ? "text-blue-500"
                  : "hover:text-blue-500"
              }`}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
