import ServiceBanner from "../ServiceBanner.jsx"
import "../services.css"

function DistressedAssets() {
	return (
		<div id="comp-cert" style={{ scrollMarginTop: 60 }}>
			<ServiceBanner icon="fa-building-circle-exclamation" title="Distressed Assets and Loan Workout" details="Right the ship." divId="completion-content" />

			<div className="service-content" style={{ width: "100%" }}>
				<div id="distressed">
					REMOVE/CHANGE THIS ITEM
					<br />
					REMOVE/CHANGE THIS ITEM
					<br />
					REMOVE/CHANGE THIS ITEM
					<br />
					REMOVE/CHANGE THIS ITEM
					<br />
					REMOVE/CHANGE THIS ITEM
					<br />
				</div>
			</div>
		</div>
	)
}

export default DistressedAssets
