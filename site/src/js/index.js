import "./email"
import "./konami"
import projects from "./projects.json"
import { ProjectCard } from "./components"

// Load UI elements
const cards = document.getElementById("cards")

projects.map((p) => ProjectCard(p)).forEach((pc) => cards.appendChild(pc))