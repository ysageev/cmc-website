import Link from "@docusaurus/Link"

function Services() {
    return (
        <div style={{ paddingLeft: 30, paddingTop: 30, paddingRight: 20, marginBottom: 30, textAlign: "center" }}>
            <div className="page-section-header">Our Services</div>

            <div style={{ display: "flex", flexWrap: "wrap", gap: 10, textAlign: "left", marginTop: 20 }}>
                <ServicesListItem icon="fa-helmet-safety" title="Construction Loan Risk Management" details="Reduce construction loan risk" url="/services#risk-man" />
                <ServicesListItem icon="fa-building-magnifying-glass" title="Property Inspection and Due Diligence" details="Understand what you have." url="/services#prop-insp" />
                <ServicesListItem icon="fa-suitcase" title="Portfolio Management" details="All your projects, one screen." url="/services#port-man" />
                <ServicesListItem icon="fa-landmark-flag" title="Historic Preservation" details="Track compliance and tax credits." url="/services#historic" />
                <ServicesListItem icon="fa-building-circle-exclamation" title="Distressed Assets and Loan Workout" details="Right the ship." url="/services#distressed" />
            </div>
        </div>
    )
}

function ServicesListItem({ icon, title, details, url }) {
    return (
        <div
            style={{
                display: "flex",
                alignItems: "center",
                paddingRight: 20,
                paddingBottom: 20,
                width: 400,
                textWrap: "pretty",
                // border: "1px solid gray",
            }}
        >
            <Link href={url}>
                <i className={`fa-duotone fa-solid ${icon} fa-3x fa-fw`} style={{ "--fa-primary-color": "#47B2E0", "--fa-secondary-color": "gray" }} />
            </Link>
            <div style={{ marginLeft: 20, lineHeight: 1.4 }}>
                <Link href={url}>
                    <div style={{ fontWeight: "bold", fontSize: "1.1em", textWrap: "pretty" }}>{title}</div>
                </Link>
                <div style={{ fontSize: ".7em" }}>{details}</div>
            </div>
        </div>
    )
}
export default Services
