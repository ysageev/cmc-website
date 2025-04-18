import Link from "@docusaurus/Link"
import "./css/services-landing.css"
import clsx from "clsx"

function Services() {
    return (
        <div className='page-section'>
            <div className='page-section-header'>Our Services</div>

            <div className='service-items-list'>
                <ServicesListItem
                    icon='fa-helmet-safety'
                    title='Construction Loan Risk Management'
                    details='Reduce construction loan risk'
                    url='/services#risk-man'
                />
                <ServicesListItem
                    icon='fa-kit fa-propinspect'
                    title='Property Inspection and Due Diligence'
                    details='Understand what you have.'
                    url='/services#prop-insp'
                />
                <ServicesListItem
                    icon='fa-kit fa-portfolio'
                    title='Portfolio Management'
                    details='All your projects, one screen.'
                    url='/services#port-man'
                />
                <ServicesListItem
                    icon='fa-landmark-flag'
                    title='Historic Preservation'
                    details='NPS Compliance and Tax Credits.'
                    url='/services#historic'
                />
                <ServicesListItem
                    icon='fa-kit fa-asset-distress'
                    title='Distressed Assets and Loan Workout'
                    details='Right the ship.'
                    url='/services#distressed'
                />
            </div>
        </div>
    )
}

function ServicesListItem({ icon, title, details, url }) {
    return (
        <div className='service-item-container'>
            <Link href={url}>
                <i className={clsx("fa-solid fa-3x fa-fw", icon, "service-item-icon")} />
            </Link>
            <div className='service-item-link'>
                <Link href={url}>
                    <div className='service-item-title'>{title}</div>
                </Link>
                <div className='service-item-details'>{details}</div>
            </div>
        </div>
    )
}
export default Services
