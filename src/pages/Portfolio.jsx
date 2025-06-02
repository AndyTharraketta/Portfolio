// src/pages/Portfolio.jsx
import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Portfolio() {
  const { isLoggedIn } = useAuth();

  if (!isLoggedIn) return <Navigate to="/login" replace />;

  return (
    <div>
      <h1>Willkommen im Portfolio</h1>
      <p>Dies ist ein geschützter Bereich.</p>
    </div>
  );
}

export default Portfolio;
