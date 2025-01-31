import CMCLogoLarge from "@site/src/components/common/CMCLogoLarge";

function Hero() {
	return (
		<div
			style={{
				backgroundImage: `url(${"img/hero-background.png"})`,
				backgroundSize: "cover",
				backgroundRepeat: "no-repeat",
				paddingBottom: 30,
				paddingRight: 30,
			}}
		>
			<div
				style={{
					paddingLeft: 30,
					maxWidth: 700,
					marginRight: 20,
				}}
			>
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
						paddingBottom: 10,
						lineHeight: 1.3,
					}}
				>
					CMC offers reports and services that cover the entire construction
					process, from Preconstruction assessments to Post-construction and
					closeouts
				</div>
			</div>
		</div>
	);
}

export default Hero;
