import Link from "@docusaurus/Link"

function WhatWeDo() {
	return (
		<div style={{ marginLeft: 30 }}>
			<span style={{ fontSize: "2em", fontWeight: "bold" }}>Our services</span>
			<br />
			<br />
			<div style={{ display: "flex", flexWrap: "wrap" }}>
				<ServicesListItem icon="fa-helmet-safety" title="Construction Risk Management" details="Reduce construction risk" url="/services#risk-man" />
				<br />
				<ServicesListItem icon="fa-building-magnifying-glass" title="Property Inspection and Due Diligence" details="Understand what you have." url="/services#prop-insp" />
				<br />
				<ServicesListItem icon="fa-chart-mixed-up-circle-dollar" title="Data Visualization" details="Intuitive, evidence-based decisions." url="/services#analytics" />
				<br />
				<ServicesListItem icon="fa-suitcase" title="Portfolio Management" details="Manage all loans in one place." url="/services#port-man" />
				<br />
				<ServicesListItem icon="fa-landmark-flag" title="Historic Preservation" details="Track compliance and tax credits." url="/services#historic" />
				<br />
				<ServicesListItem icon="fa-badge-check" title="Completion Certificates and Closeout" details="Completion with confidence." url="/services#comp-cert" />
				<br />
			</div>
		</div>
	)
}

function ServicesListItem({ icon, title, details, url }) {
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
			<Link href={url}>
				<i className={`fa-duotone fa-solid ${icon} fa-3x fa-fw`} style={{ "--fa-primary-color": "#47B2E0", "--fa-secondary-color": "gray" }} />
			</Link>
			<div style={{ marginLeft: 20, lineHeight: 1.4 }}>
				<Link href={url}>
					<div style={{ fontWeight: "bold", fontSize: "1.1em", textWrap: "pretty" }}>{title}</div>
				</Link>
				<div style={{ fontSize: ".7em" }}>{details}</div>
			</div>
		</div>
	)
}
export default WhatWeDo
