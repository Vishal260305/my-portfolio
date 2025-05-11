import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import AboutMe from './components/AboutMe'
import Skills from './components/Skills'; 
import Projects from './components/Projects'; 
import Contact from './components/Contact'; 
import Footer from './components/Footer'; 



function App() {
  return (
    <main>
      <Navbar />
      <Hero />
      <AboutMe/>
      <Skills />
      <Projects />
      <Contact />
      <Footer />
      
    </main>
  );
}

export default App;
