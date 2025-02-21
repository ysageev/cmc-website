import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
import ZoomImage from "@site/src/components/common/ZoomImage"
import Link from "@docusaurus/Link"

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 1,
        slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 1,
        slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1, // optional, default to 1.
    },
}

function PipelineCarousel() {
    return (
        <div className="page-section">
            <div className="page-section-header">Product Workflows</div>

            <Carousel
                swipeable={true}
                draggable={false}
                showDots={true}
                responsive={responsive}
                infinite={true}
                autoPlay={false}
                autoPlaySpeed={1000}
                keyBoardControl={true}
                customTransition="all 1"
                partialVisible={false}
                centerMode={false}
                transitionDuration={1000}
                removeArrowOnDeviceType={["tablet", "mobile"]}
                // containerClass="carousel-container"
                // dotListClass="custom-dot-list-style"
                // itemClass="carousel-item-padding-40-px"
            >
                <PainPoint title="Overview" imageName="pipeline" cn="pos1">
                    Here we see the big picture. Pain points (red paths) associated with different assets and goals are resolved by CMC services and then flow into other CMC services.
                    <br />
                    <br />
                    Use this carousel to navigate sub-flows in the overall workflow.
                </PainPoint>
                <PainPoint title="Existing Property" imageName="existing" cn="pos1">
                    Existing properties can be kept as an asset or be intended for renovation. A frequent pain-point for asset owners is knowing the Expected Useful Life of asset components and
                    knowing the future annual maintencance costs over term.
                    <br />
                    <br />
                    For pre-renovation properties, lenders need to assess the condition of the property and it's proplems, prior to evaluating plans.
                    <br />
                    <br />
                    Learn more about&nbsp;
                    <Link to={"/services#prop-insp"}>CMC's property due-diligence services.</Link>
                </PainPoint>
                <PainPoint title="Historic Property" imageName="historic" cn="pos2">
                    Historic properties require careful vetting of the National Parks Service application (NPS Part 1) and, during construction, conformance tracking to reliably receive tax credits
                    and to prevent project delays (NPS Part 2).
                    <br />
                    <br />
                    Learn more about&nbsp;
                    <Link to={"/services#historic"}>CMC's historic property services.</Link>
                </PainPoint>
                <PainPoint title="Distressed Asset" imageName="distressed" cn="pos3">
                    Occasionally, clients come to CMC with projects under construction that have encountered show-stopping problems. Owners or contractors may have walked away, unforeseen structural
                    defects may have arisen that require significant reevaluation of project scope.
                    <br />
                    <br />
                    Learn more about&nbsp;
                    <Link to={"/services#distressed"}>CMC's distressed asset services.</Link>
                </PainPoint>
                <PainPoint title="Proposed Project" imageName="proposed-project" cn="pos4">
                    Proposed projects consist of New Builds and Renovations.
                    <br />
                    <br />
                    Learn more about&nbsp;
                    <Link to={"/services#risk-man"}>CMC's pre-construction services.</Link>
                </PainPoint>
                <PainPoint title="Under Construction" imageName="under-construction" cn="pos5">
                    Once a loan has closed, construction may begin. Any pre-construction and plan & cost reports have been completed. At this point, site visit monitoring and reporting takes place
                    throughout the life of the project.
                    <br />
                    <br />
                    Learn more about&nbsp;
                    <Link to={"/services#risk-man"}>CMC's construction risk services.</Link>
                </PainPoint>
                <PainPoint title="Loan Portfolio" imageName="portfolio" cn="pos6">
                    Our loan portfolio dashboards track projects under construction, plan and cost materials status, closed projects, and provide aggregate charts to facilitate decision making.
                    <br />
                    <br />
                    Learn more about&nbsp;
                    <Link to={"/services#port-man"}>CMC's portfolio managment services.</Link>
                </PainPoint>
            </Carousel>
        </div>
    )
}
const graphHeaderStyle = {
    fontSize: "1.2em",
    fontWeight: 500,
    color: "gray",
    clear: "both",
    marginBottom: 10,
}

const PainPoint = ({ title, imageName, children, cn }) => {
    const imgSrc = `/img/services/sankeys/${imageName}.svg`

    return (
        <div style={{ display: "flex", justifyContent: "center", flexDirection: "column", width: "76w", flexWrap: "wrap", alignItems: "center", marginBottom: 20 }}>
            <div style={graphHeaderStyle}>{title}</div>
            <div style={{ clear: "both" }}>
                <img src={imgSrc} altText={title} style={{ width: "50vw" }} />
            </div>
            <div style={{ fontSize: ".9em", padding: 20, clear: "both", maxWidth: 600 }}>{children}</div>
        </div>
    )
}

export default PipelineCarousel
