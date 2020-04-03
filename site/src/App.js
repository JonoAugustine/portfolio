import React from "react";
import { Badge, ProjectCard } from "./components";
import { projects } from "./Project";

function App() {
  return (
    <div id="app">
      <header className="banner">
        <div className="head">
          <section className="intro">
            <h1 className="brand">Jono Augustine</h1>
            <h3 className="tagline">Creating solutions to unsolved problems</h3>
          </section>
          <div id="badges" className="container fluid row"></div>
          <button
            id="header_scroll"
            className="scroller"
            onClick={() => {
              document.querySelector("nav").scrollIntoView();
            }}
          >
            My Projects
          </button>
        </div>
      </header>
      <nav className="navbar">
        <div className="container row">
          <h4>240-423-6950</h4>
          <h4>me@JonoAugustine.com</h4>
        </div>
      </nav>
      <section className="page">
        <div className="cards">
          {projects.map(p => (
            <ProjectCard project={p} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default App;
