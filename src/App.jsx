import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import AboutMe from "./components/AboutMe"

const App = () => {

  return (
    <div className="container mx-auto max-w-[1200px] w-[90%]">
      <Navbar />
      <Hero />
      <AboutMe />
    </div>
  )
}

export default App
