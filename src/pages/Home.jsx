import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaBriefcase,
  FaDownload,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Home = () => {
  const imageRef = useRef(null);
  const iconsRef = useRef([]);

  useEffect(() => {
    // Image subtle floating effect
    gsap.to(imageRef.current, {
      y: "+=10",
      repeat: -1,
      yoyo: true,
      duration: 2,
      ease: "power1.inOut",
    });

    // Social icons bounce effect
    iconsRef.current.forEach((icon, index) => {
      gsap.fromTo(
        icon,
        { y: -10, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          delay: index * 0.2,
          ease: "back.out(1.7)",
        }
      );
    });
  }, []);

  return (
    <section
      id="home"
      className="flex flex-col md:flex-row items-center justify-between px-6 py-20 bg-gray-900 text-white"
    >
      {/* Left Side: Text and Buttons */}
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="md:w-1/2 space-y-4"
      >
        <h1 className="text-5xl font-extrabold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-transparent bg-clip-text">
          Hi, I'm Prakash
        </h1>
        <p className="text-2xl font-medium leading-relaxed">
          A passionate MERN Stack Developer who loves building modern,
          responsive web applications.
        </p>
        <div className="flex space-x-6 mt-6">
          {[
            "https://github.com/prakash07dz",
            "https://www.linkedin.com/in/prakashparmar1503/",
            "https://instagram.com/prakashthakor.101",
            "https://twitter.com/prakash07dz",
          ].map((link, index) => (
            <a
              key={index}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              ref={(el) => (iconsRef.current[index] = el)}
            >
              {index === 0 ? (
                <FaGithub
                  size={30}
                  className="hover:text-blue-400 transition-all"
                />
              ) : index === 1 ? (
                <FaLinkedin
                  size={30}
                  className="hover:text-blue-400 transition-all"
                />
              ) : index === 2 ? (
                <FaInstagram
                  size={30}
                  className="hover:text-blue-400 transition-all"
                />
              ) : (
                <FaXTwitter
                  size={30}
                  className="hover:text-blue-400 transition-all"
                />
              )}
            </a>
          ))}
        </div>
        <div className="mt-6 space-x-4">
          <a
            href="#projects"
            className="inline-flex items-center px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-400 transition-all"
          >
            <FaBriefcase size={20} className="mr-2" />
            View My Work
          </a>
          <a
            href="/prakash_resume.pdf"
            download
            className="inline-flex items-center px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-400 transition-all"
          >
            <FaDownload size={20} className="mr-2" />
            Download Resume
          </a>
        </div>
      </motion.div>

      {/* Right Side: Image */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="mt-8 md:mt-0 md:w-1/2 flex justify-center items-center p-4 rounded-lg relative drop-shadow-2xl"
      >
        <img
          ref={imageRef}
          src="/images/dev.png"
          alt="Image"
          className="w-full md:w-90 h-auto rounded-full object-cover bg-gray-800 shadow-[0px_20px_40px_rgba(0,0,0,0.5)]"
        />
      </motion.div>
    </section>
  );
};

export default Home;
