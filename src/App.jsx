import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../src/components/Login";
import Signup from "../src/components/Signup";
import Lps from "../src/components/Lps";
import LandingPage from "./components/Landingpage";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Lps />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
}
