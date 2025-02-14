import ServiceBanner from "../ServiceBanner.jsx"
// import ServiceItem from "./ServiceItem.jsx"
import "../services.css"
import Phase_PreConstruction from "./Phase_PreConstruction.jsx"
import Phase_Monitoring from "./Phase_Monitoring.jsx"
import Phase_Completion from "./Phase_Completion.jsx"

//_________________
function RiskManagement() {
	return (
		<div id="risk-man" style={{ scrollMarginTop: 60 }}>
			<ServiceBanner icon="fa-hard-hat" title="Construction Risk Management" details="Reduce construction loan risk." divId="risk-man-content" />

			<div id="risk-man-content" className="collapse-div">
				<div className="service-content" style={{ width: "100%" }}>
					<div>
						<p>
							Our team serves clients by providing expert analysis and advice to safeguard their interests during project construction and delivery. Our services can be customized
							to meet our client's needs based on project size, type, budget, borrower relationship and risk position.
						</p>
						<p>Our Construction Oversight services are typically provided in three (3) phases:</p>
					</div>
					<Phase_PreConstruction />
					<Phase_Monitoring />
					<Phase_Completion />
				</div>
			</div>
		</div>
	)
}

export default RiskManagement
