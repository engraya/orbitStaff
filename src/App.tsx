import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Create from './../pages/Create';
import Dashboard from './../pages/Dashboard';
import Footer from './../components/Footer';
import Home from './../pages/Home';
import Navbar from './../components/NavBar';
import Update from './../pages/Update';
import About from './../pages/About';



function App() {
  return (
    <>
      <Router>
      <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/create" element={<Create />} />
            <Route path="/update/:id" element={<Update />} />
          </Routes>
      <Footer />
    </Router>
    </>
  )
}

export default App
