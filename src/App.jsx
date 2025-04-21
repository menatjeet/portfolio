
import About from "./MyComponets/About";
import Contact from "./MyComponets/Contact";
import Footer from "./MyComponets/Footer";
import Hero from "./MyComponets/Hero";
import Navbar from "./MyComponets/Navbar"
import Projects from "./MyComponets/Projects";

function App() {
  

  return <div className="bg-black h-auto w-full overflow-hidden">
    <Navbar />
    <Hero />
    <About />
    <Projects />
    <Contact />
    <Footer />
    
  </div>
}

export default App ;
