import PanelContainer, { PanelHeader, ActionLabel, ActionItemList, ActionContainer } from "./PhaseStyles.jsx"

//_____________________________
function Phase_Completion() {
	return (
		<PanelContainer>
			<PanelHeader>Phase 3: Completion</PanelHeader>
			<ActionContainer>
				<ActionLabel>Review and Track:</ActionLabel>
				<ActionItemList>
					<ul>
						<li>Substantial Completion</li>
						<li>Final Lien Waivers</li>
						<li>Punch list</li>
						<li>Temporary and Permanent Certificates of Occupancy</li>
						<li>Contractors' Certificates-of-Completion</li>
						<li>Architect's Certificate-of-Compliance</li>
						<li>Consents of Surety</li>
						<li>As-Built Plans</li>
						<li>Warranty information</li>
					</ul>
				</ActionItemList>

				<ActionLabel>Recommend:</ActionLabel>
				<ActionItemList>
					<ul>
						<li>Final Advance</li>
					</ul>
				</ActionItemList>

				<ActionLabel>Deliver:</ActionLabel>
				<ActionItemList>
					<ul>
						<li>Closeout Report</li>
					</ul>
				</ActionItemList>
			</ActionContainer>
		</PanelContainer>
	)
}
export default Phase_Completion
