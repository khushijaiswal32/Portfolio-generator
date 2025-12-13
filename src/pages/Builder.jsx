import React, { useState } from "react";
import SkillInput from "../components/SkillInput";
import ProjectInput from "../components/ProjectInput";

export default function Builder({form , setForm}) {

  // Update simple text fields
  const updateField = (field, value) => {
    setForm(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div id="builder" style={{ padding: "1.5rem" }}>
      <h2>Portfolio Builder</h2>
      <p>Fill the details below to generate your portfolio.</p>

      {/* Basic Info */}
      <div className="form-section">
        <label>Name:</label>
        <input
          type="text"
          value={form.name}
          onChange={(e) => updateField("name", e.target.value)}
        />

        <label>Role (e.g., Frontend Developer):</label>
        <input
          type="text"
          value={form.role}
          onChange={(e) => updateField("role", e.target.value)}
        />

        <label>About You:</label>
        <textarea
          rows="4"
          value={form.about}
          onChange={(e) => updateField("about", e.target.value)}
        />
      </div>

      {/* Skills */}
      <SkillInput form={form} setForm={setForm} />

      {/* Projects */}
      <ProjectInput form={form} setForm={setForm} />

      {/* Social Links */}
      <div className="form-section">
        <label>GitHub:</label>
        <input
          type="text"
          value={form.github}
          onChange={(e) => updateField("github", e.target.value)}
        />

        <label>LinkedIn:</label>
        <input
          type="text"
          value={form.linkedin}
          onChange={(e) => updateField("linkedin", e.target.value)}
        />
      </div>

      <br />
      <div className="form-section">
  <h3>Select Template</h3>

  <select
    value={form.template}
    onChange={(e) => setForm(prev => ({ ...prev, template: e.target.value }))}
  >
    <option value="template1">Template 1 (Blue Modern)</option>
    <option value="template2">Template 2 (Minimal Clean)</option>
  </select>
</div>

      <button className="btn-primary">
        Save & Preview
      </button>
    </div>
  );
}
