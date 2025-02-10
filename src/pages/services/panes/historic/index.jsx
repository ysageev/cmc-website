import ServiceBanner from "../ServiceBanner.jsx"
import PanelContainer, { PanelHeader, ActionLabel, ActionItemList, ActionContainer } from "../PhaseStyles.jsx"
import "../services.css"

function HistoricPreservation() {
	return (
		<div id="historic" style={{ scrollMarginTop: 60 }}>
			<ServiceBanner icon="fa-landmark-flag" title="Historic Preservation" details="NPS Compliance" divId="historic-content" />

			<div id="historic-content">
				<div className="service-content" style={{ width: "100%" }}>
					<div>
						<p>
							CMC offers complete assessment and tracking of Historic Preservation tax credit items for both the National Parks Service (NPS) and New York's State Historic
							Preservation Office (SHPO).
						</p>

						<p>We offer reports that cover both the application process and compliance during construction: </p>
					</div>
					<PanelContainer style={{ maxWidth: 300 }}>
						<PanelHeader>NPS Application, Pre-Shovel</PanelHeader>
						<ActionContainer>
							<ActionLabel>Review and Track:</ActionLabel>
							<ActionItemList>
								<ul>
									<li>Submissions</li>
									<li>Conditions</li>
									<li>Commitments</li>
									<li>Plan conformance of proposed Work Items</li>
								</ul>
							</ActionItemList>

							<ActionLabel>Deliver:</ActionLabel>
							<ActionItemList>
								<ul>
									<li>NPS Application Report</li>
								</ul>
							</ActionItemList>
						</ActionContainer>
					</PanelContainer>
					<PanelContainer style={{ maxWidth: 300 }}>
						<PanelHeader>NPS Compliance, Post-Shovel</PanelHeader>
						<ActionContainer>
							<ActionLabel>Perform:</ActionLabel>
							<ActionItemList>
								<ul>
									<li>Monthly project visits to monitor conformance</li>
								</ul>
							</ActionItemList>

							<ActionLabel>Review and Track:</ActionLabel>
							<ActionItemList>
								<ul>
									<li>Conformance of construction with Work Items in the application</li>
								</ul>
							</ActionItemList>

							<ActionLabel>Deliver:</ActionLabel>
							<ActionItemList>
								<ul>
									<li>NPS Construction Conformance Report</li>
								</ul>
							</ActionItemList>
						</ActionContainer>
					</PanelContainer>
				</div>
			</div>
		</div>
	)
}

export default HistoricPreservation
