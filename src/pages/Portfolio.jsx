import React, { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "../styles/Portfolio.css";

function Portfolio() {
  const { isLoggedIn } = useAuth();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [projects, setProjects] = useState([]);

  // Laden der gespeicherten Projekte beim Start
  useEffect(() => {
    const saved = localStorage.getItem("portfolioProjects");
    if (saved) {
      setProjects(JSON.parse(saved));
    }
  }, []);

  // Speichern der Projekte, wenn sich die Liste ändert
  useEffect(() => {
    localStorage.setItem("portfolioProjects", JSON.stringify(projects));
  }, [projects]);

  if (!isLoggedIn) return <Navigate to="/login" replace />;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !description) {
      alert("Bitte alle Felder ausfüllen.");
      return;
    }

    const newProject = {
      id: Date.now(),
      title,
      description,
    };

    setProjects((prev) => [...prev, newProject]);
    setTitle("");
    setDescription("");
  };

  const handleDelete = (id) => {
    const updated = projects.filter((project) => project.id !== id);
    setProjects(updated);
  };

  return (
    <div className="portfolio-container">
      <h1>Willkommen im Portfolio</h1>

      <form className="portfolio-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Projekt-Titel"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Projekt-Beschreibung"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button type="submit">Projekt hinzufügen</button>
      </form>

      <div className="portfolio-list">
        <h2>Deine Projekte:</h2>
        {projects.length === 0 && <p>Noch keine Projekte vorhanden.</p>}
        {projects.map((project) => (
          <div className="portfolio-project" key={project.id}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <button onClick={() => handleDelete(project.id)}>Löschen</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
