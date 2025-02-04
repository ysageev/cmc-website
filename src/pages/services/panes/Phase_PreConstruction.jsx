import { PanelContainer, PanelHeader, ActionLabel, ActionItemList, ActionContainer } from "./PhaseStyles.jsx"

//_____________________________
function Phase_PreConstruction() {
	return (
		<PanelContainer>
			<PanelHeader>Phase 1: Pre-Construction</PanelHeader>
			<ActionContainer>
				<ActionLabel>Assess:</ActionLabel>
				<ActionItemList>
					<ul>
						<li>Condition of existing buildings</li>
					</ul>
				</ActionItemList>
				<ActionLabel>Review and Analyze:</ActionLabel>
				<ActionItemList>
					<ul>
						<li>plans, drawings and specifications</li>
						<li>regulatory documents</li>
						<li>contract documents: design, construction, and loan (BLA)</li>
						<li>construction and disbursement schedules</li>
						<li>direct cost budget for appropriateness</li>
						<li>contingency budget(s)</li>
					</ul>
				</ActionItemList>

				<ActionLabel>Recommend:</ActionLabel>
				<ActionItemList>
					<ul>
						<li>Bonding or sub-guard insurance requirements</li>
					</ul>
				</ActionItemList>
				<ActionLabel>Deliver:</ActionLabel>
				<ActionItemList>
					<ul>
						<li>Plan & Cost Report</li>
					</ul>
				</ActionItemList>
			</ActionContainer>
		</PanelContainer>
	)
}
export default Phase_PreConstruction
