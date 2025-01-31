import ServiceBanner from "./ServiceBanner.jsx";
import ServiceItem from "./ServiceItem.jsx";
import "./services.css";

function PropertyInspections() {
	return (
		<div>
			<ServiceBanner
				icon="fa-building-magnifying-glass"
				title="Property Inspection and Due Diligence"
				details="Inspect with Precision.  Invest with Confidence."
			/>

			<div className="service-content" style={{ width: "100%" }}>
				<ServiceItem
					text="Property Condition Assessment (PCA)"
					icon="fa-file-signature"
				/>
				<ServiceItem
					text="ASTM/FNMA/FMAC/PCA Limited Reports"
					icon="fa-ruler-triangle"
				/>
				<ServiceItem
					text="Preconstruction Survey Report"
					icon="fa-hand-holding-circle-dollar"
				/>
			</div>
		</div>
	);
}

export default PropertyInspections;
