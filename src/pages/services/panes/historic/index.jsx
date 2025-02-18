import ServiceBanner from "../ServiceBanner.jsx"
import "../services.css"
import ServiceItem from "../ServiceItem.jsx"
import ActionItem from "../ActionItem"

function HistoricPreservation() {
    return (
        <div id="historic" style={{ scrollMarginTop: 60 }}>
            <ServiceBanner icon="fa-landmark-flag" title="Historic Preservation" details="NPS Compliance" divId="historic-content" />

            <div id="historic-content" className="collapse-div">
                <div className="service-content">
                    <p>
                        CMC offers complete assessment and tracking of Historic Preservation tax credit items for both the National Parks Service (NPS) and New York's State Historic Preservation
                        Office (SHPO).
                    </p>
                    <p>We offer reports that cover both the application process and compliance during construction: </p>

                    <div className="service-items two">
                        <ServiceItem title="NPS Application, Pre-Shovel">
                            <div className="action-container">
                                <ActionItem title="Perform">
                                    <ul>
                                        <li>Monthly project visits to monitor conformance</li>
                                    </ul>
                                </ActionItem>

                                <ActionItem title="Review and Track">
                                    <ul>
                                        <li>Conformance of construction with Work Items in the application</li>
                                    </ul>
                                </ActionItem>
                                <ActionItem title="Deliver">
                                    <ul>
                                        <li>NPS Application Report</li>
                                    </ul>
                                </ActionItem>
                            </div>
                        </ServiceItem>
                        <ServiceItem title="NPS Compliance, Post-Shovel">
                            <div className="action-container">
                                <ActionItem title="Perform">
                                    <ul>
                                        <li>Single visit to determine NPS submission conformance</li>
                                    </ul>
                                </ActionItem>

                                <ActionItem title="Review and Track">
                                    <ul>
                                        <li>Submissions</li>
                                        <li>Conditions</li>
                                        <li>Commitments</li>
                                        <li>Plan conformance of proposed Work Items</li>
                                    </ul>
                                </ActionItem>
                                <ActionItem title="Deliver">
                                    <ul>
                                        <li>NPS Construction Conformance Report</li>
                                    </ul>
                                </ActionItem>
                            </div>
                        </ServiceItem>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HistoricPreservation
