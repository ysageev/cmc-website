import ServiceBanner from "../ServiceBanner.jsx"
import ServiceItem from "../ServiceItem.jsx"
import "../services.css"

function PortfolioManagement() {
	return (
		<>
			<div id="port-man" style={{ scrollMarginTop: 60 }} />
			<div>
				<ServiceBanner icon="fa-suitcase" title="Portfolio Management" details="Master your portfolio. Maximize the potential." />

				<div className="service-content" style={{ width: "100%" }}>
					<div>
						<p>
							CMC’s experienced team can assess your project and create an appropriate action plan to resolve the issues associated with a problem project. Our staff has direct
							experience in administering problem project scenarios. Our services are intended to complement in-house capabilities while allowing the lender/investor or owner to
							maintain control of the overall process and to dictate the course of action.
							<br />
							<br />
							Every assignment is tailored to each client's particular needs or requirements. CMC approaches each assignment with a commitment to identifying and implementing an
							efficient and effective solution.
						</p>
						<p>
							CMC’s experienced team can assess your project and create an appropriate action plan to resolve the issues associated with a problem project. Our staff has direct
							experience in administering problem project scenarios. Our services are intended to complement in-house capabilities while allowing the lender/investor or owner to
							maintain control of the overall process and to dictate the course of action.
							<br />
							<br />
							Every assignment is tailored to each client's particular needs or requirements. CMC approaches each assignment with a commitment to identifying and implementing an
							efficient and effective solution.
						</p>
						<p>
							CMC’s experienced team can assess your project and create an appropriate action plan to resolve the issues associated with a problem project. Our staff has direct
							experience in administering problem project scenarios. Our services are intended to complement in-house capabilities while allowing the lender/investor or owner to
							maintain control of the overall process and to dictate the course of action.
							<br />
							<br />
							Every assignment is tailored to each client's particular needs or requirements. CMC approaches each assignment with a commitment to identifying and implementing an
							efficient and effective solution.
						</p>
					</div>
					<ServiceItem text="Loan Portfolio Risk Analytics" icon="fa-file-signature" />
					<ServiceItem text="Reporting and Risk Monitoring" icon="fa-ruler-triangle" />
					<ServiceItem text="Performance Optimization" icon="fa-hand-holding-circle-dollar" />
				</div>
			</div>
		</>
	)
}

export default PortfolioManagement
