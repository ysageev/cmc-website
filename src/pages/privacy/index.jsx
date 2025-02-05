import Layout from "@theme/Layout"
import styled from "styled-components"

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
	font-weight: 500;
	font-size: 1.2em;
	line-height: 1.3em;
	padding-top: 20px;
	padding-left: 20px;
	margin-bottom: 20px;
`

const SectionHeader = styled.h2`
	font-family: Lexend, sans-serif;
	font-weight: 600;
	font-size: 1em;
	padding: 10px;
	text-transform: uppercase;
	background-color;
	text-wrap: pretty;
`
const BlockHeader = styled.div`
	font-weight: 600;
	font-size: .9em;
	padding: 10px;
	text-transform: uppercase;
	text-wrap: pretty;
`
const BlockContent = styled.div`
	font-weight: 400;
	font-size: .7em;
	padding: 10px;
	line-height: 1.4;
	text-wrap: pretty;
`

const Tos = (props) => {
	return (
		<Layout>
			<div className="container">
				<PageHeader>
					<PageHeaderText>Online Privacy Statement</PageHeaderText>
					<PageHeaderDetailsText>Privacy Matters.</PageHeaderDetailsText>
				</PageHeader>
				<BlockContent>
					<br />
					Your privacy is important to Construction Monitoring Consultants. Our goal is to provide you with a personalized online experience that provides you with the information,
					resources, and services that are most relevant and helpful to you. This Privacy Statement has been written to describe the conditions under which this web site is being
					made available to you. The Privacy Statement discusses, among other things, how data obtained during your visit to this web site may be collected and used. We strongly
					recommend that you read the Privacy Statement carefully. By using this web site, you agree to be bound by the terms of this Privacy Statement. If you do not accept the
					terms of the Privacy Statement, you are directed to discontinue accessing or otherwise using the web site or any materials obtained from it. If you are dissatisfied with
					the web site, by all means contact us at; otherwise, your only recourse is to disconnect from this site and refrain from visiting the site in the future.
				</BlockContent>
				<BlockContent>
					The process of maintaining a web site is an evolving one, and CMC may decide at some point in the future, without advance notice, to modify the terms of this Privacy
					Statement. Your use of the web site, or materials obtained from the web site, indicates your assent to the Privacy Statement at the time of such use. The effective
					Privacy Statement will be posted on the web site, and you should check upon every visit for any changes.
				</BlockContent>
				<SectionHeader>Sites Covered by this Statement</SectionHeader>
				<BlockContent>This Privacy Statement applies to all web sites, domains, information portals, and registries maintained by CMC.</BlockContent>
				<SectionHeader>Links to Third Party Web Sites</SectionHeader>
				<BlockContent>
					CMC's web site may provide links to third-party web sites for the convenience of our users. If you access those links, you will leave CMC's web site. CMC does not control
					these third-party web sites and cannot represent that their policies and practices will be consistent with this Privacy Statement. For example, other web sites may
					collect or use personal information about you in a manner different from that described in this document. Therefore, you should use other web sites with caution, and you
					do so at your own risk. We encourage you to review the privacy policy of any web site before submitting personal information.
				</BlockContent>
				<SectionHeader>TYPES OF INFORMATION WE COLLECT</SectionHeader>
				<BlockHeader>Non-Personal Information</BlockHeader>
				<BlockContent>
					Non-personal information is data about usage and service operation that is not directly associated with a specific personal identity. CMC may collect and analyze
					non-personal information to evaluate how visitors use CMC's web site.
				</BlockContent>
				<BlockHeader>Aggregate Information</BlockHeader>
				<BlockContent>
					CMC may gather aggregate information, which refers to information your computer automatically provides to us and that cannot be tied back to you as a specific individual.
					Examples include referral data (the web sites you visited just before and just after our site), the pages viewed, time spent at our Web site, and Internet Protocol (IP)
					addresses. An IP address is a number that is automatically assigned to your computer whenever you access the Internet. For example, when you request a page from one of
					our sites, our servers log your IP address to create aggregate reports on user demographics and traffic patterns and for purposes of system administration.
				</BlockContent>
				<BlockHeader>Log Files</BlockHeader>
				<BlockContent>
					Every time you request or download a file from the web site, CMC may store data about these events and your IP address in a log file. CMC may use this information to
					analyze trends, administer the web site, track users' movements, and gather broad demographic information for aggregate use or for other business purposes.
				</BlockContent>
				<BlockHeader>Cookies</BlockHeader>
				<BlockContent>
					Our site may use a feature of your browser to set a “cookie” on your computer. Cookies are small packets of information that a web site's computer stores on your
					computer. CMC's web site can then read the cookies whenever you visit our site. We may use cookies in a number of ways, such as to save your password so you don't have to
					re-enter it each time you visit our site, to deliver content specific to your interests and to track the pages you've visited. These cookies allow us to use the
					information we collect to customize your experience so that your visit to our site is as relevant and as valuable to you as possible.
				</BlockContent>
				<BlockContent>
					Most browser software can be set up to deal with cookies. You may modify your browser preference to provide you with choices relating to cookies. You have the choice to
					accept all cookies, to be notified when a cookie is set or to reject all cookies. If you choose to reject cookies, certain of the functions and conveniences of our web
					site may not work properly, and you may be unable to use those of CMC's services that require registration in order to participate, or you will have to re-register each
					time you visit our site. Most browsers offer instructions on how to reset the browser to reject cookies in the “Help” section of the toolbar. We do not link non-personal
					information from cookies to personally identifiable information without your permission.
				</BlockContent>
				<BlockHeader>Web Beacons</BlockHeader>
				<BlockContent>
					CMC's web site also may use web beacons to collect non-personal information about your use of our web site and the web sites of selected sponsors or members, your use of
					special promotions or newsletters, and other activities. The information collected by web beacons allows us to statistically monitor how many people are using our web
					site and selected sponsors' sites; how many people open our emails; and for what purposes these actions are being taken. Our web beacons are not used to track your
					activity outside of our web site or those of our sponsors. CMC does not link non-personal information from web beacons to personally identifiable information without your
					permission.
				</BlockContent>
				<BlockHeader>Personal Information</BlockHeader>
				<BlockContent>
					Personal information is information that is associated with your name or personal identity. CMC uses personal information to better understand your needs and interests
					and to provide you with better service. On some of CMC web pages, you may be able to request information, subscribe to mailing lists, participate in online discussions,
					collaborate on documents, provide feedback, submit information into registries, register for events, apply for membership, or join technical committees or working groups.
					The types of personal information you provide to us on these pages may include name, address, phone number, e-mail address, user IDs, passwords, billing information, or
					credit card information.
				</BlockContent>
				<BlockHeader>Members-Only Web Site</BlockHeader>
				<BlockContent>
					Information you provide on CMC's membership application is used to create a member profile, and some information may be shared with other of CMC's individual member
					representatives and organizations. Member contact information may be provided to other members on a secure web site to encourage and facilitate collaboration, research,
					and the free exchange of information among CMC's members, but we expressly prohibit members from using member contact information to send unsolicited commercial
					correspondence. CMC's members automatically are added to CMC's member mailing lists. From time to time, member information may be shared with event organizers and/or
					other organizations that provide additional benefits to CMC's members. By providing us with your personal information on the membership application, you expressly consent
					to our storing, processing, and distributing your information for these purposes.
				</BlockContent>
				<BlockHeader>Company Information</BlockHeader>
				<BlockContent>
					Company information is information that is associated with the name and address of member organizations and may include data about usage and service operation. The
					primary representative of any CMC's member organizations may request usage reports to gauge the extent of their employees' involvement in consortium activities. You
					should be aware that information regarding your participation in technical committees or working groups, for example, may be made available to your company's primary
					representative and to CMC's staff members.
				</BlockContent>
				<SectionHeader>HOW WE USE YOUR INFORMATION</SectionHeader>
				<BlockContent>
					CMC may use non-personal data that is aggregated for reporting about CMC's web site usability, performance, and effectiveness. It may be used to improve the experience,
					usability, and content of the site.
				</BlockContent>
				<BlockContent>
					CMC may use personal information to provide services that support the activities of CMC's members and their collaboration on CMC's standards and projects. When accessing
					CMC's members-only web pages, your personal user information may be tracked by CMC in order to support collaboration, ensure authorized access, and enable communication
					between members.
				</BlockContent>
				<BlockHeader>Information Sharing</BlockHeader>
				<BlockContent>
					CMC does not sell, rent, or lease any individual's personal information or lists of email addresses to anyone for marketing purposes, and we take commercially reasonable
					steps to maintain the security of this information. However, CMC reserves the right to supply any such information to any organization into which CMC may merge in the
					future or to which it may make any transfer in order to enable a third party to continue part or all of its mission. We also reserve the right to release personal
					information to protect our systems or business, when we reasonably believe you to be in violation of our Terms of Use or if we reasonably believe you to have initiated or
					participated in any illegal activity. In addition, please be aware that in certain circumstances, CMC may be obligated to release your personal information pursuant to
					judicial or other government subpoenas, warrants, or other orders.
				</BlockContent>
				<BlockContent>
					In keeping with our open process, CMC may maintain publicly accessible archives for the vast majority of our activities. For example, posting an email to any of
					CMC's-hosted mail list or discussion forum, subscribing to one of our newsletters or registering for one of our public meetings may result in your email address becoming
					part of the publicly accessible archives.
				</BlockContent>
				<BlockContent>
					On some sites, anonymous users are allowed to post content and/or participate in forum discussions. In such a case, since no user name can be associated with such a user,
					the IP address number of a user is used as an identifier.
					<strong>When posting content or messages to the sites anonymously, your IP address will be revealed to the public.</strong>
				</BlockContent>
				<BlockContent>
					If you are a registered member of CMC, you should be aware that some items of your personal information may be visible to other members and to the public. CMC's member
					database may retain information about your name, e-mail address, company affiliation (if an organizational member), and such other personal address and identifying data
					as you choose to supply. That data may be generally visible to other of CMC's members and to the public. Your name, e-mail address, and other information you may supply
					also may be associated in CMC's publicly accessible records with CMC's various committees, working groups, and similar activities that you join, in various places,
					including: (i) the permanently-posted attendance and membership records of those activities; (ii) documents generated by the activity, which may be permanently archived;
					and, (iii) along with message content, in the permanent archives of CMC's e-mail lists, which also may be public.
				</BlockContent>
				<BlockContent>
					Please remember that any information (including personal information) that you disclose in public areas of our web site, such as forums, message boards, and news groups,
					becomes public information that others may collect, circulate, and use. Because we cannot and do not control the acts of others, you should exercise caution when deciding
					to disclose information about yourself or others in public Forums such as these.
				</BlockContent>
				<BlockContent>
					Given the international scope of CMC, personal information may be visible to persons outside your country of residence, including to persons in countries that your own
					country's privacy laws and regulations deem deficient in ensuring an adequate level of protection for such information. If you are unsure whether this privacy statement
					is in conflict with applicable local rules, you should not submit your information. If you are located within the European Union, you should note that your information
					will be transferred to the United States, which is deemed by the European Union to have inadequate data protection. Nevertheless, in accordance with local laws
					implementing European Union Directive 95/46/EC of 24 October 1995 (“EU Privacy Directive”) on the protection of individuals with regard to the processing of personal data
					and on the free movement of such data, individuals located in countries outside of the United States of America who submit personal information do thereby consent to the
					general use of such information as provided in this Privacy Statement and to its transfer to and/or storage in the United States of America.
				</BlockContent>
				<BlockContent>If you do not want your personal information collected and used by CMC, please do not visit CMC's web site or apply for membership.</BlockContent>
				<BlockHeader>Access to and Accuracy of Member Information</BlockHeader>
				<BlockContent>
					CMC is committed to keeping the personal information of our members accurate. All the information you have submitted to us can be verified and changed. In order to do
					this, please email us a request at . We may provide members with online access to their own personal profiles, enabling them to update or delete information at any time.
					To protect our members' privacy and security, we also may take reasonable steps to verify identity, such as a user ID and password, before granting access to modify
					personal profile data. Certain areas of CMC's web sites may limit access to specific individuals through the use of passwords or other personal identifiers; a password
					prompt is your indication that a members-only resource is being accessed.
				</BlockContent>
				<BlockHeader>Security</BlockHeader>
				<BlockContent>
					CMC makes every effort to protect personal information by users of the web site, including using firewalls and other security measures on its servers. No server, however,
					is 100% secure, and you should take this into account when submitting personal or confidential information about yourself on any web site, including this one. Much of the
					personal information is used in conjunction with member services such as collaboration and discussion, so some types of personal information such as your name, company
					affiliation, and email address will be visible to other CMC's members and to the public. CMC's assumes no liability for the interception, alteration, or misuse of the
					information you provide. You alone are responsible for maintaining the secrecy of your personal information. Please use care when use access this web site and provide
					personal information.
				</BlockContent>
				<BlockHeader>Opting Out</BlockHeader>
				<BlockContent>
					From time to time CMC may email you electronic newsletters, announcements, surveys or other information. If you prefer not to receive any or all of these communications,
					you may opt out by following the directions provided within the electronic newsletters and announcements.
				</BlockContent>
				<BlockHeader>Contacting Us</BlockHeader>
				<BlockContent>
					Questions about our privacy policy should be directed to CMC via our
					<strong>
						&nbsp;<a href="/contact">contact page</a>.
					</strong>
					<br />
					<br />
				</BlockContent>
			</div>
		</Layout>
	)
}

export default Tos
