import { BrowserRouter as Router } from "react-router-dom";
import Navbar from './components/Navbar';
import Hero from './components/Hero';


function App() {

  return (
    <Router>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
      </div>
    </Router>
  )
}

export default App
