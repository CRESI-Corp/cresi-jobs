import { BrowserRouter as Router, Routes, Route, Link, Navigate } from "react-router-dom";
import Profile from "./pages/profile"
import Home from "./pages/home"
import Navbar from "./components/navbar";
import Contact from "./pages/contact";
import Connection from './pages/connection'
import Account from './pages/account'
import Offers from './pages/offers'
import Candidacy from './pages/candidacy'
import Inscriptionstudent from './pages/inscriptionstudent'

import React, { useState } from "react";
import { useLocation } from "react-router-dom";



function App() {
  const location = useLocation();
  const hideNavbar = location.pathname === "/connection" || location.pathname === "/inscriptionstudent"; // Vérifie si l'URL correspond à "/connection" ou "/account"

  return (
    <body>
      <header>
      {!hideNavbar && <Navbar />} {/* Condition pour afficher la navbar */}
      </header>

      <div className="Cresi">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/profile/:id' element={<Profile />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/connection' element={<Connection />} />
          <Route path='/account' element={<Account />} />
          <Route path='/offers' element={<Offers />} />
          <Route path='/candidacy' element={<Candidacy />} />
          <Route path='/inscriptionstudent' element={<Inscriptionstudent />} />
        </Routes>
      </div>
    </body>
  );
}

export default App;
