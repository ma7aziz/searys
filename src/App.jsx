import React from "react";
import Home from "./components/Home";
import Contact from "./components/Contact"
import About from "./components/About"
import Header from "./components/Header"
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
    </>
  );
}

export default App;
