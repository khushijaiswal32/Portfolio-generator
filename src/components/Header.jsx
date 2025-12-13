import React from "react";

export default function Header() {
    const toggleDark = ()=>{
        document.body.classList.toggle("dark");
    };
  return (
    <header className="site-header">
      <div className="container">
        <h2 className="logo">Portfolio Generator</h2>
        <nav>
            <button onclick ={toggleDark} className ="dark-btn"></button>
          <a href="#builder">Builder</a>
          <a href="#preview">Preview</a>
          <a href="#download">Download</a>
        </nav>
      </div>
    </header>
  );
}
