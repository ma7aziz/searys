import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/App.scss'
import Home from "./components/Home";
import Contact from "./components/Contact"
import About from "./components/About"
import Services from "./components/Services";
import NavBar from "./components/NavBar"
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
    <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />

      </Routes>
      <Footer />
    </>
  );
}

export default App;
