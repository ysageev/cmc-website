import Link from "@docusaurus/Link"

const emailURL = "mailto:info@go-cmc.com?subject=CMC Consultation Request&body=Enter your information here"

function Consultation() {
    return (
        <div
            style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-around",
                flexWrap: "wrap",
                padding: 20,
                backgroundColor: "#343434",
                color: "white",
            }}
        >
            <span
                style={{
                    color: "white",
                    fontSize: 28,
                    marginRight: 20,
                }}
            >
                <span style={{ color: "#C4F1FF" }}>Solutions</span> made clear. &nbsp;
                <Link className="button button--primary button--lg" to={emailURL}>
                    Free Consultation
                    <i className="fa-duotone fa-solid fa-envelope" style={{ marginLeft: 10 }} />
                </Link>
            </span>
        </div>
    )
}

export default Consultation
