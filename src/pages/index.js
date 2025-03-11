import Layout from "@theme/Layout"
import Hero from "./landingpanes/Hero.jsx"
import Consultation from "./landingpanes/Consultation.jsx"
import Services from "./landingpanes/Services.jsx"
import PipelineCarousel from "./landingpanes/PipelineCarousel.jsx"
import Standards from "./landingpanes/Standards.jsx"
import OurClients from "./landingpanes/OurClients.jsx"
import ApprovedVendor from "./landingpanes/ApprovedVendor.jsx"
import PoweredByStructDB from "./landingpanes/PoweredByStructDB.jsx"
import Footprint from "./landingpanes/Footprint.jsx"

function Home() {
	return (
		<Layout>
			<div className="container">
				<Hero />
				<Services />
				<Footprint />
				<Consultation />
				<OurClients />
				<ApprovedVendor />
				<PipelineCarousel />
				<PoweredByStructDB />
				<Standards />
				<br />
			</div>
		</Layout>
	)
}

export default Home
