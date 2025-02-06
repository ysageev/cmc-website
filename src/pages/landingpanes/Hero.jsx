import Link from "@docusaurus/Link"
import CompaniesUsing from "@site/src/components/CompaniesUsing"
import CMCLogoLarge from "@site/src/components/common/CMCLogoLarge"

//TODO: NAMING AND HIERARCHY IS WRONG WRT STYLES
//_____________________________________________
function Hero() {
	return (
		<div className="page-header">
			<CMCLogoLarge style={{ paddingRight: 40 }} />
			<div className="page-body">
				<div className="page-header-text">Reduce Risk, Enhance Decisions, Get Results</div>
				<div className="page-header-details-text">
					For more than 35 years, CMC has served <strong>banks</strong> and <strong>investors</strong> in
					<strong>&nbsp;commercial construction.</strong>
					<br />
					<br />
					We empower our clients to understand and mitigate construction project risks.
				</div>
				<div className="page-links">
					{/* <Link className="button button--secondary button--lg" to="/services">
						Learn More
					</Link> */}
					<Link className="button button--primary button--lg" to="/docs/public/introvideo">
						Video <i className="fa-duotone fa-solid fa-video" />
					</Link>
					<br />
				</div>
			</div>

			<div style={{ height: 50 }}>
				<CompaniesUsing />
			</div>
		</div>
	)
}
export default Hero
