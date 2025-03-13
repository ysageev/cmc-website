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
            <img src="/img/about/service-map-bare.png" className="service-map" />

            <div className="service-area-info">
                <div className="service-area-item">
                    <ColorChip clr="#D9782E" /> Secondary Market
                </div>
                <div className="service-area-item">
                    <ColorChip clr="#47B2E0" /> Active Market
                </div>
            </div>
        </div>
    )
}

const ColorChip = ({ clr }) => {
    return <div className="color-chip" style={{ backgroundColor: clr }} />
}
