import "./about.css"
import StructDBText from "/src/components/common/StructDBText"

function Company() {
	return (
		<div className="company-container">
			<div className="section-header">Company</div>

			<CompanyLineItem>
				CMC offers a full array of <strong>commercial construction consulting</strong> and <strong>property due diligence</strong> services.
			</CompanyLineItem>

			<CompanyLineItem>CMC employs experienced professionals with diverse backgrounds in the construction industry. </CompanyLineItem>
			<CompanyLineItem>
				CMC staff are trained and certified in <strong>OSHA</strong>, <strong>ASTM</strong>, <strong>Building Safety</strong> and <strong>Code Enforcement</strong>.
			</CompanyLineItem>
			<CompanyLineItem>
				CMC is powered by <StructDBText /> software -- the benchmark in construction monitoring and management technology.
			</CompanyLineItem>
			<CompanyLineItem>CMC's unique combination of industry expertise and gold-standard tools allows our clients to lend insightfully.</CompanyLineItem>
		</div>
	)
}

const CompanyLineItem = ({ children }) => {
	return (
		<div className="company-line-item">
			<img className="cmc-icon" src="img/cmc-icon.png" alt="cmc-icon" />
			<div className="cmc-line-text">{children}</div>
		</div>
	)
}

export default Company
