import "./styles.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import Home from "./Home";
import Breeds from "./Breeds";
import About from "./About";

const App = () => {
  return (
    <Router>
      <nav className="menu">
        <div className="logoContainer">
          <img src="/img/logo.png" alt="logo do site" className="logo" />
          <img src="/img/Dogin.png" alt="Dogin" className="logoName" />
        </div>
        <div className="menuOpts">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/breeds">Raças</Link>
            </li>
            <li>
              <Link to="/about">Sobre nós</Link>
            </li>
          </ul>
        </div>
      </nav>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/breeds" element={<Breeds />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
      <footer>&#169;Vitor Akira Uehara 2022 - WebMobile</footer>
    </Router>
  );
};

export default App;
