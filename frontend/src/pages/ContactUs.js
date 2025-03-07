import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "../styles/ContactUs.css";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Log the submitted data before resetting
    alert("Message sent sucessfully!We'll get back to you soon.")

    // Clear the form after submission
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className="contact-us-container">
      <motion.div
        className="form-box"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="gradient-text">Contact Us</h1>
        <p>We'd love to hear from you!</p>
        
        <form onSubmit={handleSubmit}>
          <input 
            type="text" 
            name="name" 
            placeholder="Your Name" 
            value={formData.name}  // Bind input to state
            onChange={handleChange} 
            required 
          />
          
          <input 
            type="email" 
            name="email" 
            placeholder="Your Email" 
            value={formData.email} 
            onChange={handleChange} 
            required 
          />
          
          <textarea 
            name="message" 
            placeholder="Your Message" 
            value={formData.message} 
            onChange={handleChange} 
            required 
          />

          <motion.button 
            type="submit" 
            className="contact-btn" 
            whileHover={{ scale: 1.1 }} 
            whileTap={{ scale: 0.9 }}
          >
            Send Message
          </motion.button>
        </form>

        <Link to="/" className="back-link">Back to Home</Link>
      </motion.div>
    </div>
  );
};

export default ContactUs;
