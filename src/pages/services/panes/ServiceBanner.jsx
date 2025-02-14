import { useState } from "react"

const chevronDownIcon = "service-banner-icon fa-duotone fa-chevron-down fa-4x fa-fw"
const chevronLeftIcon = "service-banner-icon fa-duotone fa-chevron-left fa-4x fa-fw"

function ServiceBanner({ icon, title, details, divId }) {
	const [expanded, setExpanded] = useState(true)

	const faIcon = `service-banner-icon fa-duotone ${icon} fa-fw`
	const currentChevronIcon = expanded ? chevronDownIcon : chevronLeftIcon
	const currentChevronId = `${divId}-chevron`

	const handleClick = () => {
		if (!divId) return
		const containerElem = document.getElementById(divId)
		containerElem.style.maxHeight = expanded ? "1px" : "2000px"
		setExpanded(!expanded)
	}

	return (
		<div className="service-banner">
			<i className={faIcon} />
			<div>
				<div className="service-banner-title">{title}</div>
				<div className="service-banner-detail">{details}</div>
			</div>
			<i id={currentChevronId} className={`${currentChevronIcon} chevron-hover`} onClick={handleClick} />
			<br />
		</div>
	)
}
export default ServiceBanner
