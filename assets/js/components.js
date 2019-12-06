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

/**
 *
 * @param {string} src
 * @param {string} alt
 * @returns {HTMLImageElement}
 */
const Img = (src, alt) => {
  const e = E("img");
  e.setAttribute("src", src);
  e.setAttribute("alt", alt);
  return e;
};

const root = document.getElementById("root");

/**
 *
 * @param {string} link
 * @param {string} name
 * @param {string} color
 * @param {string} logo
 * @returns {HTMLAnchorElement}
 */
const Badge = (link, name, color) => {
  const e = A(
    link,
    Img(
      `https://img.shields.io/badge/${name}-${" "}-${color}?logo=${name.toLowerCase()}&style=for-the-badge`,
      name
    )
  );
  e.className = "badge";
  return e;
};

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
    "Up"
    //"Down"
  ].random()}`;

  if (typeof project.imageSrc === "string") {
    const img = E("img");
    img.setAttribute("src", project.imageSrc);
    img.setAttribute("alt", project.name);
    img.className += `thumbnail ${project.invert ? "invert" : ""}`;
    base.appendChild(img);
  }
  //else {
  //  const ph = H(1, project.name[0]);
  //  ph.className = "placeholder";
  //  base.appendChild(ph);
  //}

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

const badges = document.getElementById("badges");
badges.appendChild(
  Badge("https://github.com/JonoAugustine", "GitHub", "white")
);
badges.appendChild(
  Badge("https://gitlab.com/JonoAugustine", "GitLab", "orange")
);
badges.appendChild(
  Badge(
    "https://www.linkedin.com/in/jonathan-augustine-14678b124/",
    "LinkedIn",
    "blue"
  )
);
