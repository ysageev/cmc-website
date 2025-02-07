import PanelContainer, { PanelHeader, ActionLabel, ActionItemList, ActionContainer } from "../PhaseStyles.jsx"

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
						<li>Payment requisitions, invoices, and budget reconciliation</li>
						<li>Current Partial Lien Waivers</li>
						<li>Change Orders and Potential Change Orders</li>
						<li>Contingency funding, availability, and shortfalls</li>
						<li>Ongoing buyout status</li>
						<li>Construction and unit delivery schedules</li>
						<li>Construction progress</li>
						<li>Work-in-Place and Cost-to-Complete</li>
						<li>Quality of workmanship and exceptions to the work</li>
					</ul>
				</ActionItemList>

				<ActionLabel>Recommend:</ActionLabel>
				<ActionItemList>
					<ul>
						<li>Disbursement amount</li>
					</ul>
				</ActionItemList>
				<ActionLabel>Deliver:</ActionLabel>
				<ActionItemList>
					<ul>
						<li>Site Visit Report</li>
					</ul>
				</ActionItemList>
			</ActionContainer>
		</PanelContainer>
	)
}
export default Phase_Monitoring
