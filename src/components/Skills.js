import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {
  DiReact,
  DiAngularSimple,
  DiJavascript1,
  DiPython,
  DiJava,
} from "react-icons/di";
import { SiCplusplus, SiFirebase } from "react-icons/si";
import colorSharp from "../assets/color-sharp2.png";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
    <section className="skill" id="skill">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h2>Skills</h2>
              <p>Skills I have utilized and learned throughout the years.</p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="skill-slider"
              >
                <div className="item">
                  {/* <img src={} alt="img"/> */}
                  <DiReact size={60} className="skill-logos" />
                  <h5>React</h5>
                </div>
                <div className="item">
                  <DiAngularSimple size={60} className="skill-logos" />
                  <h5>Angular</h5>
                </div>
                <div className="item">
                  <DiJavascript1 size={60} className="skill-logos" />
                  <h5>Javascript</h5>
                </div>
                <div className="item">
                  <DiPython size={60} className="skill-logos" />
                  <h5>Python</h5>
                </div>
                <div className="item">
                  <DiJava size={60} className="skill-logos" />
                  <h5>Java</h5>
                </div>
                <div className="item">
                  <SiCplusplus size={60} className="skill-logos" />
                  <h5>C++</h5>
                </div>
                <div className="item">
                  <SiFirebase size={60} className="skill-logos" />
                  <h5>FireBase</h5>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
      <img
        className="background-image-left"
        src={colorSharp}
        alt="background-img"
      />
    </section>
  );
};
