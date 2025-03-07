import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "../styles/Dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      {/* Header */}
      <header className="dashboard-header">
        <h1>Welcome Back, Anjali!</h1>
        <p>Track your progress and stay fit!</p>
      </header>

      {/* Quick Stats */}
      <div className="stats-container">
        <div className="stat-card">
          <h3>🔥 Calories Burned</h3>
          <p>1200 kcal</p>
        </div>
        <div className="stat-card">
          <h3>🏋️ Workouts Completed</h3>
          <p>5 this week</p>
        </div>
        <div className="stat-card">
          <h3>🚶 Steps Taken</h3>
          <p>8,500 today</p>
        </div>
      </div>

      {/* Suggested Workouts */}
      <div className="workouts-container">
        <h2>Suggested Workouts</h2>
        <ul>
          <li>💪 Strength Training</li>
          <li>🏃‍♂️ 30-Minute Cardio</li>
          <li>🧘 Yoga for Relaxation</li>
        </ul>
      </div>

      {/* Navigation */}
      <div className="dashboard-actions">
        <Link to="/profile-setup">
          <motion.button className="dashboard-btn" whileHover={{ scale: 1.1 }}>
            Update Profile
          </motion.button>
        </Link>
        <Link to="/workouts">
          <motion.button className="dashboard-btn" whileHover={{ scale: 1.1 }}>
            View Workouts
          </motion.button>
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
