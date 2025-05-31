import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/AchyuthaVikaram.png";
import Home2 from "./Home2";
import Type from "./Type";
import Tilt from "react-parallax-tilt";

function Home() {
	return (
		<section>
			<Container fluid className="home-section" id="home">
				<Container className="home-content">
					<Row>
						<Col md={7} className="home-header" style={{marginBottom:"2rem"}}>
							<h1 style={{ paddingBottom: 15 }} className="heading">
								Hi There!{" "}
								<span className="wave" role="img" aria-labelledby="wave">
									👋🏻
								</span>
							</h1>

							<h1 className="heading-name">
								I'M
								<strong className="main-name"> Vikaram Achyutha </strong>
							</h1>

							<div
								style={{ paddingLeft: 45, paddingTop: 20, textAlign: "left" }}
							>
								<Type />
							</div>
						</Col>

						<Col md={5} style={{ paddingBottom: 20,marginTop:10 }}>
							<Tilt>
								<img
									src={homeLogo}
									alt="home pic"
									className="img-fluid "
									style={{ maxHeight: "450px", borderRadius: "50%" }}
								/>
							</Tilt>
						</Col>
					</Row>
				</Container>
			</Container>
			<Home2 />
		</section>
	);
}

export default Home;
