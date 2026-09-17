import "./konami";
import projects from "./projects";
import { ProjectCard, initHeaderScroll } from "./components";

// Load UI elements
initHeaderScroll();

const cards = document.getElementById("cards")!;

projects.map((p) => ProjectCard(p)).forEach((pc) => cards.appendChild(pc));
