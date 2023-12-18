import { BrowserRouter as Router } from "react-router-dom";
import { Hero, Navbar, Tech, Works, Contact } from "./components";


function App() {

  return (
    <Router>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <Works />
        <Tech />
        <Contact />
      </div>
    </Router>
  )
}

export default App
