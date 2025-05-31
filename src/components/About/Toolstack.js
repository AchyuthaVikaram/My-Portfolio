import React from "react";
import "./teckstackcss.css";
import { Col, Row } from "react-bootstrap";
import {
	SiVisualstudiocode,
	SiSlack,
	SiVercel,
	SiHoppscotch,
	SiRender,
} from "react-icons/si";


function Toolstack() {
	return (
		<Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
			<Col xs={4} md={2} className="tech-icons">
				<div className="tooltip-container">
					<SiVisualstudiocode />
					<span className="tooltip-text">VS Code</span>
				</div>
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<div className="tooltip-container">
					<SiHoppscotch />
					<span className="tooltip-text">Hoppscotch</span>
				</div>
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<div className="tooltip-container">
					<SiSlack />
					<span className="tooltip-text">Slack</span>
				</div>
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<div className="tooltip-container">
					<SiVercel />
					<span className="tooltip-text">Vercel</span>
				</div>
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<div className="tooltip-container">
					<SiRender />
					<span className="tooltip-text">Render</span>
				</div>
			</Col>
		</Row>
	);
}

export default Toolstack;
