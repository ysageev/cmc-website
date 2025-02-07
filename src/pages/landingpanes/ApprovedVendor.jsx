import Link from "@docusaurus/Link"

function ApprovedVendor() {
	return (
		<div
			style={{
				display: "flex",
				alignItems: "center",
				justifyContent: "space-between",
				flexWrap: "wrap",
				padding: 30,
				fontFamily: "Lexend, sans-serif",
				fontSize: "1.1em",
				textWrap: "pretty",
				lineHeight: "2",
			}}
		>
			<img
				src="img/approved-vendor.png"
				alt="rma logo"
				style={{
					display: "flex",
					alignItems: "flex-end",
					maxWidth: 300,
					paddingRight: 40,
				}}
			/>
			<div style={{ maxWidth: 600, textWrap: "pretty", marginTop: 20, marginBottom: 20 }}>
				Be sure to add CMC to your institution's <span style={{ fontWeight: 500 }}>Approved Vendor List,</span> and download our
				<span style={{ fontWeight: 500 }}> supporting documents.</span> &nbsp;&nbsp;&nbsp;
			</div>
			<div style={{ marginTop: 20, marginBottom: 20 }}>
				<Link className="button button--primary button--lg" to="/docs/public/introvideo">
					PDF &nbsp;
					<i className="fa-duotone fa-solid fa-download" />
				</Link>
			</div>
		</div>
	)
}
export default ApprovedVendor
