document.getElementById("header_scroll").onclick = () =>
  document.querySelector("nav").scrollIntoView();

const root = $("#root");

/**
 * Creates a new element of the given tag.
 * @param {string} tag Element tag
 */
const E = tag => $(`<${tag}>`);

/**
 * Creates a new Heading element of the given size with the given text.
 * @param {number} size
 * @param {string} text
 */
const H = (size, text) => E(`h${size}`).text(text);

/**
 *
 * @param {string} link
 * @param  {...any} children
 */
const A = link => {
  return E("a")
    .attr("href", link)
    .attr("target", "_blank");
};

const Button = (link, text) => {
  return E("button")
    .text(text)
    .click(() => window.open(link, "_blank"));
};

/**
 *
 * @param {string} src
 * @param {string} alt
 */
const Img = (src, alt) => {
  return E("img")
    .attr("src", src)
    .attr("alt", alt);
};

/**
 *
 * @param {string} link
 * @param {string} name
 * @param {string} color
 * @param {string} logo
 * @returns {HTMLAnchorElement}
 */
const Badge = (link, name, color) => {
  return A(link)
    .append(
      Img(
        `https://img.shields.io/badge/${name}-${" "}-${color}?logo=${name.toLowerCase()}&style=for-the-badge`,
        name
      )
    )
    .addClass("badge");
};

/**
 * @param {Project} project
 */
const ProjectCard = project => {
  let open = false;

  const base = E("div").addClass(
    `card animated slideIn${["Left", "Right", "Up"].random()}`
  );

  base.append(
    typeof project.imageSrc === "string"
      ? Img(project.imageSrc, project.name).addClass(
          `thumbnail ${project.invert ? "invert" : ""}`
        )
      : base.append(H(1, project.name[0]).addClass("placeholder"))
  );

  // Details
  const container = E("div").addClass("content container");
  base.append(container);

  container.append(H(1, project.name));

  const view = E("div").addClass("row links");
  container.append(view);

  if (project.live) {
    view.append(Button(project.live, "View Live"));
  }
  if (project.source) {
    view.append(Button(project.source, "View Source"));
  }
  if (!(project.live && project.source)) {
    base.addClass("no-info");
  }

  // Descripption
  const description = E("p").text(project.description);
  container.append(description);

  // Extra details & screenshots
  const extra = E("div").addClass("extra");
  base.append(extra);

  if (project.screenshotSrc) {
    extra.append(Img(project.screenshotSrc, "screenshot"));
  }

  base.click(() => {
    if (project.screenshotSrc) {
      if (!open) {
        $(".card.open").each(function() {
          $(this).removeClass("open");
        });
        open = !open;
        base.addClass("open");
        document.querySelector(".open").scrollIntoView();
      } else {
        open = !open;
        base.removeClass("open");
        //document.querySelector("header").scrollIntoView();
      }
    }
  });

  return base;
};

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
