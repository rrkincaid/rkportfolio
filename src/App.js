import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/app.css";
// import background from "./assets/image3.png";

import Home from "./pages/home";
import Contact from "./pages/contact";
import About from "./pages/about";
import Projects from "./pages/projects";

import Header from "./components/header";
// import Footer from "./components/footer";
import NavBar from "./components/navBar";

function App() {
  return (
    <Router>
      <div className="flex-column justify-flex-start min-100-vh">
        <NavBar />
        <Header />
        <div
          className="container"
          style={{ backgroundImage: `url(/assets/image3.jpg)` }}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </div>
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;
