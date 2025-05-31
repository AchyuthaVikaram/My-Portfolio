import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/home-main.svg";
import Tilt from "react-parallax-tilt";
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

function Home2() {
	return (
		<Container
			fluid
			className="home-about-section"
			id="about"
			style={{ fontWeight: "bold" }}
		>
			<Container>
				<Row>
					<Col md={8} className="home-about-description">
						<h1 style={{ fontSize: "2.6em", fontWeight: "bold" }}>
							LET ME <span className="purple"> INTRODUCE </span> MYSELF
						</h1>
						<p className="home-about-body">
							I'm passionate about creating impactful digital solutions and
							exploring new technologies.
							<br />
							<br />I am proficient in
							<i>
								<b className="purple"> Java,JavaScript, React, Node.js </b>
							</i>
							<br />
							<br />
							My areas of interest include building innovative
							<i>
								<b className="purple"> Web Applications </b>
							</i>
							and exploring domains like
							<i>
								<b className="purple"> Devops ,DSA </b>
							</i>
							<br />
							<br />I am driven by the desire to develop applications that
							simplify processes, such as event management systems and real-time
							platforms like <b className="purple">SensAI</b>.
							<br />
							<br />
							Whenever possible, I also contribute to open-source projects and
							refine my skills in frameworks like
							<i>
								<b className="purple"> Next.js </b>
							</i>
							and libraries such as
							<i>
								<b className="purple"> Redux and MongoDB.</b>
							</i>
						</p>
					</Col>
					<Col md={4} className="myAvtar">
						<Tilt>
							<img src={myImg} className="img-fluid" alt="avatar" />
						</Tilt>
					</Col>
				</Row>
				<Row>
					<Col md={12} className="home-about-social">
						<h1>FIND ME ON</h1>
						<p>
							Let's <span className="purple">connect </span>and collaborate
						</p>
						<ul className="home-about-social-links">
							<li className="social-icons">
								<a
									href="https://github.com/AchyuthaVikaram"
									target="_blank"
									rel="noreferrer"
									className="icon-colour home-social-icons"
								>
									<AiFillGithub />
								</a>
							</li>
							<li className="social-icons">
								<a
									href="https://leetcode.com/u/VIKARAM_ACHYUTHA/"
									target="_blank"
									rel="noreferrer"
									className="icon-colour home-social-icons"
								>
									<SiLeetcode />
								</a>
							</li>
							<li className="social-icons">
								<a
									href="https://www.linkedin.com/in/achyuthavikaram/"
									target="_blank"
									rel="noreferrer"
									className="icon-colour home-social-icons"
								>
									<FaLinkedinIn />
								</a>
							</li>
							<li className="social-icons">
								<a
									href="https://www.instagram.com/_lightening_rose__/"
									target="_blank"
									rel="noreferrer"
									className="icon-colour home-social-icons"
								>
									<AiFillInstagram />
								</a>
							</li>
						</ul>
					</Col>
				</Row>
			</Container>
		</Container>
	);
}

export default Home2;
