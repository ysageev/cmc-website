function ProblemsWeSolve() {
	return (
		<>
			<div
				style={{
					paddingLeft: 30,
					paddingTop: 30,
					paddingRight: 20,
					marginBottom: 20,
				}}
			>
				<span style={{ fontSize: "2em", fontWeight: "bold" }}>Problems we solve</span>
				<br />
				<br />
				<div style={{ fontSize: "1.5em", fontWeight: "bold", width: "100%", backgroundColor: "#343434", padding: 10 }}>Portfolio Management</div>
				<img src="/img/services/sankeys/portfolio.svg" alt="pain-points" style={{ width: "100%", padding: 0 }} />
				<br />
				<div style={{ fontSize: "1.5em", fontWeight: "bold", width: "100%", backgroundColor: "#343434", padding: 10 }}>Existing Property</div>
				<img src="/img/services/sankeys/existing.svg" alt="pain-points" style={{ width: "100%", padding: 0 }} />
			</div>
		</>
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
