import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo3 from "../assets/logo3.svg";
import { UilLinkedin } from "@iconscout/react-unicons";
import { UilGithub } from "@iconscout/react-unicons";
import { UilFile } from "@iconscout/react-unicons";
import React from "react";

import { useEffect, useState } from "react";

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScroll] = useState("false");

  // change the color of the background based on if you scrolled or not
  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };
  return (
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo3} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              href="#home"
              className={
                activeLink === "home" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("home")}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#skill"
              className={
                activeLink === "skill" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("skills")}
            >
              Skills
            </Nav.Link>
            <Nav.Link
              href="#project"
              className={
                activeLink === "projects" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("projects")}
            >
              Projects
            </Nav.Link>
            <Nav.Link
              href="#whats-new"
              className={
                activeLink === "whats-new"
                  ? "active navbar-link"
                  : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("whats-new")}
            >
              Whats New
            </Nav.Link>
            <Nav.Link
              href="#experience"
              className={
                activeLink === "experience"
                  ? "active navbar-link"
                  : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("experience")}
            >
              Experiences
            </Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/tim-yang-49258b18b/" target="_blank" rel="noreferrer">
                <UilLinkedin className={"navbar-logo"} />
              </a>
              <a href="https://github.com/timanese" target="_blank" rel="noreferrer">
                <UilGithub className={"navbar-logo"} />
              </a>
              <a href="../assets/YangTimResume2022.pdf" target="_blank" download>
                <UilFile className={"navbar-logo"} />
              </a>
            </div>
            <button className="vvd" onClick={() => console.log("connect")}>
              {" "}
              <span>Let's Connect</span>
            </button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
