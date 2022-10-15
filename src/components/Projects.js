import React from "react";
import { Row, Col, Container, Nav, Tab, Button } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp from "../assets/color-sharp2.png";
import gasupImg from "../assets/gasup-project.jpeg";
import featherImg from "../assets/feather-logo.png";
import myshImg from "../assets/mysh-project.png";

export const Projects = () => {
  const projects = [
    {
      title: "GasUp",
      description: "Design & Development",
      imgUrl: gasupImg,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: featherImg,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: myshImg,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: gasupImg,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: featherImg,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: myshImg,
    },
  ];
  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col>
            <h2>Projects</h2>
            <p>Lorem Ipsum is simply dummy text of the printing</p>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Nav
                variant="pills"
                className="nav-pills mb-5 justify-content-center align-items-center"
                id="pills-tab"
              >
                <Nav.Item>
                  <Nav.Link eventKey="first">Tab 1</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Tab 2</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Tab 3</Nav.Link>
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
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Cumque quam, quod neque provident velit, rem explicabo
                    excepturi id illo molestiae blanditiis, eligendi dicta
                    officiis asperiores delectus quasi inventore debitis quo.
                  </p>
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Cumque quam, quod neque provident velit, rem explicabo
                    excepturi id illo molestiae blanditiis, eligendi dicta
                    officiis asperiores delectus quasi inventore debitis quo.
                  </p>
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
