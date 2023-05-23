import { BrowserRouter as Router, Routes, Route, Link, Navigate } from "react-router-dom";
import Profile from "../pages/profile"
import Home from "../pages/home"

function routes() {
    <div className="Cresi">
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/profile' element={<Profile />} />

        </Routes>
    </div>
}

export default routes