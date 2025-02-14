import Link from "@docusaurus/Link"

const docsRequestEmailURL = "mailto:info@go-cmc.com?subject=CMC Approval Documents Request&body=Enter your email here"

function ApprovedVendor() {
	return (
		<div
			style={{
				display: "flex",
				alignItems: "center",
				justifyContent: "space-between",
				flexWrap: "wrap",
				paddingLeft: 30,
				paddingRight: 40,
				fontFamily: "Lexend, sans-serif",
				fontSize: "1.1em",
				textWrap: "pretty",
				lineHeight: "1.5",
				marginTop: 0,
				marginBottom: 40,
			}}
		>
			{/* <img
				src="img/approved-vendor.png"
				alt="rma logo"
				style={{
					display: "flex",
					alignItems: "flex-end",
					maxWidth: 300,
					paddingRight: 40,
				}}
			/> */}
			<ApprovalImage />
			<div style={{ maxWidth: 600, textWrap: "pretty", paddingTop: 20, paddingBottom: 20 }}>
				Be sure to add CMC to your institution's <span style={{ fontWeight: 900 }}>Approved Vendor List,</span> and request our
				<span style={{ fontWeight: 500 }}> supporting documents.</span> &nbsp;&nbsp;&nbsp;
			</div>
			<div style={{ marginTop: 20, marginBottom: 20 }}>
				<Link className="button button--primary button--lg" to={docsRequestEmailURL}>
					Request &nbsp;
					<i className="fa-duotone fa-envelope" />
				</Link>
			</div>
		</div>
	)
}

const ApprovalImage = () => {
	return (
		<div
			style={{
				display: "flex",
				alignItems: "center",
				flexDirection: "column",
				border: "2px solid #47B2E0",
				borderRadius: 7,
				padding: 10,
				fontFamily: "lexend, sans-serif",
				fontWeight: "bold",
				boxShadow: "0px 0px 7px 2px",
			}}
		>
			<div style={{ display: "flex", alignItems: "center", gap: 5 }}>
				<img src="/img/cmc-icon.png" style={{ height: 22 }} alt="cmc-icon" /> APPROVED <img src="/img/cmc-icon.png" style={{ height: 20 }} alt="cmc-icon" />
			</div>
			<div style={{ fontSize: "2em" }}>VENDOR</div>
		</div>
	)
}
export default ApprovedVendor
