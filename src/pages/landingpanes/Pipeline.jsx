import ZoomImage from "@site/src/components/common/ZoomImage"

function PipeLine() {
    return (
        <div style={{ marginTop: 20 }}>
            <div style={{ fontSize: "2em", fontWeight: "bold", paddingLeft: 30, textWrap: "wrap", marginBottom: 10 }}>Solutions Pipeline</div>

            <div
                style={{
                    display: "flex",
                    flexWrap: "wrap",
                    alignItems: "center",
                    justifyContent: "space-around",
                }}
            >
                <div style={{ marginBottom: 0, paddingRight: 20, width: "80vh" }}>
                    <ZoomImage src="/img/services/sankeys/pipeline.svg" altText="Entire Pipeline" figcaption="🔎︎ Click any image to enlarge" />
                </div>
                <div className="pain-point-container">
                    <PainPoint title="Existing Property" imageName="existing" />
                    <PainPoint title="Historic Property" imageName="historic" />
                    <PainPoint title="Distressed Asset" imageName="distressed" />
                    <PainPoint title="Proposed Project" imageName="proposed-project" />
                    <PainPoint title="Under Construction" imageName="under-construction" />
                    <PainPoint title="Loan Portfolio" imageName="portfolio" />
                </div>
            </div>
            <br />
        </div>
    )
}
const graphHeaderStyle = {
    fontSize: "1em",
    fontWeight: 500,
    color: "gray",
    paddingLeft: 10,
}

const PainPoint = ({ title, imageName }) => {
    const imgSrc = `/img/services/sankeys/${imageName}.svg`

    return (
        <div>
            <div style={graphHeaderStyle}>{title}</div>
            <ZoomImage src={imgSrc} altText={title} style={{ height: 110, paddingLeft: 10 }} />
        </div>
    )
}

export default PipeLine
