import Link from "@docusaurus/Link";
import CompaniesUsing from "@site/src/components/CompaniesUsing";

function Hero() {
	return (
		<div
			style={{
				backgroundImage: `url(${"img/hero-background.png"})`,
				backgroundSize: "cover",
				backgroundRepeat: "no-repeat",
				paddingTop: 30,
				paddingRight: 30,
				paddingBottom: 30,
			}}
		>
			<div style={{ clear: "both", height: 38 }}>
				<CompaniesUsing />
			</div>
			<img
				src="img/cmc-logo.png"
				alt="cmc logo"
				style={{
					paddingTop: 20,
					paddingLeft: 20,
					marginBottom: 0,
					maxHeight: 140,
				}}
			/>
			<div
				style={{
					paddingLeft: 30,
					flexWrap: "wrap",
					alignItems: "center",
				}}
			>
				<div
					style={{
						fontSize: "1.8em",
						fontWeight: "bold",
						fontFamily: "Lexend",
						lineHeight: 1.3,
						paddingTop: 20,
					}}
				>
					Reduce Risk, Enhance Decisions, Get Results
				</div>

				<div
					style={{
						fontSize: "1.2em",
						paddingTop: 20,
						paddingBottom: 30,
						lineHeight: 1,
					}}
				>
					For more than 30 years, CMC has served Banks and Private Equity
					Investors in
					<strong>
						&nbsp;Commercial Real Estate Lending.
						<br />
					</strong>
					<br />
					We empower our clients to effectively measure, assess, and mitigate
					construction project risks.
				</div>
				<div
					style={{
						display: "flex",
						flexWrap: "wrap",
						gap: 10,
						paddingBottom: 20,
						marginTop: 20,
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
export default Hero;
