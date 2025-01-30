import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Hero from "./landingpanes/Hero.jsx";
import Consultation from "./landingpanes/Consultation.jsx";
import ServicesBrochure from "./landingpanes/ServicesBrochure.jsx";
import WhatWeDo from "./landingpanes/WhatWeDo.jsx";
import ProblemsWeSolve from "./landingpanes/ProblemsWeSolve.jsx";
import Standards from "./landingpanes/Standards.jsx";
import WhoWeHelp from "./landingpanes/WhoWeHelp.jsx";
import ApprovedVendor from "./landingpanes/ApprovedVendor.jsx";
import PoweredByStructDB from "./landingpanes/PoweredByStructDB.jsx";

function Home() {
	const { siteConfig } = useDocusaurusContext();
	return (
		<Layout style={{ overFlow: "hidden" }}>
			<div className="container">
				<Hero />
				<Consultation />
				<WhatWeDo />
				<ServicesBrochure />
				<ProblemsWeSolve />
				<Standards />
				<WhoWeHelp />
				<ApprovedVendor />
				<PoweredByStructDB />
			</div>
		</Layout>
	);
}

export default Home;
