import ButtonCard from "@site/src/components/common/ButtonCard";
import CMCLogoLarge from "@site/src/components/common/CMCLogoLarge";

function Hero() {
	return (
		<div
			style={{
				backgroundImage: `url(${"img/hero-background.png"})`,
				backgroundSize: "cover",
				backgroundRepeat: "no-repeat",
				paddingBottom: 30,
			}}
		>
			<div style={{ paddingRight: 30 }}>
				<CMCLogoLarge />
				<div
					style={{
						paddingLeft: 30,
						display: "flex",
						flexWrap: "wrap",
						alignItems: "top",
					}}
				>
					<div style={{ width: 350, marginRight: 20 }}>
						<div
							style={{
								fontSize: "1.8em",
								fontWeight: "bold",
								fontFamily: "Lexend",
								lineHeight: 1.3,
								paddingTop: 20,
							}}
						>
							Find the right service...
						</div>

						<div
							style={{
								fontSize: "1.2em",
								paddingTop: 20,
								paddingBottom: 30,
								lineHeight: 1.3,
								maxWidth: 300,
							}}
						>
							CMC offers reports and services that cover the entire construction
							process, from Preconstruction assessments to Post-construction and
							closeouts
						</div>
					</div>
					<div style={{}}>
						<CardPanel />
					</div>
				</div>
			</div>
		</div>
	);
}

function CardPanel() {
	return (
		<div
			style={{
				display: "flex",
				flexWrap: "wrap",
				gap: 20,
				paddingBottom: 20,
				marginTop: 20,
			}}
		>
			<ButtonCard
				title="Need Help?"
				details="Use our AI Assistant to find the right set of services."
				buttonLabel="Use AI Assistent"
				buttonLink="/docs/videos/introvideo"
				icon="fa-microchip-ai"
			/>

			<ButtonCard
				title="Approve CMC"
				details="Download our approval package to facilitate adding CMC to your Approved Vendor List."
				buttonLabel="Approval Docs"
				buttonLink="/docs/videos/introvideo"
				icon="fa-download"
			/>
			<ButtonCard
				title="Free Consultation"
				details="Chat with an expert to guide you through our solutions."
				buttonLabel="Schedule Now"
				buttonLink="/docs/videos/introvideo"
				icon="fa-calendar-days"
			/>
		</div>
	);
}
export default Hero;
