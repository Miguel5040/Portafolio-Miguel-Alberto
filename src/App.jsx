import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import AboutMe from "./components/AboutMe"
import Projects from "./components/Projects"
import Technologies from "./components/Technologies"

const App = () => {

  return (
    <div className="bg-[#0c1b2d] text-white">
      <Navbar />
      <Hero />
      <AboutMe />
      <Projects />
      <Technologies />
    </div>
  )
}

export default App
