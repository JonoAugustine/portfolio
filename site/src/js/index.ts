import "./konami";
import projects from "./projects";
import { ProjectCard } from "./components";

// Load UI elements
const cards = document.getElementById("cards")!;

projects.map((p) => ProjectCard(p)).forEach((pc) => cards.appendChild(pc));
