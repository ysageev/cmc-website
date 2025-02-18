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
                <div className="pain-point-container">
                    <ZoomImage src="/img/services/sankeys/pipeline.svg" altText="Entire Pipeline" figcaption="🔎︎ Click any image to enlarge" cn="pos-pipeline" />
                    <PainPoint title="Existing Property" imageName="existing" cn="pos1" />
                    <PainPoint title="Historic Property" imageName="historic" cn="pos2" />
                    <PainPoint title="Distressed Asset" imageName="distressed" cn="pos3" />
                    <PainPoint title="Proposed Project" imageName="proposed-project" cn="pos4" />
                    <PainPoint title="Under Construction" imageName="under-construction" cn="pos5" />
                    <PainPoint title="Loan Portfolio" imageName="portfolio" cn="pos6" />
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
}

const PainPoint = ({ title, imageName, cn }) => {
    const imgSrc = `/img/services/sankeys/${imageName}.svg`

    return (
        <div className={`${cn} ppbase`}>
            <div style={graphHeaderStyle}>{title}</div>
            <ZoomImage src={imgSrc} altText={title} style={{ height: 110, paddingLeft: 10 }} />
        </div>
    )
}

export default PipeLine
