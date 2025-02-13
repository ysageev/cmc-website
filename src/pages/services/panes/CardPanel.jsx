import ButtonCard from "@site/src/components/common/ButtonCard"

const docsRequestEmailURL = "mailto:info@go-cmc.com?subject=CMC Approval Documents Request&body=Enter your email here"
const consultationRequestEmailURL = "mailto:info@go-cmc.com?subject=CMC Consultation Request&body=Enter your email here"

function CardPanel() {
	return (
		<div
			style={{
				display: "flex",
				flexWrap: "wrap",
				alignItems: "center",
				justifyContent: "space-between",
				gap: 20,
				paddingBottom: 20,
				marginTop: 20,
			}}
		>
			{/* <ButtonCard
				title="Need Help?"
				details="Use our AI Assistant to find the right set of services."
				buttonLabel="Use AI Assistent"
				buttonLink="/docs/public/introvideo"
				icon="fa-microchip-ai"
			/> */}

			<ButtonCard
				title="Approve CMC"
				details="Request our approval documents to facilitate adding CMC to your Approved Vendor List."
				buttonLabel="Approval Docs"
				buttonLink={docsRequestEmailURL}
				icon="fa-envelope"
			/>
			<ButtonCard
				title="Free Consultation"
				details="Chat with an expert to guide you through our solutions."
				buttonLabel="Schedule Now"
				buttonLink={consultationRequestEmailURL}
				icon="fa-envelope"
			/>
		</div>
	)
}
export default CardPanel
