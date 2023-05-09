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
    "Configurable, Sync-able, and Sharable boilerplate NodeJS project generator. Designed to reduce project creation hassle with a semantic CLI. Includes file-structure and package.json bootstrapping.",
    require("../images/boiling_plates.png"),
    false,
    null,
    ["NodeJS", "FaunaDB", "RollupJS", "Mocha", "Gitlab CI/CD", "Semantic Versioning", "Yarn"]
  ),
  new Project(
    "YukiBot (library)",
    null,
    "https://github.com/pinkilo/yukibotJS",
    "A easy-to-use typescript library for building YouTube Live broadcast chatbots.",
    null,
    false,
    null,
    ["NodeJS", "FaunaDB", "RollupJS", "Mocha", "Gitlab CI/CD", "Semantic Versioning", "Yarn"]
  ),
  new Project(
    "Paypal Invoice API",
    "https://www.npmjs.com/package/paypal-invoices",
    "https://gitlab.com/JonoAugustine/paypal-invoices",
    "A JS api wrapper for paypal 2.0 invoices which was lacking from official Paypal SDKs. The project works towards 100% API coverage.",
    null,
    null,
    null,
    ["NodeJS", "Paypal API", "RollupJS", "Semantic Release"]
  ),
  new Project(
    "Yuki the Youtube Chat Bot",
    "https://youtube.com/playlist?list=PLcHj3H-ImhdYOgOy5cxfKSUnOO_65E5Qx",
    "https://github.com/pinkilo/yuki-bot",
    "A Youtube-live chatbot made from scratch using typescript, websockets, and canvas animation",
    require("../images/fox_orange_attack.gif"),
    false,
    null,
    ["Typescript", "RollupJS", "BabelJS", "Websockets", "canvas animation"]
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
    "Age of Revisionism",
    "https://ageofrevisionism.com/",
    "https://gitlab.com/JonoAugustine/age-of-revisionism",
    "A web-app which generates modification files for Age of Empires 2: Definitive Edition.",
    require("../images/aor.png"),
    false,
    null,
    ["Svelte", "RollupJS", "Gitlab CI/CD", "Typescript"]
  ),
  new Project(
    "Firebase Rules Generator",
    "https://www.npmjs.com/package/frug",
    "https://gitlab.com/JonoAugustine/frug",
    "A CLI tool which converts readable DB schemas into Firebase Firestore Rules.",
    null,
    null,
    null,
    ["Typescript", "Firebase Rules", "Semantic-Release", "Gitlab CI/CD", "Mocha/Chai", "eslint"]
  ),
  new Project(
    "Aquatic Mastery",
    "https://youtube.com/aquaticmaster",
    null,
    "A YouTube channel centered around sharing my experiences as an aquarist and showing others how to achieve success in their own aquariums.",
    require("../images/logo.jpg")
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
    "Augustine Education Services",
    "https://augustine.education",
    null,
    "Augustine Educational Services advises, educates, and counsels students and families regarding educational choices. This project provides a landing page for AES with a modern design.",
    false,
    null,
    ["ParcelJS", "SCSS", "Gitlab CI/CD"]
  ),
]
