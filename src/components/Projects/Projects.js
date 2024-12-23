import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import trendify from "../../Assets/Trendify.png";
import netconnect from "../../Assets/NetConnect.png";
import newsgenerator from "../../Assets/newsgenerator.png";
import wanderlust from "../../Assets/wanderlust.png";
import jobhunt from "../../Assets/jobhunt.png";

function Projects() {
  const projects = [
    {
      imgPath: jobhunt,
      title: "JobHunt",
      description:
        "JobHunt is a MERN-based job portal designed to bridge the gap between job seekers and recruiters. Applicants can browse jobs, apply with a single click, and track the status of their applications, while recruiters can post jobs, review applicants, and manage applications efficiently. The platform features a responsive design, filtering options (on larger screens), and an intuitive dashboard for seamless navigation. \n\nTechnologies Used: React.js for the frontend, Node.js and Express.js for backend logic, MongoDB for data storage, and Bootstrap for responsive design. \n\nPurpose: To provide an efficient and interactive job portal for both applicants and recruiters, catering to their specific needs and streamlining the hiring process.",
      ghLink: "https://github.com/AchyuthaVikaram/JobHunt",
      demoLink: "https://jobhunt-i0im.onrender.com",
    },
    {
      imgPath: wanderlust,
      title: "WanderLust",
      description:
        "Wanderlust is a comprehensive travel and hosting platform inspired by Airbnb, enabling users to explore and host travel destinations. Users can log in to add, edit, or delete their listings, filter hotels based on tags, and view precise locations on an interactive map. The platform also includes a robust review and rating system for users to share their experiences. Authentication and authorization ensure secure access for hosts and travelers. \n\nTechnologies Used: HTML, CSS, JavaScript, Bootstrap for frontend; Node.js, Express.js, EJS for backend logic; MongoDB for database storage; and Render for deployment. \n\nPurpose: To deliver a reliable and feature-rich platform for travelers and hosts to connect, enhancing the overall travel experience.",
      ghLink: "https://github.com/AchyuthaVikaram/WanderLust",
      demoLink: "https://wanderlust-6mf3.onrender.com",
    },
    {
      imgPath: netconnect,
      title: "NetConnect",
      description:
        "NetConnect is a dynamic social networking platform inspired by LinkedIn, enabling users to create profiles, share posts, connect with others, and engage through likes and comments. It includes secure authentication, connection management, and seamless Twitter integration for wider reach. The platform is designed to be interactive, scalable, and user-friendly, offering a professional networking experience. \n\nTechnologies Used: Next.js, JavaScript, HTML, CSS for the frontend; Node.js, Express.js for the backend; and MongoDB for database management. \n\nPurpose: To provide professionals with a responsive and secure platform to connect, collaborate, and share insights, showcasing expertise in full-stack development and real-world application design.",
      ghLink: "https://github.com/AchyuthaVikaram/NetConnect",
      demoLink: "https://net-connect.vercel.app/",
    },
    {
      imgPath: trendify,
      title: "Trendify",
      description:
        "Trendify is a modern e-commerce platform that provides users with a seamless shopping experience. It allows users to browse and shop products across various categories, including men’s, women’s, and kids’ fashion. Users can create accounts, add items to their wishlist or cart, and track their orders effortlessly. The platform ensures a visually appealing interface and smooth navigation for an enhanced user experience. \n\nTechnologies Used: HTML, CSS, Bootstrap, JavaScript for the frontend; Node.js and Express.js for the backend; and SQL for database management. \n\nPurpose: To create a responsive and user-friendly e-commerce solution that simplifies online shopping for customers while ensuring efficient backend operations.",
      ghLink:
        "https://github.com/AchyuthaVikaram/Trendify-Dress-with-Passion-Shop-with-Trendify",
    },
    {
      imgPath: newsgenerator,
      title: "News Generator",
      description:
        "The News Generator is a dynamic web application that allows users to search for and access news articles from around the globe. With its clean, card-based design, it displays articles fetched via an external API, and each card provides a direct link to the source. The app offers an intuitive search bar to help users find news topics of interest quickly. \n\nTechnologies Used: HTML, CSS for styling, and JavaScript for dynamic interactions and API integration. \n\nPurpose: To offer a straightforward and accessible way for users to stay informed about the latest news and developments in their areas of interest.",
      ghLink:
        "https://github.com/AchyuthaVikaram/Mini-Projects/tree/main/NEWS_GENERATOR",
    },
  ];

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {projects.map((project, index) => (
            <Col md={12} lg={12} className="project-card" key={index}>
              <ProjectCard
                imgPath={project.imgPath}
                title={project.title}
                description={project.description}
                ghLink={project.ghLink}
                demoLink={project.demoLink}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
