import Link from "@docusaurus/Link"

const docsRequestEmailURL = "mailto:info@go-cmc.com?subject=CMC Approval Documents Request&body=Enter your email here"

function ApprovedVendor() {
    return (
        <div
            style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-around",
                flexWrap: "wrap",
                fontFamily: "Lexend, sans-serif",
                fontSize: "1.1em",
                textWrap: "pretty",
                lineHeight: "1.5",
                marginTop: 50,
                marginBottom: 40,
                backgroundColor: "#343434",
                color: "white",
            }}
        >
            <ApprovalImage />
            <div style={{ maxWidth: 600, textWrap: "pretty", paddingTop: 20, paddingBottom: 20, textAlign: "center" }}>
                Be sure to add CMC to your institution's <span style={{ fontWeight: 900 }}>Approved Vendor List.</span> Request our
                <span style={{ fontWeight: 500 }}> supporting documents.</span>
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
                boxShadow: "0px 0px 7px 2px gray",
                backgroundColor: "white",
                color: "black",
                margin: "20px",
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
