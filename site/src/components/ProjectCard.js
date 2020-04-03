import React from "react";
import { random } from "../util";

const ProjectCard = ({ project }) => {
  return (
    <div className={`card animated slideIn${random(["Left", "Right", "Up"])}`}>
      {project.imageSrc ? (
        <img
          src={project.imageSrc}
          alt={project.name}
          className={`thumbnail ${project.invert ? "invert" : ""}`}
        />
      ) : (
        <h1 className="placeholder">{project.name[0]}</h1>
      )}
    </div>
  );
};

export default ProjectCard;
