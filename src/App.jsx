import Home from "./pages/Home";
import About from "./pages/About";
import Education from "./pages/Education";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Education />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
