import Layout from "@theme/Layout"
import Hero from "./main/Hero.jsx"
import Consultation from "./main/Consultation.jsx"
import Services from "./main/Services.jsx"
import PipelineCarousel from "./main/PipelineCarousel.jsx"
import Standards from "./main/Standards.jsx"
import OurClients from "./main/OurClients.jsx"
import ApprovedVendor from "./main/ApprovedVendor.jsx"
import PoweredByStructDB from "./main/PoweredByStructDB.jsx"
import Footprint from "./main/Footprint.jsx"

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
