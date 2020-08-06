import { random } from "./util";

document.getElementById("header_scroll").onclick = () =>
  document.querySelector("nav").scrollIntoView();
document.getElementById("btn_contact").onclick = () =>
  document.querySelector("form").scrollIntoView();

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

/**
 *
 * @param {string} link
 * @param  {...any} children
 */
const A = (link) => {
  const a = E("a");
  a.setAttribute("href", link);
  a.setAttribute("target", "_blank");
  return a;
};

const Button = (link, text) => {
  const e = E("button");
  e.innerText = text;
  e.onclick = () => window.open(link, "_blank");
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
  return i;
};

export const Modal = (parent, autoClose, showTimeout) => {
  const modal = E("div");
  modal.classList.add("modal", "center", "closed");

  const icon = E("i");
  icon.classList.add("fas", "fa-times", "exit");

  icon.onclick = () => {
    modal.classList.add("closed");
    setTimeout(() => modal.remove(), showTimeout);
  };

  modal.appendChild(icon);

  parent.appendChild(modal);

  setTimeout(
    () => {
      modal.classList.remove("closed");
      if (autoClose) {
        let inter = setInterval(() => {
          if (modal.classList.contains("closed")) {
            modal.remove();
            clearInterval(inter);
          } else modal.classList.add("closed");
        }, 5000);
      }
    },
    showTimeout ? showTimeout : 100
  );

  return modal;
};

/**
 * @param {Project} project
 */
export const ProjectCard = (project) => {
  let open = false;

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

  if (!project.screenshotSrc) {
    base.classList.add("no-info");
  }

  // Description
  const description = E("p");
  description.innerText = project.description;
  container.appendChild(description);

  // Tools Used section\
  if (project.tools) {
    const tools = E("p");
    tools.innerText = `Tools: ${project.tools.reduce((sum, curr, i) => {
      const last = i < project.tools.length;
      const next = sum + (last ? ", " : "") + curr;
      console.log(sum, curr, i, last, next);
      return next;
    })}`;
    tools.classList.add("tools");
    base.appendChild(tools);
  }

  // Extra details & screenshots
  const extra = E("div");
  extra.classList.add("extra");
  base.appendChild(extra);

  if (project.screenshotSrc) {
    extra.appendChild(Img(project.screenshotSrc, "screenshot"));
  }

  base.click(() => {
    if (project.screenshotSrc) {
      if (!open) {
        // Clear any open card
        document.querySelectorAll(".card.open").forEach((e) => {
          e.classList.remove(".open");
        });

        // Toggle open class
        open = !open;
        base.classList.add("open");
        document.querySelector(".open").scrollIntoView();
      } else {
        open = !open;
        base.classList.remove("open");
        // document.querySelector("header").scrollIntoView();
      }
    }
  });

  return base;
};
