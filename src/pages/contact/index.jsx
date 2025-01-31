import Layout from "@theme/Layout"
import styled from "styled-components"

const Contact = () => {
	return (
		<Layout>
			<div className="container">
				<PageHeader>
					<PageHeaderText>Contact</PageHeaderText>
					<PageHeaderDetailsText>Inquiries, Requests, and Comments will be routed to the appropriate personnel.</PageHeaderDetailsText>
					<PageBody>
						<ContactItem title="Email:" icon="fa-duotone fa-envelope" url="mailto:info@go-cmc.com" linkbody="info@go-cmc.com" />
						<ContactItem title="Phone:" icon="fa-duotone fa-phone" url="tel:7169894417" linkbody="(716) 989-4417" />
						<ContactItem title="LinkedIn:" icon="fa-brands fa-linkedin" url="https://www.linkedin.com/company/cmc-monitoring" linkbody="Company Page" />
						<ContactItem title="Office:" icon="fa-duotone fa-location-dot" url="https://maps.app.goo.gl/8Zin2gwTQMMo3hkG6" linkbody={<CompanyAddress />} />
					</PageBody>
				</PageHeader>
			</div>
		</Layout>
	)
}

const ContactItem = ({ title, icon, url, linkbody }) => {
	return (
		<ContactDetails>
			<ContactType>{title}</ContactType>
			<ContactBody>
				<ContactIcon>
					<i className={icon} />
				</ContactIcon>
				<ContactLink href={url} target="_blank" rel="noreferrer">
					{linkbody}
				</ContactLink>
			</ContactBody>
		</ContactDetails>
	)
}

const CompanyAddress = () => {
	return (
		<div>
			4955 Ridge Lea Rd
			<br />
			Suite 217
			<br />
			Amherst, NY 14226
		</div>
	)
}

const PageHeader = styled.div`
	background-image: url("img/hero-background.png");
	background-size: cover;	
	background-repeat: no-repeat;
	padding-bottom: 30px;
`

const PageHeaderText = styled.div`
	font-size: 1.8em;
	font-weight: bold;
	font-family: Lexend;
	line-height: 1.3em;
	padding-top: 20px;
	padding-left: 20px;
`

const PageHeaderDetailsText = styled.div`
	font-weight: normal;
	font-size: 1.2em;

	line-height: 1.3em;
	padding-top: 20px;
	padding-left: 20px;
	margin-bottom: 20px;
`

const PageBody = styled.div`

	padding-bottom: 20px;
`

const ContactType = styled.div`
	font-size: 1.1em;
	font-weight: 400;
	font-family: Lexend;
	line-height: 1.3em;
`

const ContactDetails = styled.div`
	height: 100px;
	font-size: 1.1em;
	font-family: Lexend;
	line-height: 1.3em;
	padding-top: 20px;
	padding-left: 20px;
`

const ContactBody = styled.div`
	display: flex;
	align-items: top;
	width: 300px;
	font-size: 1em;
	margin-top: 10px;
	clear: both;
`

const ContactIcon = styled.div`
	float: left;
	margin-right: 10;
`
const ContactLink = styled.a`
	width: 300px;
	padding-left: 10px;
`
export default Contact
