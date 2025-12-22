import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../src/components/Login";
import Signup from "../src/components/Signup";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
}
