import { Col } from "react-bootstrap";
import { UilGithub } from "@iconscout/react-unicons";
import { UilDesktop } from "@iconscout/react-unicons";

export const ProjectCard = ({ title, description, imgUrl, githubUrl, websiteUrl }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt="project" />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <Col>
            <a href={githubUrl} target="_blank" class = "button-34" rel="noreferrer">GitHub < UilGithub /></a>
            <a href={websiteUrl}  target="_blank" class = "button-34" rel="noreferrer">Website <UilDesktop /></a>
          </Col>
        </div>
      </div>
    </Col>
  );
};
