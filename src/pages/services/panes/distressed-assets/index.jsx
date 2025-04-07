import ServiceBanner from "../ServiceBanner.jsx"

function DistressedAssets() {
    return (
        <div
            id="distressed"
            style={{ scrollMarginTop: 60 }}
        >
            <ServiceBanner
                icon="fa-kit fa-distressasset"
                title="Distressed Assets and Loan Workout"
                details="Right the ship."
                divId="distressed-content"
            />

            <div
                id="distressed-content"
                className="collapse-div"
            >
                <div className="service-content">
                    CMC’s experienced team can assess your project and create an appropriate action plan to resolve the issues associated with a problem project. Our services are intended to
                    complement in-house capabilities while allowing the lender/investor or owner to maintain control of the overall process and to dictate the course of action.
                    <br />
                    <br />
                    Every assignment is tailored to each client's particular needs or requirements. CMC approaches each assignment with a commitment to identifying and implementing an efficient and
                    effective solution.
                </div>
            </div>
        </div>
    )
}

export default DistressedAssets
