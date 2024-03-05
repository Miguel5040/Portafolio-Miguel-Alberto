import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import AboutMe from "./components/AboutMe"
import Projects from "./components/Projects"
import Technologies from "./components/Technologies"
import Footer from "./components/Footer"

const App = () => {

  return (
    <div className="bg-[#0c1b2d] text-white min-h-full">
      <div className="fixed w-full">
        <Navbar />
      </div>
      <div>
        <Hero />
        <AboutMe />
        <Projects />
        <Technologies />
        <Footer />
      </div>
    </div>
  )
}

export default App
