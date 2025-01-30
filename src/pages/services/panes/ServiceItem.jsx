function ServiceItem({ text, icon }) {
	const faIcon = `fa-duotone ${icon} fa-xl`;
	return (
		<div className="service-item">
			{icon && <i className={faIcon} />}
			<div style={{ fontWeight: "500", fontSize: "1.3em", marginLeft: 10 }}>
				{text}
			</div>
		</div>
	);
}
export default ServiceItem;
