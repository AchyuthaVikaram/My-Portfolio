import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
} from "react-icons/di";
import { FaBootstrap, FaCss3Alt, FaDocker, FaHtml5 } from "react-icons/fa";
import { SiMysql, SiExpress, SiTailwindcss } from "react-icons/si";


function Techstack() {
  // Array of technology icons and labels
  const techStack = [
    { icon: <DiJava />, label: "Java" },
    { icon: <DiJavascript1 />, label: "JavaScript" },
    { icon: <FaHtml5 />, label: "HTML5" },
    { icon: <FaCss3Alt />, label: "CSS3" },
    { icon: <FaBootstrap />, label: "Bootstrap" },
    { icon: <SiTailwindcss />, label: "TailwindCSS" },
    { icon: <SiExpress />, label: "Express.js" },
    { icon: <SiMysql />, label: "MySQL" },
    { icon: <DiNodejs />, label: "Node.js" },
    { icon: <DiReact />, label: "React" },
    { icon: <DiMongodb />, label: "MongoDB" },
    { icon: <DiGit />, label: "Git" },
    { icon: <DiPython />, label: "Python" },
    { icon: <FaDocker />, label: "Docker" },
  ];

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {techStack.map((tech, index) => (
        <Col
          xs={4}
          md={2}
          className="tech-icons"
          key={index}
          aria-label={tech.label}
        >
          {tech.icon}
        </Col>
      ))}
    </Row>
  );
}

export default Techstack;
