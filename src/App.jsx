import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/App.scss'
import Home from "./components/Home";
import Contact from "./components/Contact"
import About from "./components/About"
import Header from "./components/Header"
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
    <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
