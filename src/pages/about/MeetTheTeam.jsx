function MeetTheTeam() {
	return (
		<div style={{}}>
			<div style={{ fontSize: "2em", fontWeight: "bold" }}>
				Meet the team...
			</div>
			<div>
				Our team of highly skilled construction professionals are trained in
				certified in OSHA, ASTM and Code Enforcement.
			</div>

			<div style={{ display: "flex", flexWrap: "wrap" }}>
				<PhotoCard
					photo="/img/services/peter-schregel.png"
					title="President"
					linkedInURL="https://www.linkedin.com/in/peter-mark-schregel/"
					details="As President of CMC, Peter provides overall leadership for the company and oversees the project management teams. With over 25 years of experience, Peter is recognized as an industry expert and has forged long-standing relationships with some of the nation's largest banks and institutional investors. Since its founding in 1988, CMC has experienced much growth over the years, expanding both its service offerings and its geographical footprint. With Peter's vision and focus on technology, CMC has emerged as a leader in construction oversight services and risk management. Peter received his MBA from Canisius College and multiple undergraduate degrees from the State University of New York."
				/>

				<PhotoCard
					photo="/img/services/yair-sageev.png"
					title="Senior Vice President, Technology"
					linkedInURL="https://www.linkedin.com/in/yair-sageev-61a166a/"
					details="Yair leads all technology design, development and deployment related efforts at CMC. Yair also is a key contributor in the strategic planning process.An innovative software engineer, system architect and IT expert, Yair possesses more than 25 years of systems and software experience. Yair's background spans mobile apps to databases, utilizing a wide variety of languages, platforms and toolsets. Yair's previous work includes positions with Sony Research Laboratories, Sonata, Inc. and ThinAir Apps. Yair holds a master’s degree from NYU and performed his undergraduate work at the University of California, Berkeley."
				/>

				<PhotoCard
					photo="/img/services/jeff-charles.png"
					title="Regional Vice President"
					linkedInURL="https://www.linkedin.com/in/jeffreytcharles/"
					details="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
				/>

				<PhotoCard
					photo="/img/services/derek-perry.png"
					title="Consulting Team Leader"
					linkedInURL="https://www.linkedin.com/in/derek-perry-cmc/"
					details="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
				/>
			</div>
		</div>
	);
}

function PhotoCard({ photo, title, linkedInURL, details }) {
	return (
		<div style={{ maxWidth: 320 }}>
			<a
				href={linkedInURL}
				target="_blank"
				rel="noreferrer"
				style={{ position: "relative", left: 270, top: 80, zIndex: 1000 }}
			>
				<i className="fa-brands fa-linkedin fa-2x" />
			</a>
			<div
				style={{
					display: "flex",
					alignItems: "center",
					justifyContent: "space-around",
					flexDirection: "column",
					flexWrap: "wrap",
					margin: 10,
					padding: 0,
					// border: "1px solid gray",
					// borderRadius: 7,
				}}
			>
				<img src={photo} alt="manager-photo" style={{ width: 240 }} />

				<div style={{ fontWeight: "bold", fontSize: "1em", marginTop: 5 }}>
					{title}
				</div>
				<div
					style={{
						fontSize: ".8em",
						marginTop: 10,
						paddingLeft: 15,
						paddingRight: 5,
					}}
				>
					{details}
				</div>
			</div>
		</div>
	);
}

export default MeetTheTeam;
// {/* <i
// 			className={`fa-duotone fa-solid ${icon} fa-3x fa-fw`}
// 			style={{
// 				"--fa-primary-color": "#47B2E0",
// 				"--fa-secondary-color": "gray",
// 			}}
// 		/> */}
