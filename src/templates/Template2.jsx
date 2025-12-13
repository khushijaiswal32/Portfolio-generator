import React from "react";
import "./template2.css";

export default function Template2({ data }) {
  return (
    <div className="template2">
      <header>
        <h1>{data.name || "Your Name"}</h1>
        <p>{data.role || "Your Role"}</p>
      </header>

      <section className="about">
        <h2>About Me</h2>
        <p>{data.about || "Write about yourself..."}</p>
      </section>

      <section className="skills">
        <h2>Skills</h2>
        <div className="tags">
          {data.skills.length > 0
            ? data.skills.map((s, i) => <span key={i}>{s}</span>)
            : "Add skills"}
        </div>
      </section>

      <section className="projects">
        <h2>Projects</h2>
        {data.projects.length > 0 ? (
          data.projects.map((p, i) => (
            <div className="project" key={i}>
              <h3>{p.title}</h3>
              <p>{p.description}</p>
              <p><b>Tech:</b> {p.tech}</p>

              <div className="links">
                {p.github && <a href={p.github}>GitHub</a>}
                {p.live && <a href={p.live}>Live</a>}
              </div>
            </div>
          ))
        ) : (
          <p>No projects added.</p>
        )}
      </section>
    </div>
  );
}
