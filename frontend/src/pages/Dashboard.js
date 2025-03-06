import React, { useState, useEffect } from "react";
import axios from "axios";

const Dashboard = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      const response = await axios.get("/api/user", {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
      });
      setUser(response.data);
    };
    fetchUserData();
  }, []);

  return user ? (
    <div className="dashboard">
      <h1>Welcome, {user.name}</h1>
      <div className="metrics">
        <p>Height: {user.height} cm</p>
        <p>Weight: {user.weight} kg</p>
        <p>BMI: {user.bmi}</p>
      </div>
    </div>
  ) : (
    <p>Loading...</p>
  );
};

export default Dashboard;
