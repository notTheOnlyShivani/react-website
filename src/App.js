import './App.css';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import Products from './Pages/Products';
import About from './Pages/About';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Contact from './Pages/Contact';

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />
      <Routes>
        <Route path="/react-website" element={<Home />} />
        <Route path="/react-website/products" element={<Products />} />
        <Route path="/react-website/about" element={<About />} />
        <Route path="/react-website/contact" element={<Contact />} />
      </Routes>
      </Router>
    </div>
  );
}

export default App;
