class Project {
  constructor(name, live, source, description, imageName, invert, screenshot) {
    this.name = name;
    this.live = live;
    this.source = source;
    this.description = description;
    this.imageSrc = imageName ? "./assets/images/" + imageName : null;
    this.invert = invert;
    this.screenshotSrc = screenshot ? "./assets/images/" + screenshot : null;
  }
}

const projects = [
  new Project(
    "Strife",
    null,
    "https://gitlab.com/serebit/strife",
    "An idiomatic Kotlin implementation of the Discord API.",
    "strife-logo.png"
  ),
  new Project(
    "Off The Menu",
    "https://JonoAugustine.github.io/off-the-menu",
    "https://github.com/JonoAugustine/off-the-menu",
    `
    A web app aiming to make eating out simpler for allergy sufferers and picky eaters.
    It provides the ability to search items on restaurant menus to determine if they contain
    potential allergens which the user defines. 
    `,
    "otm_logo.png",
    true,
    "otm.gif"
  ),
  new Project(
    "Team Magma PRO",
    "https://teammagmapro.web.app",
    "https://gitlab.com/JonoAugustine/teammagma",
    `
      This project aims to simplify & organize the selling, buying, 
      & trading process of Pokemon Revolution Online by providing
      users with a clean and intuitive web app to find the items 
      and pokemon they need.
    `,
    "psyduck_purple.png"
  ),
  new Project(
    "Aquatic Mastery",
    "https://youtube.com/aquaticmaster",
    null,
    `A YouTube channel centered around sharing my experiences as an
    aquarist and showing others how to achieve success in their own aquariums.`,
    "logo.jpg",
    false,
    "ampro_yt.png"
  ),
  new Project(
    "Ouch",
    "https://anthnyd.github.io/Ouch/",
    "https://github.com/anthnyd/Ouch",
    `
    A web app built like a simulation where you and your friends can exist in an Existence together.
    In an Existence you can chat to each other and perform fun commands.
    `,
    "ouch.png",
    false,
    "ouch.gif"
  ),
  new Project(
    "Weebot",
    null,
    "https://gitlab.com/JonoAugustine/Weebot",
    `
    Weebot is a chat and utility bot for the popular social platform, Discord. Built using
    Kotlin and Strife (above), it is currently using GitLab CI/CD to deploy to a linode server. Weebot's
    1.0 version was made using Java and had many useful features like notes, games, and a text-based 
    voice-mail. Currently I am working to port all of the functionality over to Kotlin and Strife, 
    while open-sourcing the repository.
    `
  ),
  new Project(
    "Evolution Emulator",
    null,
    "https://github.com/JonoAugustine/Evolution-Emulator",
    "A basic attempt at emulating Earthen evolution with OOP.",
    "EvoEmuSub.png",
    true
  ),
  new Project(
    "ScoreBorda",
    null,
    "https://github.com/JonoAugustine/ScoreBorda",
    `
    A system which utilizes the simplicity of binary choices to score and rank 
    "Features" and "Candidates". By presenting only two options in each comparison,
    the Borda is able to remove much of the overwhelming aspect of comparing and
    several choices at once.
    `
  )
];

const random = arr => arr[Math.floor(Math.random() * arr.length)];

cards.append(...projects.map(p => ProjectCard(p)));

badges.append(Badge("https://github.com/JonoAugustine", "gitHub"));
badges.append(Badge("https://gitlab.com/JonoAugustine", "gitLab"));
badges.append(
  Badge("https://www.linkedin.com/in/jonathan-augustine-14678b124/", "linkedin")
);

badges.append(Badge("./assets/images/JonoAugustineResume.pdf", "resume"));

$(".about-me .text").text(`
  I like solving problems. When I find a problem I know I can solve, I
  strive to create a solution that everyone not only CAN use, but that
  everyone will WANT to use. I grew up surrounded by engineers and artists,
  giving me insights into both worlds. I know their philosophies, where they
  diverge and where they come together. I use these understandings to improve
  the quality of my creations. I work just as hard discussing white-space
  and design balance as I do constructing and perfecting unit tests. I know
  there is always more to learn, more skills to gain, more languages and tools
  to master, and I am always seeking out new answers to problems.
`);

/**
 *
 * @param {*} subject
 * @param {*} name
 * @param {*} text
 * @returns {Promise<*>}
 */
const sendEmail = (email, name, subject, text) => {
  console.log({ email, name, subject, text });
  return $.post("https://salty-garden-80295.herokuapp.com/", {
    email,
    name,
    subject,
    text
  });
};

const submit = () => {
  const formValues = {};
  $.each(form.serializeArray(), (_, field) => {
    formValues[field.name] = field.value;
  });

  if (!/.+@.+\..+/gi.test(formValues.email)) {
    Modal(form, true)
      .addClass("danger")
      .append("Please use a valid email");
  } else if (!/.{2,}\s+.{2,}/gi.test(formValues.name)) {
    Modal(form, true)
      .addClass("danger")
      .append("Please use your full name");
  } else if (!/.{3,}/gi.test(formValues.subject)) {
    Modal(form, true)
      .addClass("danger")
      .append("Please use a descriptive subject");
  } else if (!/.{5}/gi.test(formValues.text)) {
    Modal(form, true)
      .addClass("danger")
      .append("Make you message count");
  } else {
    sendEmail(formValues.email, formValues.name, formValues.subject, formValues.text);
    Modal(form, false, 1000).append("See You Soon");
  }
};
