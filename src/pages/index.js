import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import CompaniesUsing from "@site/src/components/CompaniesUsing";
import Heading from "@theme/Heading";
import styles from "./index.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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

function Home() {
	const { siteConfig } = useDocusaurusContext();
	return (
		<Layout>
			<Hero />
			<Consultation />
			<WhatWeDo />
			<ServicesBrochure />
			<ProblemsWeSolve />
		</Layout>
	);
}

function Hero() {
	return (
		<div
			style={{
				backgroundImage: `url(${"img/hero-background.png"})`,
				backgroundSize: "cover",
				backgroundRepeat: "no-repeat",
			}}
		>
			<div style={{ clear: "both", paddingTop: 15, height: 38 }}>
				<CompaniesUsing />
			</div>
			<div style={{ padding: 40 }}>
				<h1
					style={{
						fontSize: "2.5em",
						fontWeight: "bold",
						fontFamily: "Lexend",
					}}
				>
					Reduce Risk, Enhance Decisions, Get Results
				</h1>
				<p style={{ fontSize: "1.2em", maxWidth: 800 }}>
					For 30+ years, CMC has served Private Equity Investors and Lending
					Institutions in <strong>Commercial Real Estate Lending.</strong>
					<br />
					<br />
					We empower our clients to effectively measure, assess, and mitigate
					construction project risks.
					{/* <img src="img/hero-background.png" alt="backgroundimage" /> */}
				</p>
				<div
					style={{
						display: "flex",
						flexWrap: "wrap",
						gap: 10,
						paddingBottom: 20,
					}}
				>
					<Link
						className="button button--secondary button--lg"
						to="/docs/learnmore"
					>
						Learn More
					</Link>
					<Link
						className="button button--primary button--lg"
						to="/docs/introvideo"
					>
						Watch Video <i className="fa-duotone fa-solid fa-video" />
					</Link>
				</div>
			</div>
		</div>
	);
}
function Consultation() {
	return (
		<div
			style={{
				display: "flex",
				alignItems: "flex-end",
				flexWrap: "wrap",
				padding: 50,
				backgroundColor: "#343434",
				color: "white",
			}}
		>
			<span style={{ color: "white", fontSize: 28, marginRight: 20 }}>
				<span style={{ color: "#C4F1FF" }}>Master</span> your portfolio,
				<span style={{ color: "#C4F1FF" }}> Maximize</span> the
				potential...&nbsp;
				<Link
					className="button button--primary button--lg"
					to="/docs/introvideo"
				>
					Free Consultation
					<i className="fa-duotone fa-solid fa-paper-plane" />
				</Link>
			</span>
		</div>
	);
}

function ServicesBrochure() {
	return (
		<div
			style={{
				display: "flex",
				alignItems: "flex-end",
				flexWrap: "wrap",
				padding: 50,
				backgroundColor: "#47B2E0",
				color: "white",
			}}
		>
			<span style={{ color: "white", fontSize: 28, marginRight: 20 }}>
				<span style={{ color: "#C4F1FF" }}>Download</span> the Services
				<span style={{ color: "#C4F1FF" }}> Brochure</span> &nbsp;
				<Link
					className="button button--primary button--lg"
					to="/docs/introvideo"
				>
					Download Brochure <i className="fa-duotone fa-solid fa-download" />
				</Link>
			</span>
		</div>
	);
}

function WhatWeDo() {
	return (
		<div style={{ margin: 40 }}>
			<span style={{ fontSize: "2em", fontWeight: "bold" }}>
				What we do for you..
			</span>
			<br />
			<br />
			<ServicesListItem
				icon="fa-helmet-safety"
				title="Construction Risk Management"
				details="Minimize Risk. Maximize Confidence"
			/>
			<br />
			<ServicesListItem
				icon="fa-building-magnifying-glass"
				title="Property Inspection and Due Diligence"
				details="Inspect with Precision.  Invest with Confidence."
			/>
			<br />
			<ServicesListItem
				icon="fa-suitcase"
				title="Data Analytics and Visualization"
				details="Best decisions backed by data."
			/>
			<br />
			<ServicesListItem
				icon="fa-chart-mixed-up-circle-dollar"
				title="Portfolio Management"
				details="Master your portfolio. Maximize the potential."
			/>
			<br />
			<ServicesListItem
				icon="fa-badge-check"
				title="Completion Certificates and Closeout"
				details="Certified Success.  Close with Certainty."
			/>
		</div>
	);
}

