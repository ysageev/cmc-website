import ServiceBanner from "./ServiceBanner.jsx";
import ServiceItem from "./ServiceItem.jsx";
import "./services.css";

function RiskManagement() {
	return (
		<div>
			<ServiceBanner
				icon="fa-hard-hat"
				title="Construction Risk Management"
				details="Minimize Risk.  Maximize Confidence."
			/>

			<div className="service-content" style={{ width: "100%" }}>
				<div
					style={{
						fontSize: "1.3em",
						fontWeight: "bold",
						paddingTop: 10,
						paddingLeft: 10,
						width: "100%",
						margin: 0,
					}}
				>
					Review of:
				</div>
				<ServiceItem text="Contracts" icon="fa-file-signature" />
				<ServiceItem text="Plans" icon="fa-ruler-triangle" />
				<ServiceItem text="Budget" icon="fa-hand-holding-circle-dollar" />
				<ServiceItem text="Documents" icon="fa-files" />
			</div>
		</div>
	);
}

export default RiskManagement;
