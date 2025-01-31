import ServiceBanner from "./ServiceBanner.jsx";
import ServiceItem from "./ServiceItem.jsx";
import "./services.css";

function PortfolioManagement() {
	return (
		<div>
			<ServiceBanner
				icon="fa-suitcase"
				title="Portfolio Management"
				details="Master your portfolio. Maximize the potential."
			/>

			<div className="service-content" style={{ width: "100%" }}>
				<ServiceItem
					text="Loan Portfolio Risk Analytics"
					icon="fa-file-signature"
				/>
				<ServiceItem
					text="Reporting and Risk Monitoring"
					icon="fa-ruler-triangle"
				/>
				<ServiceItem
					text="Performance Optimization"
					icon="fa-hand-holding-circle-dollar"
				/>
			</div>
		</div>
	);
}

export default PortfolioManagement;
