import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "home",
        "about",
        "education",
        "skills",
        "projects",
        "contact",
      ];
      sections.forEach((section) => {
        const sectionElement = document.getElementById(section);
        if (sectionElement) {
          const rect = sectionElement.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "home", title: "Home" },
    { id: "about", title: "About" },
    { id: "education", title: "Education" },
    { id: "skills", title: "Skills" },
    { id: "projects", title: "Projects" },
    { id: "contact", title: "Contact" },
  ];

  return (
    <nav className="flex justify-between items-center p-4 bg-gray-900 text-white fixed top-0 left-0 right-0 z-10">
      <h1 className="text-3xl font-extrabold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-transparent bg-clip-text">
        Prakash
      </h1>

      {/* Mobile Menu Icon */}
      <div className="md:hidden" onClick={toggleMenu}>
        {isMenuOpen ? (
          <FaTimes size={30} className="text-white" />
        ) : (
          <FaBars size={30} className="text-white" />
        )}
      </div>

      <div className="hidden md:flex space-x-6 relative">
        {navItems.map((item) => (
          <Link
            key={item.id}
            to={item.id}
            smooth={true}
            duration={300}
            offset={-70}
            className={`relative cursor-pointer transition-all hover:text-blue-400 ${
              activeSection === item.id ? "text-blue-400" : ""
            }`}
          >
            {item.title}
            {activeSection === item.id && (
              <motion.div
                className="absolute left-0 bottom-[-4px] h-1 w-full bg-blue-400 rounded"
                layoutId="underline"
              />
            )}
          </Link>
        ))}
      </div>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <motion.div
          className="md:hidden absolute top-16 left-0 right-0 bg-gray-900 flex flex-col space-y-4 p-4"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
        >
          {navItems.map((item) => (
            <Link
              key={item.id}
              to={item.id}
              smooth={true}
              duration={500}
              offset={-70}
              className="block text-center hover:text-blue-400"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.title}
            </Link>
          ))}
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
