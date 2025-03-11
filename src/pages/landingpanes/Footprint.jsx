import Link from "@docusaurus/Link"
import "./services-landing.css"
import clsx from "clsx"

function Footprint() {
    return (
        <div className="page-section">
            <div className="page-section-header">Service Area</div>

            <div className="service-area-container">
                <img src="/img/about/service-map-min.png" style={{ width: 300 }} />
                <div className="service-area-blurb">
                    CMC has an extensive, primary service area that spans the Eastern Seaboard and Great Lakes Region.
                    <br />
                    <br />
                    We can rapidly expand coverage to our secondary market.
                </div>
            </div>
        </div>
    )
}

export default Footprint
// Whether your project budget is below $1 million or over $250 million, we bring the same elite quality and features.
// <br />
// <br />
// <strong>CMC handles any size project, regardless of the hard cost value.</strong>
