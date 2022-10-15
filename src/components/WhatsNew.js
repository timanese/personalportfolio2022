import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export const WhatsNew = () => {
  return (
    <section className="whats-new" id="whats-new">
      <Container>
        <Row>
          <Col>
            <h2>Whats New</h2>
            <p>Keep up with what Ive been doing recently!</p>
            <iframe
              src="https://www.linkedin.com/embed/feed/update/urn:li:share:6980515631137701888"
              height="701"
              width="504"
              frameborder="0"
              allowfullscreen=""
              title="Embedded post"
            ></iframe>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
