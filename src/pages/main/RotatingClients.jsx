import "./css/clients.css"
import RotatingText from "@site/src/components/common/RotatingText.jsx"

const ICON = "fa-duotone fa-solid fa-badge-check fa-xl fa-fw"
const ICON_STYLE = {
    "--fa-primary-color": "#47B2E0",
    "--fa-secondary-color": "#47B2E0",
}

const clientsArr = ["National Banks", "Regional Banks", "Community Banks", "Credit Unions", "Nonprofit Lenders", "Pension Funds", "Institutional Investors", "Municipalities", "Mortgage Companies"]

function RotatingClients() {
    return (
        <div className="clients-rotate-static">
            {/* <i className={ICON} /> */}
            We serve:&nbsp;&nbsp;
            <RotatingText
                texts={clientsArr}
                mainClassName="clients-rotate-main"
                staggerFrom={"last"}
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "-120%" }}
                staggerDuration={0.015}
                splitLevelClassName=""
                transition={{ type: "spring", damping: 30, stiffness: 400 }}
                rotationInterval={2000}
            />
        </div>
    )
}

function EntityItem({ label }) {
    return (
        <div className="clients-entity">
            <div>
                <i className={ICON} style={ICON_STYLE} />
            </div>
            <div>&nbsp;{label}</div>
        </div>
    )
}

export default RotatingClients
