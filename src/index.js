import $ from "jquery";
import { projects } from "./Project";
import { Badge, ProjectCard } from "./components";

import "animate.css";
import "./style/normalize.css";
import "./style/index.scss";

$("#cards").append(...projects.map(p => ProjectCard(p)));

const badges = $("#badges");
badges.append(Badge("https://github.com/JonoAugustine", "GitHub", "white"));
badges.append(Badge("https://gitlab.com/JonoAugustine", "GitLab", "orange"));
badges.append(
  Badge(
    "https://www.linkedin.com/in/jonathan-augustine-14678b124/",
    "LinkedIn",
    "blue"
  )
);

badges.append(Badge("./assets/images/JonoAugustineResume.pdf", "Résumé"));
