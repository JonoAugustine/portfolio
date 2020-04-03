import React from "react";
import Badge from "./Badge";
import GithubImg from "../images/badge_github.svg";

const Banner = () => {
  return (
    <header className="banner">
      <div className="head">
        <section className="intro">
          <h1 className="brand">Jono Augustine</h1>
          <h3 className="tagline">Creating solutions to unsolved problems</h3>
        </section>
        <div id="badges" className="container fluid row">
          <Badge link="https://github.com/JonoAugustine" img={GithubImg} />
        </div>
        <button id="header_scroll" className="scroller">
          My Projects
        </button>
      </div>
    </header>
  );
};

export default Banner;
