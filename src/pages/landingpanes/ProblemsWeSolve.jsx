import ZoomImage from "@site/src/components/common/ZoomImage"

const graphHeaderStyle = {
	fontSize: "1.3em",
	fontWeight: 500,
	color: "gray",
	// marginLeft: 30,
	// padding: 10,
	// backgroundColor: "#343434",
	// paddingLeft: 30,
}

function ProblemsWeSolve() {
	return (
		<>
			<div style={{ fontSize: "2em", fontWeight: "bold", paddingLeft: 30, marginTop: 30, textWrap: "wrap" }}>Solution Pipeline</div>

			<div
				style={{
					paddingLeft: 30,
					paddingTop: 30,
					paddingRight: 10,
					marginBottom: 20,
					display: "flex",
					flexWrap: "wrap",
					alignItems: "center",
					justifyContent: "space-between",
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
		<div>
			<div style={graphHeaderStyle}>{title}</div>

			<div style={{ maxWidth: 320, marginBottom: -20 }}>
				<ZoomImage src={imgSrc} altText={title} />
			</div>
			<br />
		</div>
	)
}

export default ProblemsWeSolve
