import Link from "@docusaurus/Link";
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
// function HomepageHeader() {
// 	const { siteConfig } = useDocusaurusContext();
// 	return (
// 		<header className={clsx("hero hero--primary", styles.heroBanner)}>
// 			<div className="container">
// 				<Heading as="h1" className="hero__title">
// 					{siteConfig.title}
// 				</Heading>
// 				<p className="hero__subtitle">{siteConfig.tagline}</p>
// 				<div className={styles.buttons}>
// 					<Link
// 						className="button button--secondary button--lg"
// 						to="/docs/intro"
// 					>
// 						Docusaurus Tutorial - 5min ⏱️
// 					</Link>
// 				</div>
// 			</div>
// 		</header>
// 	);
// }
