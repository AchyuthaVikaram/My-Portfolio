import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
  return (
    <Card className="project-card-view-horizontal"  style={{ background: "transparent !important" }}>
      <div className="card-horizontal">
        {/* Image Section */}
        <div className="card-img-section">
          <Card.Img
            variant="top"
            src={props.imgPath}
            alt="card-img"
            className="project-card-img"
          />
        </div>

        {/* Content Section */}
        <div className="card-content-section">
          <Card.Body>
            <Card.Title> <b className="purple" style={{fontSize:"2rem"}}>{props.title}</b></Card.Title>
            <Card.Text style={{ textAlign: "justify" }}>
              {props.description}
            </Card.Text>
            <div className="card-links">
              <Button variant="primary" href={props.ghLink} target="_blank">
                <BsGithub /> &nbsp;
                {props.isBlog ? "Blog" : "GitHub"}
              </Button>

              {/* Render Demo Link if available */}
              {!props.isBlog && props.demoLink && (
                <Button
                  variant="primary"
                  href={props.demoLink}
                  target="_blank"
                  style={{ marginLeft: "10px" }}
                >
                  <CgWebsite /> &nbsp; Demo
                </Button>
              )}
            </div>
          </Card.Body>
        </div>
      </div>
    </Card>
  );
}

export default ProjectCards;
