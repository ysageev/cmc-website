import Link from "@docusaurus/Link";

function ServicesBrochure() {
	return (
		<div
			className="blurb-strip"
			style={{
				display: "flex",
				alignItems: "flex-end",
				flexWrap: "wrap",
				padding: 50,
			}}
		>
			<span
				style={{
					color: "white",
					fontSize: 28,
					marginRight: 20,
				}}
			>
				<span style={{ color: "#C4F1FF" }}>Download</span> the Services
				<span style={{ color: "#C4F1FF" }}> Brochure</span> &nbsp;
				<Link
					className="button button--primary button--lg"
					to="/docs/introvideo"
				>
					Download Brochure <i className="fa-duotone fa-solid fa-download" />
				</Link>
			</span>
		</div>
	);
}
export default ServicesBrochure;
