import React from "react";
import { Row, Col, Container, Nav, Tab } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp from "../assets/color-sharp2.png";
import gasupImg from "../assets/gasup-project.png";
import featherImg from "../assets/feather-project.png";
import myshImg from "../assets/mysh-project.png";
import dynastygym from "../assets/dynastygym-project.png";
import TrackVisibility from "react-on-screen";
import algoquant from "../assets/algoquant.png";
import "animate.css";

export const Projects = () => {
  const projects = [
    {
      title: "GasUp",
      description:
        "Attended SHellahcks 2022 Hackathon and won the challendge: Best sustainability Hack by Avanade. GasUp is a mobile application that encuroages carpooling by allowing users to easily split the cost of gas for a a given trip",
      imgUrl: gasupImg,
      githubUrl: "https://github.com/ryPattillo/GasUp",
      websiteUrl: "https://devpost.com/software/gasup",
    },
    {
      title: "Feather - Interactive Diary",
      description:
        "Hybrid social media app using Ionic Angular framework, where users can share, collaborate, and discuss entries with others.",
      imgUrl: featherImg,
      githubUrl: "https://github.com/timanese/feather-app",
      websiteUrl: "https://github.com/timanese/feather-app",
    },
    {
      title: "Shell Program",
      description:
        "Created a functional shell that performed system calls, handled process creation and signals. Code in C.",
      imgUrl: myshImg,
      githubUrl: "https://github.com/timanese/feather-app",
      websiteUrl: "https://github.com/timanese/feather-app",
    },
    {
      title: "Dynasty Gym",
      description: "A gym website made with bootstrap.",
      imgUrl: dynastygym,
      githubUrl: "https://github.com/timanese/dynasty-gym",
      websiteUrl: "http://www.eustis.eecs.ucf.edu/~Yang/",
    },
    {
      title: "Algoquant",
      description:
        "AlgoQuant is a project centered around the creation, customization, and implementation of algorithmic trading bots.",
      imgUrl: algoquant,
      githubUrl: "https://github.com/AlgoQuantSD",
      websiteUrl: "https://algoquant.app/",
    },
  ];
  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__rubberBand" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>
                    Personal projects I have done through self intrest,
                    hackathons, and clubs.
                  </p>
                </div>
              )}
            </TrackVisibility>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Nav
                variant="pills"
                className="nav-pills mb-5 justify-content-center align-items-center"
                id="pills-tab"
              >
                <Nav.Item>
                  <Nav.Link eventKey="first">2022</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">2021</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">2023</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content id="slideInUp">
                <Tab.Pane eventKey="first">
                  <Row>
                    {projects.map((project, index) => {
                      return <ProjectCard key={index} {...project} />;
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <p>Adding soon ...</p>
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  <p>Adding soon ...</p>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img
        className="background-image-left"
        src={colorSharp}
        alt="background"
      />
    </section>
  );
};
