/**
 * Creates a new element of the given tag.
 * @param {string} tag Element tag
 * @returns {HTMLElement}
 */
const E = tag => document.createElement(tag);

/**
 * Creates a new Heading element of the given size with the given text.
 * @param {number} size
 * @param {string} text
 * @returns {HTMLHeadingElement}
 */
const H = (size, text) => {
  const e = E(`h${size}`);
  e.textContent = text;
  return e;
};

/**
 *
 * @param {string} link
 * @param  {...any} children
 * @returns {HTMLAnchorElement}
 */
const A = (link, ...children) => {
  const e = E("a");
  e.setAttribute("href", link);
  children.forEach(c => e.appendChild(c));
  return e;
};

const root = document.getElementById("root");

/**
 *
 * @param {Project} project
 * @returns {HTMLElement}
 */
const ProjectCard = project => {
  const base = E("div");
  base.className = `card animated slideIn${[
    "Left",
    "Right",
    "Up",
    "Down"
  ].random()}`;

  if (typeof project.imageSrc === "string") {
    const img = E("img");
    img.setAttribute("src", project.imageSrc);
    img.setAttribute("alt", project.name);
    if (project.invert) img.setAttribute("class", "invert");
    base.appendChild(img);
  } else {
    const ph = H(1, project.name[0]);
    ph.className = "placeholder";
    base.appendChild(ph);
  }

  const container = E("div");
  container.className = "container";
  base.appendChild(container);

  container.appendChild(H(3, project.name));
  if (project.live) {
    container.appendChild(A(project.live, H(5, "View Live")));
  }
  if (project.source) {
    container.appendChild(A(project.source, H(5, "View Source")));
  }

  const description = E("p");
  description.textContent = project.description;
  base.appendChild(description);

  return base;
};

projects.forEach(p => {
  document.getElementById("cards").appendChild(ProjectCard(p));
});
