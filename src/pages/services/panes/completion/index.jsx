import ServiceBanner from "../ServiceBanner.jsx"
// import ServiceItem from "../ServiceItem.jsx"
import "../services.css"

function Completion() {
	return (
		<div id="comp-cert" style={{ scrollMarginTop: 60 }}>
			<ServiceBanner icon="fa-badge-check" title="Completion Certificates and Closeout" details="Certified Success.  Close with Certainty." divId="completion-content" />

			<div className="service-content" style={{ width: "100%" }}>
				<div id="completion-content">
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

export default Completion
