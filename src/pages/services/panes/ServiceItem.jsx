function ServiceItem({ title, children }) {
    return (
        <div className="panel-container">
            <div className="panel-header">{title}</div>
            <div className="action-container">{children}</div>
        </div>
    )
}
export default ServiceItem
