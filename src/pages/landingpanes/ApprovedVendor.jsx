import Link from "@docusaurus/Link"
import BlurbStrip from "./BlurbStrip"
import "./approved-vendor.css"

const docsRequestEmailURL = "mailto:info@go-cmc.com?subject=CMC Approval Documents Request&body=Enter your email here"

const ApprovalImage = () => {
    return (
        <div className="approved-vendor-container">
            <div className="approved-vendor-strip">
                <img src="/img/cmc-icon.svg" className="approved-vendor-icon-cmc" alt="cmc-icon" /> APPROVED <img src="/img/cmc-icon.svg" className="approved-vendor-icon-cmc" alt="cmc-icon" />
            </div>
            <div className="approved-vendor-text">VENDOR</div>
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
