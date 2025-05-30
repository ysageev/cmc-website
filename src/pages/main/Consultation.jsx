import Link from "@docusaurus/Link"
import BlurbStrip from "./BlurbStrip"
import "./css/consultation.css"
import RotatingClients from "./RotatingClients.jsx"

const emailURL = "mailto:info@go-cmc.com?subject=CMC Consultation Request&body=Enter your information here"

const consult = (
    <div className="consultation-container">
        <Link
            className="button button--primary button--lg consultation-button"
            to={emailURL}
        >
            Free Consultation <i className="fa-duotone fa-solid fa-envelope" />
        </Link>
    </div>
)

const clients = <RotatingClients />

function Consultation() {
    return (
        <BlurbStrip
            left={clients}
            center={<div />}
            right={consult}
        />
    )
}

export default Consultation
