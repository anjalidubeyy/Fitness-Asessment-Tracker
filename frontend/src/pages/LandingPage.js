import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaRunning, FaChartLine, FaHeartbeat, FaUserShield } from "react-icons/fa";
import "../styles/LandingPage.css"; // Import the external CSS

const LandingPage = () => {
  return (
    <div className="landing-container">
      {/* Hero Section */}
      <motion.div
        className="hero"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1>Track Your Fitness, Elevate Your Life</h1>
        <p>Stay on top of your health with AI-driven insights and seamless tracking.</p>
        <Link to="/get-started">
          <motion.button className="cta-btn" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            Get Started
          </motion.button>
        </Link>
      </motion.div>

      {/* Feature Highlights */}
      <div className="feature-section">
        <div className="feature">
          <FaRunning className="icon" />
          <h3>Workout Tracking</h3>
          <p>Log your workouts and analyze progress effortlessly.</p>
        </div>
        <div className="feature">
          <FaChartLine className="icon" />
          <h3>Progress Analytics</h3>
          <p>Visualize your fitness journey with real-time stats.</p>
        </div>
        <div className="feature">
          <FaHeartbeat className="icon" />
          <h3>AI Health Insights</h3>
          <p>Get personalized fitness recommendations.</p>
        </div>
        <div className="feature">
          <FaUserShield className="icon" />
          <h3>Data Privacy</h3>
          <p>Your health data is secure with us.</p>
        </div>
      </div>

      {/* Testimonials */}
      <div className="testimonial-section">
        <h2>What Our Users Say</h2>
        <div className="testimonial">
          <p>“This app transformed my fitness journey! The AI suggestions are game-changers.”</p>
          <span>- Alex Johnson</span>
        </div>
        <div className="testimonial">
          <p>“Super easy to use and keeps me motivated every day!”</p>
          <span>- Sarah Williams</span>
        </div>
      </div>

      {/* Final CTA (Join Us) */}
      <div className="final-cta">
        <h2>Start Your Fitness Journey Today</h2>
        <Link to="/join-us">
          <motion.button className="cta-btn" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            Join Us
          </motion.button>
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
