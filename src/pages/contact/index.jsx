import Layout from "@theme/Layout";
import React from "react";

const Contact = (props) => {
	return (
		<Layout style={{ overFlow: "hidden" }}>
			<div className="container">
				<div
					style={{
						backgroundImage: `url(${"img/hero-background.png"})`,
						backgroundSize: "cover",
						backgroundRepeat: "no-repeat",
						paddingBottom: 30,
					}}
				>
					<div
						style={{
							fontSize: "1.8em",
							fontWeight: "bold",
							fontFamily: "Lexend",
							lineHeight: 1.3,
							paddingTop: 20,
							paddingLeft: 20,
						}}
					>
						Contact
					</div>
					<div
						style={{
							fontSize: "1.2em",

							lineHeight: 1.3,
							paddingTop: 20,
							paddingLeft: 30,
						}}
					>
						<div style={{ fontWeight: "bold" }}>Email:</div>
						<div
							style={{
								width: 200,
								fontSize: "1em",
								marginTop: 10,
								clear: "both",
								marginBottom: 10,
							}}
						>
							<div style={{ float: "left" }}>
								<i className="fa-thin fa-envelope" />
							</div>
							<a
								href="mailto:info@go-cmc.com"
								style={{
									fontFamily: "Lexend",
									fontWeight: "normal",

									width: 300,
									paddingLeft: 10,
								}}
							>
								info@go-cmc.com
							</a>
						</div>
						Inquiries, Requests, and Comments will be routed to the appropriate
						personnel.
					</div>
				</div>
			</div>
		</Layout>
	);
};

export default Contact;
