import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "../styles/JoinUs.css";

const JoinUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("User Registered:", formData);
  };

  return (
    <div className="join-us-container">
      <motion.div
        className="form-box"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1>Join Us</h1>
        <p>Create an account to get started!</p>
        <form onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Full Name" onChange={handleChange} required />
          <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
          <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
          <input type="password" name="confirmPassword" placeholder="Confirm Password" onChange={handleChange} required />
          
          <motion.button type="submit" className="join-btn" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            Sign Up
          </motion.button>
        </form>
        <p>Already have an account? <Link to="/login">Log in</Link></p>
      </motion.div>
    </div>
  );
};

export default JoinUs;
