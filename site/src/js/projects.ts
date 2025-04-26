type Project = {
  name: string
  live?: string
  source?: string
  description: string
  imageSrc?: URL
  invert?: boolean
  screenshotSrc?: string
  tools?: string[]
}

const projects: Project[] = [
  {
    name: "Boil",
    source: "https://gitlab.com/boiljs/boil-cli",
    description:
      "Configurable, Sync-able, and Sharable boilerplate NodeJS project generator. " +
      "Designed to reduce project creation hassle with a semantic CLI. Includes " +
      "file-structure and package.json bootstrapping.",
    imageSrc: new URL("../images/boiling_plates.png", import.meta.url),
    invert: false,
    tools: [
      "NodeJS",
      "FaunaDB",
      "RollupJS",
      "Mocha",
      "Gitlab CI/CD",
      "Semantic Versioning",
      "Yarn",
    ],
  },
  {
    name: "Paypal Invoice API",
    live: "https://www.npmjs.com/package/paypal-invoices",
    source: "https://gitlab.com/JonoAugustine/paypal-invoices",
    description:
      "A JS api wrapper for paypal 2.0 invoices which was lacking from official " +
      "Paypal SDKs. The project works towards 100% API coverage.",
    tools: ["NodeJS", "Paypal API", "RollupJS", "Semantic Release"],
  },
  {
    name: "Vulpa the Youtube Chat Bot",
    live: "https://youtube.com/playlist?list=PLcHj3H-ImhdYOgOy5cxfKSUnOO_65E5Qx",
    source: "https://github.com/pinkilo/Vulpa",
    description:
      "A Youtube-live chatbot made from scratch using typescript, websockets, and canvas animation",
    imageSrc: new URL("../images/fox_orange_attack.gif", import.meta.url),
    invert: false,
    tools: [
      "Typescript",
      "RollupJS",
      "BabelJS",
      "Websockets",
      "canvas animation",
    ],
  },
  {
    name: "Strife",
    source: "https://gitlab.com/serebit/strife",
    description:
      "An idiomatic Kotlin implementation of the Discord API for use with custom bots.",
    imageSrc: new URL("../images/strife-logo.png", import.meta.url),
    invert: false,
    tools: ["Discord API", "KTor", "Gitlab CI/CD"],
  },
  {
    name: "Evolution Emulator",
    source: "https://github.com/JonoAugustine/Evolution-Emulator",
    description: "A basic attempt at emulating Earthen evolution with OOP.",
    imageSrc: new URL("../images/EvoEmuSub.png", import.meta.url),
    invert: true,
  },
  {
    name: "ScoreBorda",
    live: "https://score-borda.vercel.app",
    source: "https://github.com/JonoAugustine/ScoreBorda",
    description: "The ultimate decision making tool for the troubled mind",
    imageSrc: new URL("../images/scoreborda.png", import.meta.url),
    invert: false,
  },
  {
    name: "Aquatic Mastery",
    live: "https://youtube.com/aquaticmaster",
    description:
      "A YouTube channel centered around sharing my experiences as an aquarist " +
      "and showing others how to achieve success in their own aquariums.",
    imageSrc: new URL("../images/logo.jpg", import.meta.url),
  },
  {
    name: "YukiBot",
    source: "https://github.com/pinkilo/yukibot",
    description:
      "A easy-to-use typescript library for building YouTube Live broadcast chatbots.",
    invert: false,
    tools: [
      "NodeJS",
      "FaunaDB",
      "RollupJS",
      "Mocha",
      "Gitlab CI/CD",
      "Semantic Versioning",
      "Yarn",
    ],
  },
  {
    name: "Snek",
    live: "https://jonoaugustine.gitlab.io/web-snake-game/",
    source: "https://gitlab.com/JonoAugustine/web-snake-game",
    description:
      "Browser-based Snake Game aimed at giving full controll over game settings to the player.",
    imageSrc: new URL("../images/snek.gif", import.meta.url),
    invert: false,
    tools: ["NodeJS", "ParcelJS", "SASS", "Gitlab CI/CD"],
  },
  {
    name: "Augustine Education Services",
    live: "https://augustine.education",
    description:
      "Augustine Educational Services advises, educates, and counsels students " +
      "and families regarding educational choices. This project provides a " +
      "landing page for AES with a modern design.",
    tools: ["ParcelJS", "SCSS", "Gitlab CI/CD"],
  },
  {
    name: "Age of Revisionism",
    live: "https://ageofrevisionism.com/",
    source: "https://gitlab.com/JonoAugustine/age-of-revisionism",
    description:
      "A web-app which generates modification files for Age of Empires 2: Definitive Edition.",
    imageSrc: new URL("../images/aor.png", import.meta.url),
    invert: false,
    tools: ["Svelte", "RollupJS", "Gitlab CI/CD", "Typescript"],
  },
  {
    name: "Firebase Rules Generator",
    live: "https://www.npmjs.com/package/frug",
    source: "https://gitlab.com/JonoAugustine/frug",
    description:
      "A CLI tool which converts readable DB schemas into Firebase Firestore Rules.",
    tools: [
      "Typescript",
      "Firebase Rules",
      "Semantic-Release",
      "Gitlab CI/CD",
      "Mocha/Chai",
      "eslint",
    ],
  },
  {
    name: "This Portfolio",
    live: "https://jonoaugustine.com",
    source: "https://gitlab.com/JonoAugustine/portfolio",
    description: "This very portfolio",
    tools: ["Typescript", "ParcelJS", "SCSS", "Gitlab CI/CD"],
  },
]

export default projects
