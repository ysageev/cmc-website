function ServiceBanner({ icon, title, details }) {
	const faIcon = `service-banner-icon fa-duotone ${icon}`
	return (
		<div className="service-banner">
			<i className={faIcon} />
			<div>
				<div className="service-banner-title">{title}</div>
				<div className="service-banner-detail">{details}</div>
			</div>
			<i className="fa-duotone fa-chevron-down fa-4x" />
			<br />
		</div>
	)
}
export default ServiceBanner
