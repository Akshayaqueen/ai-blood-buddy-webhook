// src/pages/Dashboard.tsx
import React from "react";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css";

const Dashboard: React.FC = () => {
  const navigate = useNavigate();

  const handleChat = () => {
    navigate("/chatbot");
  };

  return (
    <div className="dashboard-container">
      <h1>Welcome to AI Blood Buddy!</h1>

      <div className="card" onClick={() => alert("Stay hydrated! Drink a glass of water.")}>
        💧 Hydration Reminder
      </div>

      <div className="card" onClick={() => alert("Light walking helps circulation post-donation.")}>
        🚶 Recovery Exercise Tip
      </div>

      <button onClick={handleChat}>💬 Chat with Buddy</button>
    </div>
  );
};

export default Dashboard;
