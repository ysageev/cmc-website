function OurClients() {
    return (
        <div className="page-section">
            <div className="page-section-header">Our Clients</div>
            <div className="clients-body">
                <div className="clients-entity-group">
                    <EntityItem label="National Banks" />
                    <EntityItem label="Regional Banks" />
                    <EntityItem label="Community Banks" />
                </div>
                <div className="clients-entity-group">
                    <EntityItem label="Credit Unions" />
                    <EntityItem label="Nonprofit Lenders" />
                    <EntityItem label="Pension Funds" />
                </div>
                <div className="clients-entity-group">
                    <EntityItem label="Institutional Investors" />
                    <EntityItem label="Municipalities" />
                    <EntityItem label="Mortgage Companies" />
                </div>
            </div>
        </div>
    )
}

const ICON = "fa-duotone fa-solid fa-badge-check fa-xl fa-fw"
const ICON_STYLE = {
    "--fa-primary-color": "green",
    "--fa-secondary-color": "gray",
}

function EntityItem({ label }) {
    return (
        <div className="clients-entity">
            <div>
                <i className={ICON} style={ICON_STYLE} />
            </div>
            <div>&nbsp;{label}</div>
        </div>
    )
}

export default OurClients
