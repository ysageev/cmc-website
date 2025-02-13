import ZoomImage from "@site/src/components/common/ZoomImage"

const graphHeaderStyle = {
	fontSize: "1.2em",
	fontWeight: 500,
	color: "gray",
}

function PipeLine() {
	return (
		<div style={{ marginTop: 20 }}>
			<div style={{ fontSize: "2em", fontWeight: "bold", paddingLeft: 30, textWrap: "wrap", marginBottom: 10 }}>Solutions Pipeline</div>

			<div
				style={{
					paddingLeft: 30,
					paddingTop: 30,
					paddingRight: 10,
					marginBottom: 20,
					display: "flex",
					flexWrap: "wrap",
					alignItems: "center",
					justifyContent: "space-around",
					gap: 10,
					marginTop: -30,
				}}
			>
				<div style={{ marginBottom: 10, paddingRight: 20 }}>
					<ZoomImage src="/img/services/sankeys/pipeline.svg" altText="Entire Pipeline" />
				</div>
				<PainPoint title="Existing Property" imageName="existing" />
				<PainPoint title="Historic Property" imageName="historic" />
				<PainPoint title="Distressed Asset" imageName="distressed" />
				<PainPoint title="Proposed Project" imageName="proposed-project" />
				<PainPoint title="Under Construction" imageName="under-construction" />
				<PainPoint title="Loan Portfolio" imageName="portfolio" />
			</div>
			<br />
		</div>
	)
}

const PainPoint = ({ title, imageName }) => {
	const imgSrc = `/img/services/sankeys/${imageName}.svg`

	return (
		<div>
			<div style={graphHeaderStyle}>{title}</div>

			<div style={{ maxWidth: 320, marginBottom: -20, paddingRight: 10, paddingLeft: 10 }}>
				<ZoomImage src={imgSrc} altText={title} />
			</div>
			<br />
		</div>
	)
}

export default PipeLine
