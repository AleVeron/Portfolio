import Navbar from "./Components/Navbar"
import Footer from "./Components/Footer"
import Hero from "./Components/Hero"
import { Routes, Route } from 'react-router-dom';
import Proyects from "./Components/Proyects";
import About from "./Components/About";

function App() {

  return (
    <div className="d-flex flex-column justify-content-between align-items-between">
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/index" element={<Hero />} />
        <Route path="/home" element={<Hero />} />
        <Route path="/proyects" element={<Proyects />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </div>
  )

}

export default App
