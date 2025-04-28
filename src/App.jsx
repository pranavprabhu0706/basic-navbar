import "primereact/resources/themes/lara-light-cyan/theme.css";
import React from 'react';
import './App.css';
import Navbar from './Components/Navbar.jsx'
import Home from "./Components/Home.jsx";
import AboutUs from "./Components/AboutUs.jsx";
import Leadership from "./Components/Leadership.jsx";
import Solutions from './Components/Solutions.jsx'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/Leadership" element={<Leadership />} />
        <Route path="/Solutions" element={<Solutions />} />
      </Routes>
    </Router>
    </>
  )
}

export default App