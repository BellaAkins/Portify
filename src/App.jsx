import { useState } from "react";
import "./App.css";
import Login from "./components/Login";
import Signup from "./Signup";

function App() {
  return (
    <>
      <Login />
      <Signup />
    </>
  );
}

export default App;

{
  /*
  import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./LandingPage";
import Signup from "./Signup";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

  
  */
}