function ServicesListItem({ icon, title, details }) {
	return (
		<div style={{ display: "flex", alignItems: "center" }}>
			<i
				className={`fa-duotone fa-solid ${icon} fa-3x fa-fw`}
				style={{
					"--fa-primary-color": "#47B2E0",
					"--fa-secondary-color": "gray",
				}}
			/>
			<div style={{ marginLeft: 20, lineHeight: 1.4 }}>
				<div style={{ fontWeight: "bold", fontSize: "1.3em" }}>{title}</div>
				<div>{details}</div>
			</div>
		</div>
	);
}

function ProblemsWeSolve() {
	return (
		<div style={{ paddingLeft: 40 }}>
			<span style={{ fontSize: "2em", fontWeight: "bold" }}>
				Problems we solve...
			</span>
			<p style={{ fontSize: "1.2em", maxWidth: 800 }}>
				We provide solutions to the following problems when dealing with
				Commercial Real Estate Lending
			</p>
			<div style={{ display: "flex", flexWrap: "wrap" }}>
				<PainPoints />
				<Capabilities />
			</div>
		</div>
	);
}

const painStyle = {
	"--fa-primary-color": "red",
	"--fa-secondary-color": "red",
	marginRight: 10,
};

function PainPoints() {
	return (
		<div>
			<span style={{ fontSize: "1.5em", fontWeight: "bold" }}>
				Pain Points:{" "}
			</span>
			<ul>
				<li>
					<i className="fa-duotone fa-solid fa-fire" style={painStyle} />
					Slow Underwriting Process
				</li>
				<li>
					<i className="fa-duotone fa-solid fa-fire" style={painStyle} />
					Difficulty Assessing Property Risk
				</li>
				<li>
					<i className="fa-duotone fa-solid fa-fire" style={painStyle} />
					Regulatory Compliance Challenges
				</li>
				<li>
					<i className="fa-duotone fa-solid fa-fire" style={painStyle} />
					Inaccurate Asset Valuation
				</li>
				<li>
					<i className="fa-duotone fa-solid fa-fire" style={painStyle} />
					Inaccurate 3rd Party Analytics
				</li>
				<li>
					<i className="fa-duotone fa-solid fa-fire" style={painStyle} />
					Limited Visiblity of Portfolio
				</li>
				<li>
					<i className="fa-duotone fa-solid fa-fire" style={painStyle} />
					Lack of Borrower Transparency
				</li>
				<li>
					<i className="fa-duotone fa-solid fa-fire" style={painStyle} />
					Difficulty managing Distressed Assets
				</li>
			</ul>
		</div>
	);
}

const capabStyle = {
	"--fa-primary-color": "black",
	"--fa-secondary-color": "green",
	marginRight: 10,
};

function Capabilities() {
	return (
		<div>
			<span style={{ fontSize: "1.5em", fontWeight: "bold" }}>
				Our Capabilities:
			</span>
			<ul>
				<li>
					<i className="fa-duotone fa-solid fa-wrench" style={capabStyle} />
					Risk Mitigation
				</li>
				<li>
					<i className="fa-duotone fa-solid fa-wrench" style={capabStyle} />
					Portfolio Diversification
				</li>
				<li>
					<i className="fa-duotone fa-solid fa-wrench" style={capabStyle} />
					Loan Underwriting Efficiency
				</li>
				<li>
					<i className="fa-duotone fa-solid fa-wrench" style={capabStyle} />
					Data-Driven Decision Making
				</li>
				<li>
					<i className="fa-duotone fa-solid fa-wrench" style={capabStyle} />
					Accurate Asset Valuation
				</li>
				<li>
					<i className="fa-duotone fa-solid fa-wrench" style={capabStyle} />
					Predictive Analytics
				</li>
				<li>
					<i className="fa-duotone fa-solid fa-wrench" style={capabStyle} />
					Deep Due Diligence
				</li>
				<li>
					<i className="fa-duotone fa-solid fa-wrench" style={capabStyle} />
					Loan Portfolio Visiblity
				</li>
				<li>
					<i className="fa-duotone fa-solid fa-wrench" style={capabStyle} />
					Loan Monitoring Automation
				</li>
				<li>
					<i className="fa-duotone fa-solid fa-wrench" style={capabStyle} />
					Integrated Financial Reporting
				</li>
			</ul>
		</div>
	);
}

export default Home;
