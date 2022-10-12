import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/logo3.svg";
import fallimg3dTim from "../assets/falling3dTim.png";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={18} sm={6}>
            <img src={logo} alt="Tim Yang Logo" />
          </Col>
          <Col size={18} sm={6} className="text-center text-sm-end">
            <p>“He conquers who endures.” – Persius</p>
            <p>
              Illustration by{" "}
              <a href="https://icons8.com/illustrations/author/zD2oqC8lLBBA">
                Icons 8
              </a>{" "}
              from <a href="https://icons8.com/illustrations">Ouch!</a>
            </p>
          </Col>
          {/* <Col size={18} sm={6}>
            <img src={fallimg3dTim} alt="Logo" />
                </Col> */}
        </Row>
      </Container>
    </footer>
  );
};
