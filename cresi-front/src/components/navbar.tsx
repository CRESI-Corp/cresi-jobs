import { useState } from "react";
import { Link } from "react-router-dom";

import '../styles/navbar.css';

import ico_head from '../assets/ico_head.png';
import ico_myaccount from '../assets/ico_myaccount.png';
import ico_candidature from '../assets/ico-candidature.png';
import ico_offers from '../assets/ico-offers.png';
import ico_asso from '../assets/ico-asso.png';
import ico_notif from '../assets/ico-notif.png';
import ico_contact from '../assets/ico-contact.png';


function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={`sidebar ${isOpen ? "open" : "close"}`}>
      <header>
        <div className="image-text">
          <span className="image">
            <a href="/account">
              <img src={ico_head} alt="ico_head" className="ico_head" />
            </a>
          </span>

          <div className="text logo-text">
            <a href="#">
              <span className="profession" >Déconnexion</span>
            </a>
            <a href="#">
              <i className="bx bx-log-out icon" ></i>
            </a>
          </div>
        </div>

        <i className="bx bx-chevron-right toggle" onClick={() => setIsOpen(!isOpen)}></i>
      </header>

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
