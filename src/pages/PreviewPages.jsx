import {downloadPortfolio} from "../utils/downloadHtml.js";
import React from "react";
import Template1 from "../templates/Template1";
import Template2 from "../templates/Template2";
import "../styles/animation.css"
export default function PreviewPages({ form }) {
  return (
    <div id="preview">
      <h2 style={{ textAlign: "center", marginTop: "20px" }}>Live Preview</h2>
<button
  className="btn-download"
  onClick={() => downloadPortfolio(form)}
  style={{
    margin: "20px auto",
    display: "block",
    padding: "10px 20px",
    background: "#2563eb",
    color: "white",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer"
  }}
>
  Download Portfolio (HTML/CSS)
</button>
<div className="fade">
{form.template === "template1" && <Template1 data={form} />}
{form.template === "template2" && <Template2 data={form} />}
</div>
      
    </div>
  );
}
