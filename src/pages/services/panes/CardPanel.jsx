import ButtonCard from "@site/src/components/common/ButtonCard"

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
			<ButtonCard
				title="Need Help?"
				details="Use our AI Assistant to find the right set of services."
				buttonLabel="Use AI Assistent"
				buttonLink="/docs/introvideo"
				icon="fa-microchip-ai"
			/>

			<ButtonCard
				title="Approve CMC"
				details="Download our approval package to facilitate adding CMC to your Approved Vendor List."
				buttonLabel="Approval Docs"
				buttonLink="/docs/introvideo"
				icon="fa-download"
			/>
			<ButtonCard
				title="Free Consultation"
				details="Chat with an expert to guide you through our solutions."
				buttonLabel="Schedule Now"
				buttonLink="/docs/introvideo"
				icon="fa-calendar-days"
			/>
		</div>
	)
}
export default CardPanel
