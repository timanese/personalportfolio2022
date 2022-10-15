import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Timeline } from "./Timeline";
import TrackVisibility from 'react-on-screen';
import 'animate.css';

export const Experience = () => {
  return (
    <section className="experience" id="experience">
      <Container>
        <Row>
          <Col>
          <TrackVisibility>
            {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__wobble" : ""}>
            <h2>Experience</h2>
            <p>Oppurtunites I've had throughout my career.</p>
            </div>}
            </TrackVisibility>
            <Timeline />
          </Col>
        </Row>
      </Container>
    </section>
  );
};
