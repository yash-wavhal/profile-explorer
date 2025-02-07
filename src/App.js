import "./global.css";
import toast, { Toaster } from "react-hot-toast";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Profiles from "./pages/Profiles";
import Home from "./pages/Home";
import Admin from "./pages/Admin";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="profiles" element={<Profiles />} />
          <Route path="admin" element={<Admin />} />
        </Routes>
        {/* notifiactions  */}
        <Toaster />
      </Router>
    </>
  );
}

export default App;
