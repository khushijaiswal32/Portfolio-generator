import JSZip from "jszip";
import { saveAs } from "file-saver";

export async function downloadPortfolio(data) {
  const isTemplate2 = data.template === "template2";
  const zip = new JSZip();

  // ----- HTML CONTENT -----
  const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<title>${data.name || "Portfolio"}</title>
<link rel="stylesheet" href="style.css" />
</head>

<body>
  <section class="hero">
    <h1>${data.name || "Your Name"}</h1>
    <h3>${data.role || ""}</h3>
    <p>${data.about || ""}</p>

    <div class="social-links">
      ${data.github ? `<a href="${data.github}">GitHub</a>` : ""}
      ${data.linkedin ? `<a href="${data.linkedin}">LinkedIn</a>` : ""}
    </div>
  </section>

  <section>
    <h2>Skills</h2>
    <ul class="skills-list">
      ${
        data.skills
          ?.map((skill) => `<li class="skill-item">${skill}</li>`)
          .join("") || "<li>Skill 1</li>"
      }
    </ul>
  </section>

  <section>
    <h2>Projects</h2>
    <div class="project-grid">
      ${
        data.projects
          ?.map(
            (p) => `
        <div class="project-card">
          <h3>${p.title}</h3>
          <p>${p.description}</p>
          <p><b>Tech:</b> ${p.tech}</p>
          <div class="project-links">
            ${p.github ? `<a href="${p.github}">GitHub</a>` : ""}
            ${p.live ? `<a href="${p.live}">Live</a>` : ""}
          </div>
        </div>
      `
          )
          .join("") || ""
      }
    </div>
  </section>

</body>
</html>
`;

  // ----- CSS CONTENT -----
  const cssContent = isTemplate2
    ? `
    //  TEMPLATE 2 CSS 
body {
  font-family: Arial;
  margin: 0;
  padding: 20px;
  background: #f3f4f6;
}

header {
  text-align: center;
  background: #111;
  color: white;
  padding: 40px;
  border-radius: 12px;
}

section {
  background: white;
  padding: 20px;
  margin-top: 20px;
  border-radius: 10px;
}
.tags span {
  display: inline-block;
  background: #111;
  color: white;
  padding: 6px 10px;
  border-radius: 5px;
  margin: 5px;
}

.project {
  border-bottom: 1px solid #ddd;
  padding: 10px 0;
}
`
    : `

body {
  font-family: Arial;
  margin: 0;
  padding: 20px;
  background: #f3f4f6;
}

.hero {
  background: #2563eb;
  color: white;
  padding: 40px;
  border-radius: 10px;
  text-align: center;
}

.skills-list {
  list-style: none;
  padding: 0;
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}

.skill-item {
  background: #2563eb;
  padding: 5px 10px;
  color: white;
  border-radius: 6px;
}

.project-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}

.project-card {
  background: white;
  padding: 15px;
  border-radius: 10px;
  border: 1px solid #ddd;
}
`;

  // Add files to ZIP
  zip.file("index.html", htmlContent);
  zip.file("style.css", cssContent);

  const blob = await zip.generateAsync({ type: "blob" });
  saveAs(blob, "portfolio.zip");
}
