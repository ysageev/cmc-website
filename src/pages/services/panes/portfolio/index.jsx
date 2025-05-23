import ServiceBanner from "../ServiceBanner.jsx"
import StructDBText from "/src/components/common/StructDBText"

function PortfolioManagement() {
    return (
        <>
            <div
                id="port-man"
                style={{ scrollMarginTop: 60 }}
            />
            <div>
                <ServiceBanner
                    icon="fa-kit fa-portfolio"
                    title="Portfolio Management"
                    details="All your projects, one screen."
                    divId="portfolio-content"
                />

                <div
                    id="portfolio-content"
                    className="collapse-div"
                >
                    <div className="service-content">
                        Most lenders find it difficult to understand their entire loan portfolio. They might understand specific projects well, but have trouble identifying:
                        <br />
                        <br />
                        <ul>
                            <li>Which projects are most behind schedule?</li>
                            <li>Which projects are over-budget and need contingency adjustment?</li>
                            <li>What projects have upcoming inspections and when are they due?</li>
                            <li>Which reports need review?</li>
                            <li>How are projects progressing toward completion? When will monies be available for new projects and how much?</li>
                            <li>How are my projects clustering from the perspective of geographical footprint?</li>
                        </ul>
                        <div style={{ clear: "both" }}>
                            <p>More generally, Lenders have trouble knowing:</p>
                            <ul>
                                <li style={{ fontWeight: "bold" }}>Is my loan portfolio healthy or at-risk?</li>
                                <li style={{ fontWeight: "bold" }}>What projects should I pay attention to most?</li>
                            </ul>
                        </div>
                        <div style={{ clear: "both" }}>
                            <p>
                                CMC provides lenders, free of charge, an advanced portfolio dashboard.
                                <br />
                                <br />
                                Lenders can sign in and view all their projects handled by vendors who use <StructDBText />.
                                <br />
                                <br />
                                <a
                                    href="https://structdb.net/docs/Lenders/Video/dashboard"
                                    rel="noreferrer"
                                    target="_blank"
                                >
                                    In-depth information about lender dashboards
                                </a>{" "}
                                can be found at their site.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PortfolioManagement
