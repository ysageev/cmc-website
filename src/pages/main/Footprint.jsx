import "./css/footprint.css"

function Footprint() {
    return (
        <div className="page-section">
            <div className="page-section-header">Service Area</div>
            <div className="footprint-container">
                <ServiceAreaGraphic />
                <div className="service-area-blurb">CMC has an extensive, primary service area that spans the Eastern Seaboard and Great Lakes Region.</div>
            </div>
        </div>
    )
}

export default Footprint

const ServiceAreaGraphic = () => {
    return (
        <div>
            <img src="/img/about/service-map-bare.png" style={{ maxWidth: 300 }} />

            <div style={{ display: "flex", justifyContent: "space-around", alignItems: "center", fontSize: "clamp(8pt, .8vw, 12pt" }}>
                <div style={{ display: "flex", alignItems: "center" }}>
                    <ColorChip clr="#D9782E" /> Secondary Market
                </div>
                <div style={{ display: "flex", alignItems: "center" }}>
                    <ColorChip clr="#47B2E0" /> Active Market
                </div>
            </div>
        </div>
    )
}

const ColorChip = ({ clr }) => {
    return <div style={{ width: 20, height: 20, border: "1px solid gray", borderRadius: 2, padding: 5, margin: 5, backgroundColor: clr }} />
}
