import Link from "@docusaurus/Link"

const emailURL = "mailto:info@go-cmc.com?subject=CMC Consultation Request&body=Enter your information here"

function Consultation() {
	return (
		<div
			style={{
				display: "flex",
				alignItems: "flex-start",
				flexWrap: "wrap",
				padding: 30,
				backgroundColor: "#343434",
				color: "white",
				gap: 20,
			}}
		>
			<span
				style={{
					display: "flex",
					alignItems: "flex-start",
					flexWrap: "wrap",
					color: "white",
					fontSize: 28,
					marginRight: 20,
					lineHeight: 1.2,
				}}
			>
				<span style={{ color: "#C4F1FF" }}>Talk</span>&nbsp;to us.
			</span>
			<Link className="button button--primary button--lg" to={emailURL}>
				Free Consultation
				<i className="fa-duotone fa-solid fa-envelope" style={{ marginLeft: 10 }} />
			</Link>
		</div>
	)
}
export default Consultation
