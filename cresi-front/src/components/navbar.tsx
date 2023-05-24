import { Link } from "react-router-dom";
import React, { useState } from "react";

import "../styles/navbar/navbar.css";
import ico_head from "../assets/ico_head.png";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  

  return (
    <nav className={`sidebar ${isOpen ? "open" : "close"}`}>
      <header>
        <div className="image-text">
          <span className="image">
            <a href="#">
              <img src={ico_head} alt="" />
            </a>
          </span>

          <div className="text logo-text">
            <a href="/connection">
              <span className="profession">Deconnexion</span>
            </a>
            <a href="#">
              <i className="bx bx-log-out icon"></i>
            </a>
          </div>
        </div>

        <i className={`bx ${isOpen ? "bx-chevron-left" : "bx-chevron-right"} toggle`} onClick={toggleNavbar}></i>
      </header>

      <div className="menu-bar">
        <div className="menu">
          <ul className="menu-links">
            <li className="nav-link">
              <a href="/account">
                <i className="bx bx-user icon"></i>
                <span className="text nav-text">Mon compte</span>
              </a>
            </li>

            <li className="nav-link">
              <a href="#">
                <i className="bx bx-link icon"></i>
                <span className="text nav-text">Mes candidatures</span>
              </a>
            </li>

            <li className="nav-link">
              <a href="#">
                <i className="bx bx-file-find icon"></i>
                <span className="text nav-text">Les offres d'emploi</span>
              </a>
            </li>

            <li className="nav-link">
              <a href="#">
                <i className="bx bx-hive icon"></i>
                <span className="text nav-text">Les associations</span>
              </a>
            </li>

            <li className="nav-link">
              <a href="#">
                <i className="bx bx-bell icon"></i>
                <span className="text nav-text">Notifications</span>
              </a>
            </li>
          </ul>
        </div>

        <div className="bottom-content">
          <li className="">
            <a href="#">
              <i className="bx bx-paper-plane icon"></i>
              <span className="text nav-text">Nous contacter</span>
            </a>
          </li>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
