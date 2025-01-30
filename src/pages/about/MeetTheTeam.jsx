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
					name="Peter Schregel"
					title="President"
					linkedInURL="https://www.linkedin.com/in/peter-mark-schregel/"
					details="As President of CMC, Peter provides overall leadership for the company and oversees the project management teams. With over 25 years of experience, Peter is recognized as an industry expert and has forged long-standing relationships with some of the nation's largest banks and institutional investors. Since its founding in 1988, CMC has experienced much growth over the years, expanding both its service offerings and its geographical footprint. With Peter's vision and focus on technology, CMC has emerged as a leader in construction oversight services and risk management. Peter received his MBA from Canisius College and multiple undergraduate degrees from the State University of New York."
				/>

				<PhotoCard
					photo="/img/services/yair-sageev.png"
					name="Yair Sageev"
					title="Senior Vice President, Technology"
					linkedInURL="https://www.linkedin.com/in/yair-sageev-61a166a/"
					details="Yair leads all technology design, development and deployment related efforts at CMC. Yair also is a key contributor in the strategic planning process.An innovative software engineer, system architect and IT expert, Yair possesses more than 25 years of systems and software experience. Yair's background spans mobile apps to databases, utilizing a wide variety of languages, platforms and toolsets. Yair's previous work includes positions with Sony Research Laboratories, Sonata, Inc. and ThinAir Apps. Yair holds a master’s degree from NYU and performed his undergraduate work at the University of California, Berkeley."
				/>

				<PhotoCard
					photo="/img/services/jeff-charles.png"
					name="Jeff Charles"
					title="Regional Vice President"
					linkedInURL="https://www.linkedin.com/in/jeffreytcharles/"
					details="Jeff is the Regional Vice President, located in Rochester, NY and is involved in many projects with CMC. He has experience with most building types such as new construction, renovation, wood, steel, concrete, pre-cast, historic preservation (NPS/SHPO), hospital, educational, high/low-rise, residential, senior, Affordable Housing (NY HCR), commercial, manufacturing, retail, hotel, and auditorium/theatre. Duties include analysis, review, forecasting, tracking, and the reporting of project schedules, budgets, contingencies, change orders, applications for payment, preconstruction plan review, risk assessment/ management, special inspections (structural, geotechnical, concrete & soils testing etc...), and environmental conditions (asbestos, mold, groundwater, air quality etc...)"
				/>

				<PhotoCard
					photo="/img/services/derek-perry.png"
					name="Derek Perry"
					title="Consultant Team Leader"
					linkedInURL="https://www.linkedin.com/in/derek-perry-cmc/"
					details="Serving as the Senior Construction Consultant for CMC, Derek is responsible for the  monthly oversight reporting on construction activities along with project completion  and closeout. He is also responsible for overseeing analysis, forecasting, and reporting  project schedules, budgets, changes, contingencies, borrower draws, & environmental  considerations.  In addition, Derek serves as the team leader for the video surveyors (responsible for  visiting project sites to capture 360 video) and oversees the onboarding process for  every new employee for both consultants and video surveyors. He is a crucial part to  CMC’s success and has been a part of the team since 2016."
				/>
			</div>
		</div>
	);
}

function PhotoCard({ photo, name, title, linkedInURL, details }) {
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
				}}
			>
				<img src={photo} alt="manager-photo" style={{ width: 240 }} />

				<div style={{ fontWeight: "bold", fontSize: "1.3em", marginTop: 5 }}>
					{name}
				</div>
				<div
					style={{
						fontWeight: "500",
						fontStyle: "italic",
						fontSize: "1em",
						marginTop: 5,
					}}
				>
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
