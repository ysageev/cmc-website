import Link from "@docusaurus/Link"
import BlurbStrip from "./BlurbStrip"
import "./consultation.css"

const emailURL = "mailto:info@go-cmc.com?subject=CMC Consultation Request&body=Enter your information here"

const center = (
    <div className="consultation-container">
        <span className="consultation-text">
            <span className="consultation-highlight">Solutions</span> made clear.
        </span>
        <Link className="button button--primary button--lg" to={emailURL}>
            Free Consultation <i className="fa-duotone fa-solid fa-envelope" />
        </Link>
    </div>
)

function Consultation() {
    return <BlurbStrip left={<div />} center={center} right={<div />} />
}

export default Consultation
