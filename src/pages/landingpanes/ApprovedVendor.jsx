import Link from "@docusaurus/Link"

function ApprovedVendor() {
	return (
		<div
			style={{
				padding: 30,

				fontSize: "1.5em",
				textWrap: "pretty",
				display: "flex",
				alignItems: "center",
				flexWrap: "wrap",
				justifyContent: "space-between",
				lineHeight: "2",
			}}
		>
			<div>
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
				<div style={{ height: 60 }}>
					<Link className="button button--primary button--lg" to="/docs/introvideo">
						Approval Materials &nbsp;
						<i className="fa-duotone fa-solid fa-download" />
					</Link>
				</div>
			</div>
			<div style={{ maxWidth: 500 }}>
				Be sure to add CMC to your institution's <span style={{ color: "#155f7e" }}>Approved Vendor List,</span> and download our
				<span style={{ color: "#155f7e" }}> portfolio materials.</span> &nbsp;&nbsp;&nbsp;
			</div>
		</div>
	)
}
export default ApprovedVendor
