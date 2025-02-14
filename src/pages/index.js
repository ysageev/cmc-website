import Layout from "@theme/Layout"
import Hero from "./landingpanes/Hero.jsx"
import Consultation from "./landingpanes/Consultation.jsx"
import Services from "./landingpanes/Services.jsx"
import PipeLine from "./landingpanes/Pipeline.jsx"
import Standards from "./landingpanes/Standards.jsx"
import OurClients from "./landingpanes/OurClients.jsx"
import ApprovedVendor from "./landingpanes/ApprovedVendor.jsx"
import PoweredByStructDB from "./landingpanes/PoweredByStructDB.jsx"

function Home() {
	return (
		<Layout>
			<div className="container">
				<Hero />
				<Services />
				<Consultation />
				<PipeLine />
				<ApprovedVendor />
				<PoweredByStructDB />
				<OurClients />
				<Standards />
				<br />
			</div>
		</Layout>
	)
}

export default Home
