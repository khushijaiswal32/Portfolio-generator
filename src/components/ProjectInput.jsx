import React, { useState } from "react";

export default function ProjectInput({ form, setForm }) {
  const [project, setProject] = useState({
    title: "",
    description: "",
    tech: "",
    github: "",
    live: ""
  });

  const updateProjectField = (field, value) => {
    setProject(prev => ({ ...prev, [field]: value }));
  };

  const addProject = () => {
    if (!project.title) return;

    setForm(prev => ({
      ...prev,
      projects: [...prev.projects, project]
    }));

    // reset form
    setProject({
      title: "",
      description: "",
      tech: "",
      github: "",
      live: ""
    });
  };

  const removeProject = (index) => {
    setForm(prev => ({
      ...prev,
      projects: prev.projects.filter((_, i) => i !== index)
    }));
  };

  return (
    <div className="form-section">
      <h3>Projects</h3>

      <label>Project Title:</label>
      <input
        type="text"
        value={project.title}
        onChange={(e) => updateProjectField("title", e.target.value)}
      />

      <label>Description:</label>
      <textarea
        rows="2"
        value={project.description}
        onChange={(e) => updateProjectField("description", e.target.value)}
      />

      <label>Tech Stack:</label>
      <input
        type="text"
        value={project.tech}
        onChange={(e) => updateProjectField("tech", e.target.value)}
      />

      <label>GitHub Link:</label>
      <input
        type="text"
        value={project.github}
        onChange={(e) => updateProjectField("github", e.target.value)}
      />

      <label>Live Link (optional):</label>
      <input
        type="text"
        value={project.live}
        onChange={(e) => updateProjectField("live", e.target.value)}
      />

      <button className="btn-secondary" onClick={addProject}>
        Add Project
      </button>

      <ul>
        {form.projects.map((p, i) => (
          <li key={i}>
            <b>{p.title}</b> – {p.tech}
            <button className="remove-btn" onClick={() => removeProject(i)}>x</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
