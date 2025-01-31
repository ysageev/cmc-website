import ServiceBanner from "./ServiceBanner.jsx";
import ServiceItem from "./ServiceItem.jsx";
import "./services.css";

function DataAnalytics() {
	return (
		<div>
			<ServiceBanner
				icon="fa-chart-mixed-up-circle-dollar"
				title="Data Analytics and Visualization"
				details="Best decisions backed by data."
			/>

			<div className="service-content" style={{ width: "100%" }}>
				<ServiceItem text="Predictive Analytics" icon="fa-file-signature" />
				<ServiceItem
					text="Custom Reporting Tools and Dashboards"
					icon="fa-ruler-triangle"
				/>
				<ServiceItem
					text="Performance Forecasting"
					icon="fa-hand-holding-circle-dollar"
				/>
			</div>
		</div>
	);
}

export default DataAnalytics;
