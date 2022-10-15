import { Col, Button, Row } from "react-bootstrap";
import { UilGithub } from "@iconscout/react-unicons";
import { UilDesktop } from "@iconscout/react-unicons";

export const ProjectCard = ({ title, description, imgUrl }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <Col>
            <Button>
              <span>Link to Github</span>
              <UilGithub />
            </Button>
            <Button>
              <span>Link to Website</span>
              <UilDesktop />
            </Button>
          </Col>
        </div>
      </div>
    </Col>
  );
};
