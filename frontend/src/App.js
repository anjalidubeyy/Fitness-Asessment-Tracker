import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import GetStarted from "./pages/GetStarted";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import ContactUs from "./pages/ContactUs";
import Dashboard from "./pages/Dashboard";
import AboutUs from "./pages/AboutUs"; 
import Blog from "./pages/Blog";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/get-started" element={<GetStarted />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/contact-us" element={<ContactUs/>}/>
        <Route path="/about" element={<AboutUs />} /> 
        <Route path="/blog" element={<Blog/>}/>
      </Routes>
    </Router>
  );
};

export default App;
