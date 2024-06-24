import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/App.scss';
import Home from "./components/Home";
import Contact from "./components/Contact";
import About from "./components/About";
import Services from "./components/Services";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import MouseCursore from "./components/MouseCursore";
import Preloader from "./components/Preloader";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

const pageTransition = {
  in: {
    opacity: 1,
    x: 0
  },
  out: {
    opacity: 0,
    x: "-100vw"
  }
};

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();

  if (isLoading) {
    // return <Preloader setIsLoading={setIsLoading} />;
  }

  return (
    <>
      <NavBar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route
            exact
            path="/"
            element={
              <motion.div
                initial="out"
                animate="in"
                exit="out"
                variants={pageTransition}
                transition={{ duration: 0.5 }}
              >
                <Home />
              </motion.div>
            }
          />
          <Route
            path="/about"
            element={
              <motion.div
                initial="out"
                animate="in"
                exit="out"
                variants={pageTransition}
                transition={{ duration: 0.5 }}
              >
                <About />
              </motion.div>
            }
          />
          <Route
            path="/contact"
            element={
              <motion.div
                initial="out"
                animate="in"
                exit="out"
                variants={pageTransition}
                transition={{ duration: 0.5 }}
              >
                <Contact />
              </motion.div>
            }
          />
          <Route
            path="/services"
            element={
              <motion.div
                initial="out"
                animate="in"
                exit="out"
                variants={pageTransition}
                transition={{ duration: 0.5 }}
              >
                <Services />
              </motion.div>
            }
          />
        </Routes>
      </AnimatePresence>
      {/* <MouseCursore /> */}
      <Footer />
    </>
  );
}

export default App;
