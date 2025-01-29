function WhatWeDo() {
	return (
		<div style={{ marginLeft: 30 }}>
			<span style={{ fontSize: "2em", fontWeight: "bold" }}>
				Our services...
			</span>
			<br />
			<br />
			<div style={{ display: "flex", flexWrap: "wrap" }}>
				<ServicesListItem
					icon="fa-helmet-safety"
					title="Construction Risk Management"
					details="Minimize Risk. Maximize Confidence"
				/>
				<br />
				<ServicesListItem
					icon="fa-building-magnifying-glass"
					title="Property Inspection and Due Diligence"
					details="Inspect with Precision.  Invest with Confidence."
				/>
				<br />
				<ServicesListItem
					icon="fa-chart-mixed-up-circle-dollar"
					title="Data Analytics and Visualization"
					details="Best decisions backed by data."
				/>
				<br />
				<ServicesListItem
					icon="fa-suitcase"
					title="Portfolio Management"
					details="Master your portfolio. Maximize the potential."
				/>
				<br />
				<ServicesListItem
					icon="fa-badge-check"
					title="Completion Certificates and Closeout"
					details="Certified Success.  Close with Certainty."
				/>
				<br />
				<ServicesListItem
					icon="fa-landmark-flag"
					title="Historic Tax Credit Monitoring"
					details="Track Tax Credits."
				/>
			</div>
		</div>
	);
}

function ServicesListItem({ icon, title, details }) {
	return (
		<div
			style={{
				display: "flex",
				alignItems: "center",
				paddingRight: 20,
				paddingBottom: 20,
				width: 400,
			}}
		>
			<i
				className={`fa-duotone fa-solid ${icon} fa-3x fa-fw`}
				style={{
					"--fa-primary-color": "#47B2E0",
					"--fa-secondary-color": "gray",
				}}
			/>
			<div style={{ marginLeft: 20, lineHeight: 1.4 }}>
				<div style={{ fontWeight: "bold", fontSize: "1.1em" }}>{title}</div>
				<div style={{ fontSize: ".7em" }}>{details}</div>
			</div>
		</div>
	);
}
export default WhatWeDo;
