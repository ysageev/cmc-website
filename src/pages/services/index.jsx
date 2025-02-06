import Layout from "@theme/Layout"
import Hero from "./panes/Hero.jsx"
import RiskManagement from "./panes/construction-risk/index.jsx"
import PropertyInspections from "./panes/property-insp/index.jsx"
import PortfolioManagement from "./panes/portfolio/index.jsx"
import DataAnalytics from "./panes/analytics/index.jsx"
import Completion from "./panes/completion/index.jsx"
import CardPanel from "./panes/CardPanel.jsx"
import HistoricPreservation from "./panes/historic/index.jsx"
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
				<DataAnalytics />
				<Completion />
				<CardPanel />
			</div>
		</Layout>
	)
}

export default Services
