import ServiceItem from "../ServiceItem"
import ActionItem from "../ActionItem"

function Phase_PreConstruction() {
    return (
        <ServiceItem title="Phase 1: Pre-Construction">
            <ActionItem title="Assess">
                <ul>
                    <li>Condition of existing buildings</li>
                </ul>
            </ActionItem>
            <ActionItem title="Review and Analyze">
                <ul>
                    <li>Plans, drawings and specifications</li>
                    <li>Regulatory documents</li>
                    <li>Contract documents: design, construction, and loan (BLA)</li>
                    <li>Construction and disbursement schedules</li>
                    <li>Direct cost budget for appropriateness</li>
                    <li>Contingency budget(s)</li>
                </ul>
            </ActionItem>

            <ActionItem title="Recommend">
                <ul>
                    <li>Bonding or sub-guard insurance requirements</li>
                </ul>
            </ActionItem>
            <ActionItem title="Deliver">
                <ul>
                    <li>Plan & Cost Report</li>
                </ul>
            </ActionItem>
        </ServiceItem>
    )
}
export default Phase_PreConstruction
