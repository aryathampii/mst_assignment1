// import Header from './Components/Header';
import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Navbar from './Components/Navbar';
import Home from "./Pages/Home";
import About from "./Pages/About";
import Skills from './Pages/Skills';
import Education from "./Pages/Education";

import Contact from './Pages/Contact';
import Footer from './Components/Footer';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/education" element={<Education />} />
        <Route path="/contact" element={<Contact />} />

      </Routes>
      <Footer />
      </BrowserRouter>
    </div>
  );
}
export default App;
