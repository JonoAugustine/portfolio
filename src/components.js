import $ from "jquery";

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

  const base = E("div")
    .addClass(`card animated slideIn${["Left", "Right", "Up"].random()}`)
    .attr("data-name", project.name);

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

  // Descripption
  const description = E("p").text(project.description);
  container.append(description);

  // Extra details & screenshots
  let extra = null;

  if (project.live) {
    extra = E("div").addClass("extra");
    extra.append(
      E("iframe")
        .addClass("showcase")
        .attr("src", project.live)
    );
  } else if (project.screenshotSrc) {
    extra = E("div").addClass("extra");
    extra.append(Img(project.screenshotSrc, "screenshot").addClass("showcase"));
  }

  if (extra === null) {
    base.addClass("no-info");
  }

  base.click(() => {
    if (extra !== null) {
      if (!open) {
        base.append(extra);
        $(".card.open").each(function() {
          $(this).removeClass("open");
        });
        open = !open;
        base.addClass("open");
        setTimeout(
          () => document.querySelector(".open").scrollIntoView(),
          1500
        );
      } else {
        open = !open;
        base.removeClass("open");
        extra.remove();
      }
    }
  });

  return base;
};

export { E, H, A, Button, Img, Badge, ProjectCard };
