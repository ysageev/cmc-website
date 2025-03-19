import BorrowerManagement from "./BorrowerManagement"
import "./css/advantages.css"
import EliteReporting from "./EliteReporting"
import Footprint from "./Footprint"
import Scopes from "./Scopes"

function Advantages() {
    return (
        <div className="page-section">
            <div className="page-section-header">Advantages</div>
            <div className="adv-container">
                <Footprint />
                <Scopes />
                <EliteReporting />
                <BorrowerManagement />
            </div>
        </div>
    )
}

export default Advantages
