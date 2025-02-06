import ServiceBanner from "../ServiceBanner.jsx"
import PanelContainer, { PanelHeader, ActionContainer } from "../PhaseStyles.jsx"
import "../services.css"

function PropertyInspections() {
	return (
		<div id="prop-insp" style={{ scrollMarginTop: 60 }}>
			<ServiceBanner icon="fa-building-magnifying-glass" title="Property Due Diligence" details="Understand what you have." />

			<div className="service-content" style={{ width: "100%" }}>
				<div>
					<p>
						<strong>A Property Needs Assessment (PNA)</strong> identifies a property's general physical condition and quality of improvements. CMC's experienced professionals
						detect and present deficiencies that could have an adverse impact on the property's cash flow, function, marketability and ultimate value.
					</p>
					<p>
						PNA reports can include an <strong>Expected Useful Life (EUL)</strong> analysis with replacement costs. This allows clients to identify, quantify, and budget the
						necessary funding for future building repairs and replacements. Clients often utilize this service for proactive portfolio management. As properties age, expenditures
						for replacements and improvements are imperative to maintaining an asset's value. Inadequate replacement reserve may result in substantial physical deterioration of the
						asset, which will in turn adversely affect its collateral value and significantly increase an investor's risk over term.
						<br />
						<br />
						<strong>PNA Report Types</strong>
						<br />
						<p>
							CMC offers four distinct PNA report formats. Each is tailored to meet a specific requirement or standard. Each may be supplemented with custom useful life analysis
							and capital cost tables:
						</p>
					</p>
				</div>

				<PanelContainer style={{ maxWidth: 300 }}>
					<PanelHeader>Pre-Construction</PanelHeader>
					<ActionContainer>
						A comprehensive report which is prepared in conjunction with a Plan and Cost Review Report where demolition and/or renovation is involved in a project. The purpose of
						this report is to ensure existing conditions of the property and site are included and accurately accounted for in the proposed Plans and Specs for the project.
					</ActionContainer>
				</PanelContainer>

				<PanelContainer style={{ maxWidth: 300 }}>
					<PanelHeader>Limited</PanelHeader>
					<ActionContainer>
						A basic report format which is limited in scope to “major” building components and systems. This report does not include replacement or repair cost(s) estimates. This
						report is intended to identify “major” building issues for informational purposes only.
					</ActionContainer>
				</PanelContainer>

				<PanelContainer style={{ maxWidth: 300 }}>
					<PanelHeader>ASTM</PanelHeader>
					<ActionContainer>A comprehensive report prepared in accordance with the ASTM E2018 Standard. Typically the standard for our EUL reports.</ActionContainer>
				</PanelContainer>

				<PanelContainer style={{ maxWidth: 300 }}>
					<PanelHeader>FNMA/FMAC</PanelHeader>
					<ActionContainer>A specific report format prepared in accordance with FNMA/FHLMC requirements and DUS standards.</ActionContainer>
				</PanelContainer>
			</div>
		</div>
	)
}

export default PropertyInspections
