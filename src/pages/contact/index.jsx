import Layout from "@theme/Layout"
import "./contact.css"

const emailURL = "mailto:info@go-cmc.com?subject=CMC Information Request&body=Enter your questions here"

const Contact = () => {
    return (
        <Layout>
            <div className="container">
                <div className="page-header">
                    <div className="page-header-text">Contact</div>
                    <div className="page-header-details-text">Inquiries, Requests, and Comments will be routed to the appropriate personnel.</div>
                    <div>
                        <ContactItem title="Email:" icon="fa-duotone fa-envelope" url={emailURL} linkbody="info@go-cmc.com" />
                        <ContactItem title="Phone:" icon="fa-duotone fa-phone" url="tel:7169894417" linkbody="(716) 989-4417" />
                        <ContactItem title="LinkedIn:" icon="fa-brands fa-linkedin" url="https://www.linkedin.com/company/cmc-monitoring" linkbody="Company Page" />
                        <ContactItem title="Office:" icon="fa-duotone fa-location-dot" url="https://maps.app.goo.gl/8Zin2gwTQMMo3hkG6" linkbody={<CompanyAddress />} />
                        <br />
                    </div>
                </div>
            </div>
        </Layout>
    )
}

const ContactItem = ({ title, icon, url, linkbody }) => {
    return (
        <div className="contact-details">
            <div className="contact-type">{title}</div>
            <div className="contact-body">
                <div className="contact-icon">
                    <i className={icon} />
                </div>
                <a className="contact-link" href={url} target="_blank" rel="noreferrer">
                    {linkbody}
                </a>
            </div>
        </div>
    )
}

const CompanyAddress = () => {
    return (
        <div>
            4955 North Bailey Ave
            <br />
            Suite 217
            <br />
            Amherst, NY 14226
        </div>
    )
}

export default Contact
