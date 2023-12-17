import { BrowserRouter as Router } from "react-router-dom";
// import Navbar from './components/Navbar';
// import Hero from './components/Hero';
// import Tech from "./components/Tech";
import { Hero, Navbar, Tech, Works, } from "./components";


function App() {

  return (
    <Router>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <Tech />
        <Works />
      </div>
    </Router>
  )
}

export default App
