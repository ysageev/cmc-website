import styled from "styled-components"
import StructDBText from "/src/components/common/StructDBText"

const CompanyLineItem = styled.div`
	display: flex;
	align-items: center;
	padding-top: 10px;
	padding-bottom: 10px;
`
const CMCIcon = styled.img`
	width: 30px;
	margin-right: 10px;
`

const CMCLineText = styled.div`
	max-width: max(260px, 80%);
	text-wrap: pretty;
	padding-right: 10px;
`

const CompanyContainer = styled.div`
	font-family: Lexend;
	font-weight: 300;
	font-size: .9em;
	line-height: 1.3em;
	padding-top: 20px;
	padding-left: 20px;
	margin-bottom: 20px;
`

const SectionHeader = styled.div`
	font-family: Lexend;
	font-weight: 600;
	font-size: 1.4em;
	margin-bottom: 10px;
`

function Company() {
	return (
		<CompanyContainer>
			<SectionHeader>Company</SectionHeader>
			<CompanyLineItem>
				<CMCIcon src="img/cmc-icon.png" alt="cmc-icon" />
				<CMCLineText>
					CMC offers a full array of <strong>commercial construction consulting</strong> and <strong>property due diligence</strong> services.
				</CMCLineText>
			</CompanyLineItem>
			<CompanyLineItem>
				<CMCIcon src="img/cmc-icon.png" alt="cmc-icon" />
				<CMCLineText>CMC employs experienced professionals with diverse backgrounds in the construction industry.</CMCLineText>
			</CompanyLineItem>
			<CompanyLineItem>
				<CMCIcon src="img/cmc-icon.png" alt="cmc-icon" />
				<CMCLineText>
					CMC staff are trained and certified in <strong>OSHA</strong>, <strong>ASTM</strong>, <strong>Building Safety</strong> and <strong>Code Enforcement</strong>.
				</CMCLineText>
			</CompanyLineItem>
			<CompanyLineItem>
				<CMCIcon src="img/cmc-icon.png" alt="cmc-icon" />
				<CMCLineText>
					CMC is powered by <StructDBText /> software -- the benchmark in construction monitoring and management technology.
				</CMCLineText>
			</CompanyLineItem>
			<CompanyLineItem>
				<CMCIcon src="img/cmc-icon.png" alt="cmc-icon" />
				<CMCLineText>CMC's unique combination of industry expertise and gold-standard tools allows our clients to lend insightfully.</CMCLineText>
			</CompanyLineItem>
		</CompanyContainer>
	)
}

export default Company
