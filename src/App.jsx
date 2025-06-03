import About from "./components/About"
import Hero from "./components/Hero"
import NavBar from "./components/NavBar"
import Portfolio from "./components/Portfolio"
import Services from "./components/Services"

const App = () => {
  return (

    <main className="overflow-hidden antialiased text-neutral-900 dark:text-neutral-800">

      <NavBar />
      <Hero />
      <Services />
      <Portfolio />
      <About />

    </main>
  )
}

export default App