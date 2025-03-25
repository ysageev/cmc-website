import "./css/clients.css"
import RotatingText from "@site/src/components/common/RotatingText.jsx"

const clientsArr = ["National Banks", "Regional Banks", "Community Banks", "Credit Unions", "Nonprofit Lenders", "Pension Funds", "Institutional Investors", "Municipalities", "Mortgage Companies"]

function RotatingClients() {
    return (
        <div className="clients-rotate-static">
            <div className="consultation-label">We serve:</div>
            <RotatingText
                texts={clientsArr}
                mainClassName="clients-rotate-main"
                staggerFrom={"last"}
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "-120%" }}
                staggerDuration={0.01}
                splitLevelClassName=""
                transition={{ type: "spring", damping: 30, stiffness: 400 }}
                rotationInterval={2200}
            />
        </div>
    )
}

export default RotatingClients
