import PanelContainer, { PanelHeader, ActionLabel, ActionItemList, ActionContainer } from "./PhaseStyles.jsx"

//_____________________________
function Phase_Monitoring() {
	return (
		<PanelContainer>
			<PanelHeader>Phase 2: Construction</PanelHeader>
			<ActionContainer>
				<ActionLabel>Perform:</ActionLabel>
				<ActionItemList>
					<ul style={{ textWrap: "pretty" }}>
						<li>Monthly project site visits and walk-throughs</li>
						<li>Photographic documentation of progress</li>
					</ul>
				</ActionItemList>

				<ActionLabel>Attend:</ActionLabel>
				<ActionItemList>
					<ul>
						<li>Monthly project meetings</li>
					</ul>
				</ActionItemList>

				<ActionLabel>Review, Track, and Analyze:</ActionLabel>
				<ActionItemList>
					<ul>
						<li>Payment requisitions</li>
						<li>Current Partial Lien Waivers</li>
						<li>Change Orders and Potential Change Orders</li>
						<li>Invoices</li>
						<li>Ongoing buyout status</li>
						<li>Budget reconciliation</li>
						<li>Contingency funding, availability, and shortfalls</li>
						<li>Construction and unit delivery schedules</li>
						<li>Construction Progress</li>
						<li>Work-in-place</li>
						<li>Quality of workmanship and Exceptions to the work</li>
					</ul>
				</ActionItemList>

				<ActionLabel>Recommend:</ActionLabel>
				<ActionItemList>
					<ul>
						<li>Cost-to-complete</li>
						<li>Disbursement amount</li>
					</ul>
				</ActionItemList>
				<ActionLabel>Deliver:</ActionLabel>
				<ActionItemList>
					<ul>
						<li>Site Visit Report</li>
						<li>Project metrics and predictive analytics</li>
					</ul>
				</ActionItemList>
			</ActionContainer>
		</PanelContainer>
	)
}
export default Phase_Monitoring
