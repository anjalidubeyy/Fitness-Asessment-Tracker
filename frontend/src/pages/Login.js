import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import "../styles/Auth.css";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("User Logged In:", formData);
    navigate("/dashboard"); // Redirect existing users to dashboard
  };

  return (
    <div className="auth-container">
      <motion.div
        className="auth-box"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1>Login</h1>
        <p>Welcome back! Log in to continue.</p>
        <form onSubmit={handleSubmit}>
          <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
          <input type="password" name="password" placeholder="Password" onChange={handleChange} required />

          <motion.button type="submit" className="auth-btn" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            Log In
          </motion.button>
        </form>
        <p>Don't have an account? <Link to="/signup">Sign up</Link></p>
      </motion.div>
    </div>
  );
};

export default Login;
