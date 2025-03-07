import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "../styles/GetStarted.css";

const GetStarted = () => {
  return (
    <div className="get-started-container">
      <motion.div
        className="intro-section"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1>Welcome to Your Fitness Journey!</h1>
        <p>Set up your profile and start tracking your progress today.</p>
      </motion.div>

      <div className="steps-container">
        <div className="step">
          <h3>Create Your Profile</h3>
          <p>Enter your details like age, weight, height, and fitness goals.</p>
        </div>
        <div className="step">
          <h3>Choose Your Workout Plan</h3>
          <p>Personalized workout suggestions based on your preferences.</p>
        </div>
        <div className="step">
          <h3>Track Your Progress</h3>
          <p>Analyze your performance and stay motivated!</p>
        </div>
      </div>

      {/* New Buttons for Sign Up & Login */}
      <div className="auth-buttons">
        <Link to="/signup">
          <motion.button className="signup-btn" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            Sign Up
          </motion.button>
        </Link>

        <Link to="/login">
          <motion.button className="login-btn" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            Login
          </motion.button>
        </Link>
      </div>
    </div>
  );
};

export default GetStarted;
