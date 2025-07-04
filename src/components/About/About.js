import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import myImg from "../../Assets/AchyuthaVikaram.png";
import Toolstack from "./Toolstack";

function About() {
	return (
		<Container fluid className="about-section">
			<Container style={{ paddingTop: "0", marginTop: "1rem" }}>
				<Row style={{ justifyContent: "center", padding: "10px" }}>
					
					<Col
						md={5}
						style={{ paddingTop: "120px", paddingBottom: "50px" }}
						className="about-img"
					>
						<img
							src={myImg}
							alt="about"
							className="img-fluid"
							style={{ borderRadius: "50%" }}
						/>
					</Col>
					<Col
						md={7}
						style={{
							justifyContent: "center",
							paddingTop: "20px",
							paddingBottom: "50px",
						}}
					>
						<h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
							Know Who <strong className="purple">I'M</strong>
						</h1>
						<Aboutcard />
					</Col>
				</Row>
				<h1 className="project-heading">
					Professional <strong className="purple">Skillset </strong>
				</h1>

				<Techstack />

				<h1 className="project-heading">
					<strong className="purple">Tools</strong> I use
				</h1>
				<Toolstack />
			</Container>
		</Container>
	);
}

export default About;
