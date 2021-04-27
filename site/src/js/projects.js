class Project {
  constructor(
    name,
    live,
    source,
    description,
    imageName,
    invert,
    screenshot,
    tools
  ) {
    this.name = name
    this.live = live
    this.source = source
    this.description = description
    this.imageSrc = imageName
    this.invert = invert
    this.screenshotSrc = screenshot
    this.tools = tools
  }
}

export default [
  new Project(
    "Boil",
    null,
    "https://gitlab.com/boiljs/boil-cli",
    "Configurable, Syncable, and Sharable boilerplate NodeJS project generator. Designed to reduce project creation hassel with a semantic CLI. Includes file-structure and package.json bootstrapping.",
    require("../images/boiling_plates.png"),
    false,
    null,
    ["NodeJS", "FaunaDB", "RollupJS", "Mocha", "Gitlab CI/CD", "Semantic Versioning", "Yarn"]
  ),
  new Project(
    "Strife",
    null,
    "https://gitlab.com/serebit/strife",
    "An idiomatic Kotlin implementation of the Discord API for use with custom bots.",
    require("../images/strife-logo.png"),
    false,
    null,
    ["Discord API", "KTor", "Gitlab CI/CD"]
  ),
  new Project(
    "Augustine Education Servies",
    "https://augustine.education",
    null,
    "Augustine Educational Services advises, educates, and counsels students and families regarding educational choices. This project provides a landing page for AES with a modern design.",
    false,
    null,
    ["ParcelJS", "SCSS", "Gitlab CI/CD"]
  ),
  new Project(
    "Paypal Invoice API",
    "https://www.npmjs.com/package/paypal-invoices",
    "https://gitlab.com/JonoAugustine/paypal-invoices",
    "A JS api wrapper for paypal 2.0 invoices which was lacking from official Paypal SDKs. The project works for 100% API and test coverage and is has reached over 400 downloads",
    null,
    null,
    null,
    ["NodeJS", "Paypal API", "RollupJS", "Semantic Release"]
  ),
  new Project(
    "BlueTheRobot",
    "https://bluetherobot.com",
    null,
    "The official website for Twitch Streamer & YouTuber BlueTheRobot.",
    require("../images/bluetherobot.png"),
    false,
    null,
    ["NodeJS", "ParcelJS", "YouTube API", "TwitchTV API", "Gitlab CI/CD"]
  ),
  new Project(
    "Madame BunBun",
    "https://edenbunbun.web.app/",
    null,
    "The official website for the Twitch streamer and commission artist, Madame BunBun. It uses Firebase and ReactJS to make a simple experience for BunBun and her commissioners and my own PayPal SDK to enable a simple invoicing process.",
    require("../images/cornbob.png"),
    false,
    null,
    [
      "ReactJS",
      "PayPal Invoice API",
      "Firebase",
      "SCSS",
      "Gitlab CI/CD",
      "Mocha",
    ]
  ),
  new Project(
    "Firebase Rules Generator",
    null,
    "https://gitlab.com/JonoAugustine/frug",
    "An NPM package which converts JSON DB schemas into Firebase Firestore Rules",
    null,
    null,
    null,
    ["NodeJS", "Firebase Rules", "RollupJS", "ParcelJS", "SASS", "Gitlab CI/CD"]
  ),
  new Project(
    "Snek",
    "https://jonoaugustine.gitlab.io/web-snake-game/",
    "https://gitlab.com/JonoAugustine/web-snake-game",
    "Browser-based Snake Game aimed at giving full controll over game settings to the player.",
    require("../images/snek.gif"),
    false,
    null,
    ["NodeJS", "ParcelJS", "SASS", "Gitlab CI/CD"]
  ),
  new Project(
    "Aquatic Mastery",
    "https://youtube.com/aquaticmaster",
    null,
    "A YouTube channel centered around sharing my experiences as an aquarist and showing others how to achieve success in their own aquariums.",
    require("../images/logo.jpg")
  ),
  new Project(
    "Off The Menu",
    "https://otm-online.firebaseapp.com",
    "https://gitlab.com/off-the-menu/site",
    `A web app aiming to make eating out simpler for allergy sufferers and picky eaters. It provides the ability to search items on restaurant menus to determine if they contain potential allergens which the user defines.`,
    require("../images/otm_logo.png"),
    true,
    null,
    [
      "React",
      "NodeJS",
      "MongoDB",
      "Mongoose",
      "Firebase",
      "SASS",
      "TailwindCSS",
    ]
  ),
  new Project(
    "Ouch",
    "https://imanthny.github.io/Ouch/",
    "https://github.com/anthnyd/Ouch",
    `A web app built like a simulation where you and your friends can exist in an Existence together. In an Existence you can chat to each other and perform fun commands.`,
    require("../images/ouch.png"),
    false,
    null,
    ["MongoDB", "KTor", "Less", "Websocket"]
  ),
  new Project(
    "Evolution Emulator",
    null,
    "https://github.com/JonoAugustine/Evolution-Emulator",
    "A basic attempt at emulating Earthen evolution with OOP.",
    require("../images/EvoEmuSub.png"),
    true
  ),
  new Project(
    "ScoreBorda",
    "https://jonoaugustine.gitlab.io/ScoreBorda/",
    "https://gitlab.com/JonoAugustine/ScoreBorda",
    `A system which utilizes the simplicity of binary choices to score and rank "Features" and "Candidates". By presenting only two options in each comparison, the Borda is able to remove much of the overwhelming aspect of comparing and several choices at once.`,
    null,
    null,
    null,
    ["ReactJS", "SASS", "Gitlab CI/CD"]
  ),
  new Project(
    "Team Magma PRO",
    "https://teammagmapro.web.app",
    "https://gitlab.com/JonoAugustine/teammagma",
    `This project aims to simplify & organize the selling, buying, & trading process of Pokemon Revolution Online by providing users with a clean and intuitive web app to find the items and pokemon they need.`,
    require("../images/psyduck_purple.png"),
    null,
    null,
    ["ReactJS", "Firebase"]
  ),
]
