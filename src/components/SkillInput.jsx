import React, { useState } from "react";

export default function SkillInput({ form, setForm }) {
  const [skill, setSkill] = useState("");

  const addSkill = () => {
    if (skill.trim() === "") return;
    setForm(prev => ({
      ...prev,
      skills: [...prev.skills, skill]
    }));
    setSkill("");
  };

  const removeSkill = (index) => {
    setForm(prev => ({
      ...prev,
      skills: prev.skills.filter((_, i) => i !== index)
    }));
  };

  return (
    <div className="form-section">
      <h3>Skills</h3>

      <div style={{ display: "flex", gap: "10px" }}>
        <input
          type="text"
          placeholder="Add a skill"
          value={skill}
          onChange={(e) => setSkill(e.target.value)}
        />
        <button className="btn-secondary" onClick={addSkill}>Add</button>
      </div>

      <ul>
        {form.skills.map((s, i) => (
          <li key={i}>
            {s}
            <button className="remove-btn" onClick={() => removeSkill(i)}>x</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
