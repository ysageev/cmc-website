function ActionItem({ title, children }) {
    return (
        <div>
            <div className="action-label">{title}:</div>
            <div className="action-item-list">{children}</div>
        </div>
    )
}
export default ActionItem
