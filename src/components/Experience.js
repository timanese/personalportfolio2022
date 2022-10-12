import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Timeline } from "./Timeline";
export const Experience = () => {

    return(
        <section className="experience" id="experience">
        <Container>
            <Row>
                <Col>
                <h2>Experience</h2>
                <p>Oppurtunites I've had throughout my career</p>
                <Timeline/>
                </Col>
            </Row>
        </Container>
        </section>
    );
}