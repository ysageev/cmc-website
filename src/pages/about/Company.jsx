import StructDBText from "/src/components/common/StructDBText"

function Company() {
    return (
        <div>
            <CompanyLineItem>
                We offer a full array of <strong>commercial construction consulting</strong> and <strong>property due diligence</strong> services.
            </CompanyLineItem>
            <CompanyLineItem>We employ experienced professionals with diverse backgrounds in the construction industry. </CompanyLineItem>
            <CompanyLineItem>
                Our staff are trained and certified in <strong>OSHA</strong>, <strong>ASTM</strong>, <strong>Building Safety</strong>, <strong>Code Enforcement</strong>, and much more.
            </CompanyLineItem>
            <CompanyLineItem>
                CMC is powered by <StructDBText /> software -- the benchmark in construction monitoring and management technology.
            </CompanyLineItem>
            <CompanyLineItem>Our unique combination of industry expertise and gold-standard tools allows our clients to lend insightfully.</CompanyLineItem>
        </div>
    )
}

const CompanyLineItem = ({ children }) => {
    return (
        <div className="company-line-item">
            <img className="company-line-item-icon" src="/img/cmc-icon.svg" alt="cmc-icon" />
            <div className="company-line-item-text">{children}</div>
        </div>
    )
}

export default Company
