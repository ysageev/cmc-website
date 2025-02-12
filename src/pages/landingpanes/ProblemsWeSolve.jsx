import ZoomImage from "@site/src/components/common/ZoomImage"

const graphHeaderStyle = {
	fontSize: "1.4em",
	fontWeight: 500,
	// marginLeft: 30,
	// padding: 10,
	// backgroundColor: "#343434",
	color: "gray",
	// paddingLeft: 30,
}

function ProblemsWeSolve() {
	return (
		<>
			<div style={{ fontSize: "2em", fontWeight: "bold", paddingLeft: 30, marginTop: 30, textWrap: "wrap" }}>Solution Flows</div>

			<div
				style={{
					paddingLeft: 30,
					paddingTop: 30,
					paddingRight: 10,
					marginBottom: 20,
					display: "flex",
					flexWrap: "wrap",
					alignItems: "center",
					gap: 10,
					marginTop: -40,
				}}
			>
				<ZoomImage src="/img/services/sankeys/pipeline.svg" altText="Entire Pipeline" />
				<PainPoint title="Existing Property" imageName="existing" />
				<PainPoint title="Historic Property" imageName="historic" />
				<PainPoint title="Distressed Asset" imageName="distressed" />
				<PainPoint title="Proposed Project" imageName="proposed-project" />
				<PainPoint title="Under Construction" imageName="under-construction" />
				<PainPoint title="Loan Portfolio" imageName="portfolio" />
			</div>
		</>
	)
}

const PainPoint = ({ title, imageName }) => {
	const imgSrc = `/img/services/sankeys/${imageName}.svg`

	return (
		<div style={{}}>
			<div style={graphHeaderStyle}>{title}</div>

			<div style={{ maxWidth: 390 }}>
				<ZoomImage src={imgSrc} altText={title} />
			</div>
			<br />
		</div>
	)
}

const painStyle = {
	"--fa-primary-color": "red",
	"--fa-secondary-color": "red",
	marginRight: 10,
}

function PainPoints() {
	return (
		<div style={{ marginRight: 50 }}>
			<span style={{ fontSize: "1.5em", fontWeight: "bold" }}>Pain Points:</span>
			<ul className="fa-ul" style={{ marginLeft: 0 }}>
				<li>
					<i className="fa-duotone fa-solid fa-fire" style={painStyle} />
					Slow Underwriting Process
				</li>
				<li>
					<i className="fa-duotone fa-solid fa-fire" style={painStyle} />
					Assessing Property Risk
				</li>
				<li>
					<i className="fa-duotone fa-solid fa-fire" style={painStyle} />
					Regulatory Compliance
				</li>
				<li>
					<i className="fa-duotone fa-solid fa-fire" style={painStyle} />
					Inaccurate Asset Valuation
				</li>
				<li>
					<i className="fa-duotone fa-solid fa-fire" style={painStyle} />
					Poor 3rd Party Analytics
				</li>
				<li>
					<i className="fa-duotone fa-solid fa-fire" style={painStyle} />
					Limited Portfolio Visibility
				</li>
				<li>
					<i className="fa-duotone fa-solid fa-fire" style={painStyle} />
					Lack of Borrower Transparency
				</li>
				<li>
					<i className="fa-duotone fa-solid fa-fire" style={painStyle} />
					Distressed Assets
				</li>
			</ul>
		</div>
	)
}

const capabStyle = {
	marginRight: 10,
}

function Capabilities() {
	return (
		<div>
			<span style={{ fontSize: "1.5em", fontWeight: "bold" }}>Our Capabilities:</span>
			<ul className="fa-ul" style={{ marginLeft: 0 }}>
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
	)
}
export default ProblemsWeSolve
