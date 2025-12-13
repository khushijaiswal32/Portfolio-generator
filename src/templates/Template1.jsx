import React from "react";
import "./template1.css";

export default function Template1({ data }) {
  if (!data) return null;

  return (
    <div className="template1">
      {/* Hero Section */}
      <section className="hero">
        <h1>{data.name || "Your Name"}</h1>
        <h3>{data.role || "Your Role"}</h3>
        <p>{data.about || "Write something about yourself..."}</p>

        <div className="social-links">
          {data.github && <a href={data.github}>GitHub</a>}
          {data.linkedin && <a href={data.linkedin}>LinkedIn</a>}
        </div>
      </section>

      {/* Skills */}
      <section className="skills-section">
        <h2>Skills</h2>
        <div className="skills-list">
          {(data.skills?.length > 0 ? data.skills : ["Skill 1", "Skill 2"]).map((s, i) => (
            <span key={i} className="skill-item">{s}</span>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section className="projects-section">
        <h2>Projects</h2>

        <div className="project-grid">
          {(data.projects?.length > 0 ? data.projects : [
            { title: "Project Title", description: "Description here", tech: "Tech stack" }
          ]).map((p, i) => (
            <div key={i} className="project-card">
              <h3>{p.title}</h3>
              <p>{p.description}</p>
              <p><b>Tech:</b> {p.tech}</p>

              <div className="project-links">
                {p.github && <a href={p.github} target="_blank">GitHub</a>}
                {p.live && <a href={p.live} target="_blank">Live</a>}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
