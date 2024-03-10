import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Hero, Navbar, Tech, Works, Contact, About, } from "./components";
import Footer from "./components/Footer";
import Statics from "./components/Statics";



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
        <Statics />
        <Contact />
        <About />
        <Footer />
      </div>
    </Router >
  )
}

export default App
