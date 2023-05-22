import { Link } from "react-router-dom";
//import { UserActions } from "./navbar/navbarComponents"

import "../styles/navbar/navbar.css";
import React, { useState } from "react";

import ico_head from "../assets/ico_head.png";

const Navbar: React.FC = () => {
  return (
    <nav className="sidebar close">
      <header>
      <div class="image-text">
                <span class="image">
                    <a href="#">
                    <img src={ico_head} alt=""></img>
                    </a>
                </span>

                <div class="text logo-text">
                    <a href="#">
                    <span class="profession">Deconnexion</span></a>
                    <a href="#">
                    <i class='bx bx-log-out icon' ></i></a>
                </div>
            </div>

            <i class='bx bx-chevron-right toggle'></i>
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
