import "./css/advantages.css"

function Footprint() {
    return (
        <div className="adv-subcontainer">
            <ServiceAreaGraphic />
            <div className="adv-blurb">
                <div className="adv-blurb-label">Wide Coverage</div>
                CMC has an extensive, primary service area that spans the Eastern Seaboard and Great Lakes Region.
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
                <div className="service-area-legend-item">
                    <ColorChip clr="#D9782E" /> Emerging Market
                </div>
                <div className="service-area-legend-item">
                    <ColorChip clr="#47B2E0" /> Active Market
                </div>
            </div>
        </div>
    )
}

const ColorChip = ({ clr }) => {
    return <div className="color-chip" style={{ backgroundColor: clr }} />
}
