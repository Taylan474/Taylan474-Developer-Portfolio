import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Thesis from "./pages/Thesis";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="bg-black text-white font-sans">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/thesis" element={<Thesis />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
