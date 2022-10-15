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
            <button class="button-34" role="button">
              <span>Link to Github  </span>
              <UilGithub />
            </button>
            <button class="button-34" role="button">
              <span>Link to Website  </span>
              <UilDesktop />
            </button>
          </Col>
        </div>
      </div>
    </Col>
  );
};
