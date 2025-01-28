import Link from "@docusaurus/Link";

function ApprovedVendor() {
	return (
		<div
			className="blurb-strip"
			style={{
				padding: 30,
				color: "white",
				fontSize: "1.5em",
				textWrap: "pretty",
				display: "flex",
				alignItems: "center",
				flexWrap: "wrap",
				justifyContent: "space-between",
				lineHeight: "2",
			}}
		>
			<img
				src="img/approved-vendor.png"
				alt="rma logo"
				style={{
					float: "left",

					maxWidth: 300,
					marginLeft: -10,
				}}
			/>

			<div>
				Be sure to add CMC to your institution's{" "}
				<span style={{ color: "#C4F1FF" }}>Approved Vendor List</span>, and
				download our
				<span style={{ color: "#C4F1FF" }}> portfolio materials.</span>{" "}
				&nbsp;&nbsp;&nbsp;
			</div>
			<br />
			<div>
				<Link
					className="button button--primary button--lg"
					to="/docs/introvideo"
				>
					Approval Materials &nbsp;
					<i className="fa-duotone fa-solid fa-download" />
				</Link>
			</div>
		</div>
	);
}
export default ApprovedVendor;
