import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react'
import Navbar from './components/shared/Navbar'
import Footer from './components/shared/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import ContactUs from './pages/ContactUs'
function App() {
  return (
    <BrowserRouter>
        <Navbar />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<ContactUs />} />
      </Routes>
        <Footer />
    </BrowserRouter>


  )
}

export default App
