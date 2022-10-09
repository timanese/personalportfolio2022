import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { FaBeer } from 'react-icons/fa';
import colorSharp from "../assets/color-sharp.png";

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
              <p>
                lorem ipsum is simply dummy text of the printing and typesetting
                industy. <br></br> lorem ipsum is simply dummy text of the
                printing and typesetting industy.
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="skill-slider"
              >
                <div className="item">
                  {/* <img src={} alt="img"/> */}
                  <FaBeer/>
                  <h5> Web Development</h5>
                </div>
                <div className="item">
                  <img src={} alt="img"/>
                  <h5> Brand Identify</h5>
                </div>
                <div className="item">
                  <img src={} alt="img"/>
                  <h5> Web Development</h5>
                </div>
                <div className="item">
                  <img src={} alt="img"/>
                  <h5> Web Development</h5>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
      <img className="background-image-left" src={colorSharp}/>
    </section>
  );
};
