import { BrowserRouter as Router, Routes, Route, Link, Navigate } from "react-router-dom";
import Profile from "./pages/profile"
import Home from "./pages/home"
import Navbar from "./components/navbar";
import Contact from "./pages/contact";
import Connection from './pages/connection'
import Account from './pages/account'

function App() {
  return (
    <div className="Cresi flex flex-row">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/profile/:id' element={<Profile />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/connection' element={<Connection />} />
        <Route path='/account' element={<Account />} />
      </Routes>
    </div>
  );
}

export default App;
