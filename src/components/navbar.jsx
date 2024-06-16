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
              <a className="link-style" href="#about">
                &Agrave; propos
              </a>
            </li>
            <li>
              <a className="link-style" href="#competences">
                Compétences
              </a>
            </li>
            <li>
              <a className="link-style" href="#projet">
                Projets
              </a>
            </li>
            <li>
              <a className="link-style" href="#contact">
                Contact
              </a>
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
                &Agrave; propos
              </a>
            </li>
            <li>
              <a href="#projet" onClick={toggleMenu}>
                Compétences
              </a>
            </li>
            <li>
              <a href="#competences" onClick={toggleMenu}>
                Projets
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
