import React from "react";
import "../styles/AboutUs.css";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        <h1 className="gradient-text">About FAT</h1>
        <p>
          Fitness Assessment Tracker (FAT) is a revolutionary web platform designed to help individuals track and analyze their fitness journey with AI-powered insights. Our mission is to provide users with real-time analytics, personalized recommendations, and an engaging experience to achieve their health goals effectively.
        </p>
        <p>
          Unlike traditional fitness tracking apps, FAT goes beyond basic logging. Our AI-driven approach provides deep insights into workout efficiency, progress trends, and goal setting, ensuring users get the best out of their fitness routines.
        </p>
        <h2 className="gradient-text">Meet the Founders</h2>
        <div className="founder-list">
          <div className="founder-card">
            <h3>Anjali Dubey</h3>
            <p>Co-Founder | 3rd Year B.Tech CSE (Data Science), SRM University</p>
          </div>
          <div className="founder-card">
            <h3>Harshit Sharma</h3>
            <p>Co-Founder | 3rd Year B.Tech CSE (Data Science), SRM University</p>
          </div>
          <div className="founder-card">
            <h3>Saaz Bhargava</h3>
            <p>Co-Founder | 3rd Year B.Tech CSE (Data Science), SRM University</p>
          </div>
        </div>
        <p>
          We believe in making fitness tracking seamless, data-driven, and fun. Join us on this journey towards a healthier future!
        </p>
      </div>
    </div>
  );
};

export default About;
