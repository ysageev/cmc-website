import Link from "@docusaurus/Link"
import CompaniesUsing from "@site/src/components/CompaniesUsing"
import CMCLogoLarge from "@site/src/components/common/CMCLogoLarge"
import styled from "styled-components"

const PageHeader = styled.div`
	background-image: url("img/hero-background.png");
	background-size: cover;	
	background-repeat: no-repeat;
	padding-bottom: 30px;
`

const PageHeaderText = styled.div`
	font-size: 1.8em;
	font-weight: bold;
	font-family: Lexend;
	line-height: 1.3em;
	padding-top: 20px;
	
`

const PageHeaderDetailsText = styled.div`
	font-weight: normal;
	font-size: 1.2em;
	line-height: 1.3em;
	padding-top: 20px;
	margin-bottom: 20px;
	padding-right: 10px;
	text-wrap: pretty;
`

const PageBody = styled.div`
	display: flex;
	align-items: center;
	flex-wrap: wrap;
	padding-bottom: 20px;
	padding-left: 30px;
`
const PageLinkContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	padding-bottom: 20px;
	margin-top: 20px;
	gap: 10px;
`
const TickerContainer = styled.div`
	clear: both;
	height: 38px;
	margin-top: 20px;
`
//TODO: NAMING AND HIERARCHY IS WRONG WRT STYLES
//_____________________________________________
function Hero() {
	return (
		<PageHeader>
			<CMCLogoLarge />
			<PageBody>
				<PageHeaderText>Reduce Risk, Enhance Decisions, Get Results</PageHeaderText>
				<PageHeaderDetailsText>
					For more than 30 years, CMC has served Banks and Private Equity Investors in
					<strong>
						&nbsp;Commercial Real Estate Lending.
						<br />
					</strong>
					<br />
					We empower our clients to effectively measure, assess, and mitigate construction project risks.
				</PageHeaderDetailsText>
				<PageLinkContainer>
					<Link className="button button--secondary button--lg" to="/services">
						Learn More
					</Link>
					<Link className="button button--primary button--lg" to="/docs/videos/introvideo">
						Watch Video <i className="fa-duotone fa-solid fa-video" />
					</Link>
				</PageLinkContainer>
			</PageBody>

			<TickerContainer>
				<CompaniesUsing />
			</TickerContainer>
		</PageHeader>
	)
}
export default Hero
