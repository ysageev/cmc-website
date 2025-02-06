import ServiceBanner from "../ServiceBanner.jsx"
import ServiceItem from "../ServiceItem.jsx"
import "../services.css"

function Completion() {
	return (
		<div id="comp-cert" style={{ scrollMarginTop: 60 }}>
			<ServiceBanner icon="fa-badge-check" title="Completion Certificates and Closeout" details="Certified Success.  Close with Certainty." />

			<div className="service-content" style={{ width: "100%" }}>
				<ServiceItem text="Completion Certificates" icon="fa-file-signature" />
				<ServiceItem text="Final Requisition Review" icon="fa-ruler-triangle" />
				<ServiceItem text="Closeout Documents Review" icon="fa-hand-holding-circle-dollar" />
			</div>
		</div>
	)
}

export default Completion
