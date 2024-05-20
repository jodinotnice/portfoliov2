import { useState } from "react";

export default function Navbar() {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  function toggleMenu() {
    setHamburgerOpen(!hamburgerOpen);
  }

  return (
    <header>
      <nav id="desktop-nav">
        <div className="logo">Jordan Akpovi</div>
        <div>
          <ul className="nav-links">
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#Projets">Projets</a>
            </li>
            <li>
              <a href="#Experience">Expérience</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
      <nav id="hamburger-nav">
        <div className="logo">Jordan akpovi</div>
        <div className="hamburger-menu">
          <div
            className={`hamburger-icon ${hamburgerOpen ? "open" : ""}`}
            onClick={toggleMenu}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className={`menu-links ${hamburgerOpen ? "open" : ""}`}>
            <li>
              <a href="#about" onClick={toggleMenu}>
                About
              </a>
            </li>
            <li>
              <a href="#Projets" onClick={toggleMenu}>
                Projets
              </a>
            </li>
            <li>
              <a href="#Experience" onClick={toggleMenu}>
                Expérience
              </a>
            </li>
            <li>
              <a href="#contact" onClick={toggleMenu}>
                Contact
              </a>
            </li>
          </div>
        </div>
      </nav>
    </header>
  );
}
