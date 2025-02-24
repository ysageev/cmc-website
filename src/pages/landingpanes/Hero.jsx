import Link from "@docusaurus/Link"
import CompaniesUsing from "@site/src/components/CompaniesUsing"
import CMCLogoLarge from "@site/src/components/common/CMCLogoLarge"

//TODO: NAMING AND HIERARCHY IS WRONG WRT STYLES
//_____________________________________________
function Hero() {
    return (
        <div>
            <div className="page-header">
                <img src="img/cmc-logo-blue-long.svg" alt="cmc logo" className="cmc-logo" />

                <div className="page-header-text hero-header-text">
                    Reduce Risk, <br />
                    Lend Confidently
                </div>
                <div className="page-header-details-text">
                    For over 35 years, CMC has partnered with banks and investors in commercial construction lending to provide clarity and confidence
                    <br />
                    <br />
                    We empower our clients to effectively measure, assess, and mitigate construction loan risks.
                </div>
                <div className="hero-buttons">
                    <Link className="button button--primary button--lg" to="/docs/public/introvideo">
                        Video <i className="fa-duotone fa-solid fa-video" />
                    </Link>

                    <a className="button button--primary button--lg" href="pdf/cmc-services-brochure.pdf" rel="noreferrer" target="_blank">
                        Fact Sheet <i className="fa-duotone fa-solid fa-download" />
                    </a>
                </div>
                <div className="hero-scroller">
                    <CompaniesUsing />
                </div>
            </div>
        </div>
    )
}
export default Hero
//filter: "drop-shadow(0px 0px 9px darkgray)"
