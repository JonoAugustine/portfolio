import { random } from "./util";

/**
 * Creates a new element of the given tag.
 * @param {string} tag Element tag
 * @returns {HTMLElement}
 */
const E = (tag) => document.createElement(tag);

/**
 * Creates a new Heading element of the given size with the given text.
 * @param {number} size
 * @param {string} text
 */
const H = (size, text) => {
  const e = E(`h${size}`);
  e.innerText = text;
  return e;
};

const Button = (link, text) => {
  const e = E("button");
  e.innerText = text;
  e.addEventListener("click", () => window.open(link, "_blank"));
  return e;
};

/**
 *
 * @param {string} src
 * @param {string} alt
 */
const Img = (src, alt) => {
  const i = E("img");
  i.setAttribute("src", src);
  i.setAttribute("alt", alt);
  i.setAttribute("loading", "lazy");
  i.setAttribute("decoding", "async");
  return i;
};

/** Wires the hero's scroll-to-projects button. */
export const initHeaderScroll = () => {
  document
    .getElementById("header_scroll")
    .addEventListener("click", () => document.querySelector("nav").scrollIntoView());
};

/**
 * @param {Project} project
 */
export const ProjectCard = (project) => {
  const base = E("div");
  base.className = `card animated slideIn${random(["Left", "Right", "Up"])}`;

  let thumbnail;
  if (project.imageSrc) {
    thumbnail = Img(project.imageSrc, project.name);
    thumbnail.classList.add("thumbnail");
    if (project.invert) thumbnail.classList.add("invert");
  } else {
    thumbnail = H(1, project.name[0]);
    thumbnail.classList.add("placeholder");
  }

  base.appendChild(thumbnail);

  // Details
  const container = E("div");
  container.classList.add("content", "container");
  base.append(container);

  container.appendChild(H(1, project.name));

  const view = E("div");
  view.classList.add("row", "links");
  container.append(view);

  if (project.live) {
    view.appendChild(Button(project.live, "View Live"));
  }

  if (project.source) {
    view.appendChild(Button(project.source, "View Source"));
  }

  // Description
  const description = E("p");
  description.innerText = project.description;
  container.appendChild(description);

  // Tools Used section
  if (project.tools) {
    const tools = E("p");
    tools.innerText = `Tools: ${project.tools.join(", ")}`;
    tools.classList.add("tools");
    container.appendChild(tools);
  }

  return base;
};
