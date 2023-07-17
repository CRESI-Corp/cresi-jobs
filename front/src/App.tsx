import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
  useLocation,
} from "react-router-dom";
import Profile from "./pages/profile";
import Home from "./pages/home";
import Navbar from "./components/navbar";
import Contact from "./pages/contact";
import Connection from "./pages/connection";
import Account from "./pages/account";
import Hub from "./pages/hub";

function App() {
  const location = useLocation();
  const excludedPaths = ["/connection", "/hub"]; // Add other paths you want to exclude from the navbar

  const shouldRenderNavbar = !excludedPaths.includes(location.pathname);

  return (
    <body>
      {shouldRenderNavbar && (
        <header>
          <Navbar />
        </header>
      )}

      <div className="Cresi">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile/:id" element={<Profile />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/connection" element={<Connection />} />
          <Route path="/account" element={<Account />} />
          <Route path="/hub" element={<Hub />} />
        </Routes>
      </div>
    </body>
  );
}

export default App;
