import Link from "@docusaurus/Link"
import CompaniesUsing from "@site/src/components/CompaniesUsing"
import CMCLogoLarge from "@site/src/components/common/CMCLogoLarge"

//TODO: NAMING AND HIERARCHY IS WRONG WRT STYLES
//_____________________________________________
function Hero() {
    return (
        <div>
            <div className="page-header">
                <CMCLogoLarge style={{ paddingRight: 40 }} />
                <div className="page-header-text">Reduce Risk, Lend Confidently</div>
                <div className="page-header-details-text">
                    For more than 35 years, CMC has served <strong>banks</strong> and <strong>investors</strong> in
                    <strong>&nbsp;commercial construction lending.</strong>
                    <br />
                    <br />
                    We empower our clients to understand and mitigate construction loan risks.
                </div>
                <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", maxWidth: 400 }}>
                    <Link className="button button--primary button--lg" to="/docs/public/introvideo">
                        Video <i className="fa-duotone fa-solid fa-video" />
                    </Link>

                    <a className="button button--primary button--lg" href="pdf/cmc-services-brochure.pdf" rel="noreferrer" target="_blank">
                        Fact Sheet <i className="fa-duotone fa-solid fa-download" />
                    </a>
                </div>
                <div style={{ height: 38, marginTop: 40, marginBottom: 10 }}>
                    <CompaniesUsing />
                </div>
            </div>
        </div>
    )
}
export default Hero
