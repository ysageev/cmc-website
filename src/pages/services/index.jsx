import Layout from "@theme/Layout";
import Hero from "./panes/Hero.jsx";
import ServiceBanner from "./panes/ServiceBanner.jsx";
import ServiceItem from "./panes/ServiceItem.jsx";

function Services() {
	return (
		<Layout style={{ overFlow: "hidden" }}>
			<div className="container">
				<Hero />
				<ServiceBanner
					icon="fa-hard-hat"
					title="Construction Risk Management"
					details="Minimize Risk.  Maximize Confidence."
				/>

				<div
					style={{
						fontSize: "1.3em",
						fontWeight: "bold",
						marginLeft: 30,
						marginTop: 10,
					}}
				>
					Review of:
				</div>
				<div className="service-content" style={{ height: 300 }}>
					<ServiceItem text="Contracts" icon="fa-file-signature" />
					<ServiceItem text="Plans" icon="fa-ruler-triangle" />
					<ServiceItem text="Budget" icon="fa-hand-holding-circle-dollar" />
					<ServiceItem text="Documents" icon="fa-files" />
				</div>
			</div>
		</Layout>
	);
}

export default Services;
