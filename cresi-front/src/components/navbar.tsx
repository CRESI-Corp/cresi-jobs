import { Link } from "react-router-dom";
import { UserActions } from "./navbar/navbarComponents"

import '../styles/navbar/navbar.css';
import React, { useState } from "react";

import ico_head from '../assets/ico_head.png';


const Navbar: React.FC = () => {

  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav>

      <UserActions profilePicture={ico_head}
        isOpen={isOpen}
        callback={handleToggle}
      />

      <div className="menu-bar">
        <div className="menu">
          <ul className="menu-links">
            <li className="nav-link">
              <a href="/account">
                <i className="bx bx-user icon" ></i>

                <span className="text nav-text">Mon compte</span>
              </a>
            </li>

            <li className="nav-link">
              <a href="#">
                <i className="bx bx-link icon" ></i>
                <span className="text nav-text">Mes candidatures</span>
              </a>
            </li>

            <li className="nav-link">
              <a href="#">
                <i className="bx bx-file-find icon" ></i>
                <span className="text nav-text">Les offres d'emploi</span>
              </a>
            </li>

            <li className="nav-link">
              <a href="#">
                <i className="bx bx-hive icon" ></i>
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
              <i className="bx bx-paper-plane icon" ></i>
              <span className="text nav-text">Nous contacter</span>
            </a>
          </li>
        </div>
      </div>

    </nav>
  );
}

export default Navbar;
