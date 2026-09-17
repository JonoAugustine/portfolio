const ref = ["u", "d", "u", "d", "l", "r", "l", "r", "b", "a"];
let seq = [];

const check = () =>
  seq.length === ref.length && seq.every((key, i) => key === ref[i]);

const load = () => {
  window.open("https://jonoaugustine.gitlab.io/web-snake-game/", "_blank");
};

window.addEventListener("keydown", (e) => {
  switch (e.key) {
    case "ArrowUp":
      seq.push("u");
      break;

    case "ArrowDown":
      seq.push("d");
      break;

    case "ArrowRight":
      seq.push("r");
      break;

    case "ArrowLeft":
      seq.push("l");
      break;

    case "a":
      seq.push("a");
      break;

    case "b":
      seq.push("b");
      break;

    case "r":
      seq = [];
      return;
  }
  seq = seq.slice(-ref.length);
  if (check()) load();
});
