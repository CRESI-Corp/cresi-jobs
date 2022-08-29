import './style/profile.css';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from "react-router-dom";
import Profile from "./pages/profile"
import Home from "./pages/home"
import Navbar from "./component/navbar";
import Contact from "./pages/contact";

function App() {
  return (
    <div className="Cresi" class="flex flex-row">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/profile/:id' element={<Profile />} />
        <Route path='/navbar' element={<Navbar/>} />
        <Route path='/contact' element={<Contact/>} />

      </Routes>
    </div>
  );
}

export default App;
