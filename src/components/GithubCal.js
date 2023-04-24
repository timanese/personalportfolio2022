import React from "react";
import { Container } from "react-bootstrap";
import "react-multi-carousel/lib/styles.css";
import { FaGithubAlt } from "react-icons/fa";
import colorSharp from "../assets/color-sharp2.png";
import GitHubCalendar from "react-github-calendar";

export const GithubCal = () => {
  return (
    <section className="skill" id="skill">
      <Container>
        <div className="skill-bx">
          <h2>
            <FaGithubAlt size={100} /> Activity
          </h2>
          <p>My GitHub contributions of 2022</p>
          <GitHubCalendar username="timanese" />
        </div>
      </Container>
      <img
        className="background-image-left"
        src={colorSharp}
        alt="background-img"
      />
    </section>
  );
};
