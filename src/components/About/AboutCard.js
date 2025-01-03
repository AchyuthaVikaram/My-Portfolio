import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
	return (
		<Card className="quote-card-view">
			<Card.Body>
				<blockquote className="blockquote mb-0">
					<p style={{ textAlign: "justify" }}>
						Hi Everyone, I am <span className="purple">Vikaram Achyutha</span>{" "}
						from <span className="purple">IIIT RK Valley, India.</span>
						<br />I am a third-year student pursuing a degree in{" "}
						<b className="purple">Computer Science</b> with a CGPA of 9.67.I am
						a dedicated and results-driven Full Stack Developer with strong
						expertise in the <b className="purple">MERN stack</b> (MongoDB,
						Express.js, React.js, Node.js) and proficiency in Java. With years
						of hands-on experience in web development, I specialize in building
						responsive, scalable, and high-performance web applications. I
						possess a deep understanding of{" "}
						<b className="purple">data structures and algorithms (DSA) </b>,
						having solved over 150 challenges on Leetcode, which sharpens my
						problem-solving and coding abilities. In addition to my technical
						skills, I have practical experience working with cloud platforms
						such as AWS, and deploying applications via Render,Vercel. I have
						developed and deployed projects such as 'Trendify,' 'JobHunt,'
						'Wanderlust,' and have worked extensively
						with technologies like HTML, CSS, JavaScript, Bootstrap, SQL.
						I thrive in fast-paced environments and am eager to apply my
						skills in challenging roles where I can contribute to developing
						innovative solutions and optimizing existing systems.
					</p>
					<p style={{paddingLeft:"0",textAlign:"left"}}>Appart from coding I do </p>
					<ul>
						<li className="about-activity">
							<ImPointRight /> Exploring New Technologies
						</li>
						<li className="about-activity">
							<ImPointRight /> Mentoring and Sharing Knowledge
						</li>
						<li className="about-activity">
							<ImPointRight /> Participating in Hackathons
						</li>
					</ul>

					<p style={{ color: "rgb(155 126 172)",textAlign:"left" }}>
						"Keep pushing boundaries and creating value through technology!"{" "}
					</p>
					<footer className="blockquote-footer">Vikaram Achyutha</footer>
				</blockquote>
			</Card.Body>
		</Card>
	);
}

export default AboutCard;
