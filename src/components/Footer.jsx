import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaTwitter,
  FaArrowUp,
} from "react-icons/fa";

const Footer = () => {
  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gray-900 text-white py-8 px-6">
      <div className="max-w-screen-xl mx-auto flex flex-col items-center md:flex-row justify-between space-y-6 md:space-y-0">
        <div className="flex space-x-6">
          <a
            href="https://github.com/prakash07dz"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition-all"
          >
            <FaGithub size={30} />
          </a>
          <a
            href="https://www.linkedin.com/in/prakashparmar1503/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition-all"
          >
            <FaLinkedin size={30} />
          </a>
          <a
            href="https://instagram.com/prakashthakor.101"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition-all"
          >
            <FaInstagram size={30} />
          </a>
          <a
            href="https://twitter.com/prakash07dz"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition-all"
          >
            <FaTwitter size={30} />
          </a>
        </div>

        <div className="flex flex-col items-center space-y-4 md:flex-row md:space-x-6 md:space-y-0">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Prakash. All Rights Reserved.
          </p>

          <a
            href="/path-to-resume.pdf"
            download
            className="inline-block px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-400 transition-all"
          >
            Download Resume
          </a>

          <button
            onClick={scrollToTop}
            className="px-4 py-3 bg-blue-500 text-white rounded-full hover:bg-blue-400 transition-all"
          >
            <FaArrowUp size={24} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
