import Link from "@docusaurus/Link"

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
				<span style={{ color: "#C4F1FF" }}>Master </span> &nbsp;your portfolio,
				<span style={{ color: "#C4F1FF" }}>&nbsp;Maximize</span> &nbsp; potential...
			</span>
			<Link className="button button--primary button--lg" to="/docs/videos/introvideo">
				Free Consultation
				<i className="fa-duotone fa-solid fa-comments-question" style={{ marginLeft: 10 }} />
			</Link>
		</div>
	)
}
export default Consultation
