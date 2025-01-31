import Layout from "@theme/Layout";
import Hero from "./panes/Hero.jsx";
import ServiceBanner from "./panes/ServiceBanner.jsx";
import ServiceItem from "./panes/ServiceItem.jsx";

import RiskManagement from "./panes/RiskManagement.jsx";
import PropertyInspections from "./panes/PropertyInspections.jsx";
import PortfolioManagement from "./panes/PortfolioManagement.jsx";
import DataAnalytics from "./panes/DataAnalytics.jsx";
import Completion from "./panes/Completion.jsx";
import CardPanel from "./panes/CardPanel.jsx";
//________________________________________________
function Services() {
	return (
		<Layout style={{ overFlow: "hidden" }}>
			<div className="container">
				<Hero />
				<RiskManagement />
				<PropertyInspections />
				<PortfolioManagement />
				<DataAnalytics />
				<Completion />
				<CardPanel />
			</div>
		</Layout>
	);
}

export default Services;
