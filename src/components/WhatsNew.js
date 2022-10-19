import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "react-multi-carousel/lib/styles.css";
import TrackVisibility from 'react-on-screen';
import 'animate.css';

export const WhatsNew = () => {
  return (
    <section className="whats-new" id="whats-new">
      <Container>
        <Row>
          <Col>
          <TrackVisibility>
            {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__tada" : ""}>
            <h2>Whats New</h2>
            <p>Keep up with what Ive been doing recently!</p>
            </div>}
            </TrackVisibility>
            <div className="container">
            <iframe
              src="https://www.linkedin.com/embed/feed/update/urn:li:share:6980515631137701888"
              height="701"
              width="75%"
              frameborder="0"
              allowfullscreen=""
              title="Embedded post"
              className="responsive-iframe"
            ></iframe>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
