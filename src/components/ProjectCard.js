import React from "react";
import { random } from "../util";

const ProjectCard = ({ project }) => {
  const openLive = e => {
    e.preventDefault();
    window.open(project.live, "_blank");
  };
  const openSource = e => {
    e.preventDefault();
    window.open(project.source, "_blank");
  };

  return (
    <div
      className={`card ${
        project.screenshotSrc ? "no-info" : ""
      } animated slideIn${random(["Left", "Right", "Up"])}`}
    >
      {project.imageSrc ? (
        <img
          src={project.imageSrc}
          alt={project.name}
          className={`thumbnail ${project.invert ? "invert" : ""}`}
        />
      ) : (
        <h1 className="placeholder">{project.name[0]}</h1>
      )}
      <div className="content container">
        <h1>{project.name}</h1>
        <div className="row links">
          {project.live ? <button onClick={openLive}>View Live</button> : ""}
          {project.source ? (
            <button onClick={openSource}>View Source</button>
          ) : (
            ""
          )}
        </div>
        <p>{project.description}</p>
      </div>
      {project.screenshotSrc ? (
        <div className="extra">
          <img src={project.screenshotSrc} alt="screenshot" />
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default ProjectCard;
