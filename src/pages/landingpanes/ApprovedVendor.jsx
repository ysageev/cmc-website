import Link from "@docusaurus/Link"
import BlurbStrip from "./BlurbStrip"

const docsRequestEmailURL = "mailto:info@go-cmc.com?subject=CMC Approval Documents Request&body=Enter your email here"

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
            }}
        >
            <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
                <img src="/img/cmc-icon.svg" style={{ height: 22 }} alt="cmc-icon" /> APPROVED <img src="/img/cmc-icon.svg" style={{ height: 20 }} alt="cmc-icon" />
            </div>
            <div style={{ fontSize: "2em" }}>VENDOR</div>
        </div>
    )
}

const left = <ApprovalImage />

const center = <div>Be sure to add CMC to your institution's Approved Vendor List. Request our supporting documents.</div>
const right = (
    <Link className="button button--primary button--lg" to={docsRequestEmailURL}>
        Request <i className="fa-duotone fa-envelope" />
    </Link>
)

function ApprovedVendor() {
    return <BlurbStrip left={left} center={center} right={right} />
}

export default ApprovedVendor
