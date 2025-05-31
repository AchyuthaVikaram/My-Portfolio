import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
	return (
		<Card className="quote-card-view">
			<Card.Body>
				<blockquote className="blockquote mb-0">
					<p style={{ textAlign: "justify" }}>
						Hi Everyone, I’m <span className="purple">Vikaram Achyutha</span>{" "}
						from <span className="purple">IIIT RK Valley, India.</span>
						<br /> <br />
						I’m currently a third-year Computer Science student with a CGPA of{" "}
						<b className="purple">9.45</b>. I’m a passionate{" "}
						<b className="purple">Full Stack Developer</b> with expertise in the{" "}
						<b className="purple">MERN stack</b>, Java, and hands-on experience
						across both frontend and backend technologies.
						<br /> <br />
						My recent focus is on building impactful platforms, including SaaS
						products and AI-integrated tools. One of my proudest projects is{" "}
						<b className="purple">SensAI – an AI Career Coach</b> built using{" "}
						<b className="purple">
							Next.js, Gemini AI, Prisma, NeonDB, Tailwind CSS
						</b>
						, and <b>Inngest</b> for workflows.
						<br /> <br />
						I’m also exploring <b className="purple">DevOps & Cloud</b>—learning
						Docker, GitHub Actions, and deploying apps on{" "}
						<b className="purple">AWS and Google Cloud</b>. I’m building a{" "}
						<b className="purple">one-click deployment automation tool</b>
						using FastAPI and Django.
						<br /> <br />
						Over time, I’ve built and deployed projects like{" "}
						<b className="purple">Trendify, JobHunt, Wanderlust</b>, and{" "}
						<b className="purple">Event Management</b> platforms, working with a
						wide range of tools like{" "}
						<b className="purple">
							HTML, CSS, JavaScript, Bootstrap, SQL
						</b>
						, and modern cloud-native tech.
						<br /> <br />
						I’m an active problem solver with 150+ DSA questions solved on
						Leetcode.
					</p>
					<p style={{ paddingLeft: "0", textAlign: "left" }}>
						Appart from coding I do{" "}
					</p>
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

					<p style={{ color: "rgb(155 126 172)", textAlign: "left" }}>
						"Keep pushing boundaries and creating value through technology!"{" "}
					</p>
					<footer className="blockquote-footer">Vikaram Achyutha</footer>
				</blockquote>
			</Card.Body>
		</Card>
	);
}

export default AboutCard;
