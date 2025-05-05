import "primereact/resources/themes/lara-light-cyan/theme.css";
import React from 'react';
import './App.css';
import Navbar from './Components/Navbar.jsx'
import Home from "./Components/Home.jsx";
import AboutUs from "./Components/AboutUs.jsx";
import Leadership from "./Components/Leadership.jsx";
import Solutions from './Components/Solutions_Menu/Solutions.jsx'
import Adams from "./Components/Solutions_Menu/Autotech/Adams.jsx"
import Alps from "./Components/Solutions_Menu/Autotech/Alps.jsx";
import Denali from "./Components/Solutions_Menu/Autotech/Denali.jsx";
import Collections from "./Components/Solutions_Menu/Fintech/Collections.jsx";
import Lending from "./Components/Solutions_Menu/Fintech/Lending.jsx";
import Services from "./Components/Services.jsx";
import StrategicInvestments from "./Components/StrategicInvestments.jsx";
import Media from "./Components/Media.jsx";
import Careers from "./Components/Careers.jsx";
import ContactUs from "./Components/ContactUs.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/Leadership" element={<Leadership />} />
        <Route path="/Solutions" element={<Solutions />} />
        <Route path="/Adams" element={<Adams />} />
        <Route path="/Alps" element={<Alps />} />
        <Route path="/Denali" element={<Denali />} />
        <Route path="/Collections" element={<Collections />} />
        <Route path="/Lending" element={<Lending />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/StrategicInvestments" element={<StrategicInvestments />} />
        <Route path="/Media" element={<Media />} />
        <Route path="/Careers" element={<Careers />} />
        <Route path="/ContactUs" element={<ContactUs />} />

      </Routes>
    </Router>
    </>
  )
}

export default App