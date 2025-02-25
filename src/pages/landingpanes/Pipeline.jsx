import ZoomImage from "@site/src/components/common/ZoomImage"

function PipeLine() {
    return (
        <div className="page-section">
            <div className="page-section-header">Product Workflows</div>
            <div className="pipeline-container">
                <ZoomImage src="/img/services/sankeys/pipeline.svg" alttext="Entire Pipeline" figcaption="🔎︎ Click any image to enlarge" cn="pos-pipeline" />
                <PainPoint title="Existing Property" imageName="existing" cn="pos1" />
                <PainPoint title="Historic Property" imageName="historic" cn="pos2" />
                <PainPoint title="Distressed Asset" imageName="distressed" cn="pos3" />
                <PainPoint title="Proposed Project" imageName="proposed-project" cn="pos4" />
                <PainPoint title="Under Construction" imageName="under-construction" cn="pos5" />
                <PainPoint title="Loan Portfolio" imageName="portfolio" cn="pos6" />
            </div>
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
        <div className={`${cn} pipeline-item`}>
            <div style={graphHeaderStyle}>{title}</div>
            <ZoomImage src={imgSrc} alttext={title} style={{ height: 110, paddingLeft: 10 }} />
        </div>
    )
}

export default PipeLine
