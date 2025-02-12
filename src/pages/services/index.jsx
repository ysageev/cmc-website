import Layout from "@theme/Layout"
import Hero from "./panes/Hero.jsx"
import RiskManagement from "./panes/construction-risk/index.jsx"
import PropertyInspections from "./panes/property-insp/index.jsx"
import PortfolioManagement from "./panes/portfolio/index.jsx"
import CardPanel from "./panes/CardPanel.jsx"
import HistoricPreservation from "./panes/historic/index.jsx"
import DistressedAssets from "./panes/distressed-assets/index.jsx"
//________________________________________________
function Services() {
	return (
		<Layout>
			<div className="container">
				<Hero />
				<RiskManagement />
				<PropertyInspections />
				<PortfolioManagement />
				<HistoricPreservation />
				<DistressedAssets />
				<CardPanel />
			</div>
		</Layout>
	)
}

export default Services
