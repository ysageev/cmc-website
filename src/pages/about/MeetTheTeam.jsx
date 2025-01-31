import PhotoCard from "./PhotoCard"
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
	font-weight: normal;
	font-size: 1.2em;
	line-height: 1.3em;
	padding-top: 20px;
	padding-left: 20px;
	margin-bottom: 20px;
`

const ContentBlock = styled.div`
	display: flex;
	flex-wrap: wrap;
`

function MeetTheTeam() {
	return (
		<>
			<PageHeader>
				<PageHeaderText>Management</PageHeaderText>
				<PageHeaderDetailsText>Our team of highly skilled construction professionals are trained in certified in OSHA, ASTM and Code Enforcement.</PageHeaderDetailsText>
			</PageHeader>

			<ContentBlock>
				<PhotoCard
					photo="/img/services/peter-schregel.png"
					name="Peter Schregel"
					title="President"
					linkedInURL="https://www.linkedin.com/in/peter-mark-schregel/"
					details="As President of CMC, Peter provides overall leadership for the company and oversees the project management teams. With over 25 years of experience, Peter is recognized as an industry expert and has forged long-standing relationships with some of the nation's largest banks and institutional investors. Since its founding in 1988, CMC has experienced much growth over the years, expanding both its service offerings and its geographical footprint. With Peter's vision and focus on technology, CMC has emerged as a leader in construction oversight services and risk management. Peter received his MBA from Canisius College and multiple undergraduate degrees from the State University of New York."
				/>

				<PhotoCard
					photo="/img/services/yair-sageev.png"
					name="Yair Sageev"
					title="Senior Vice President, Technology"
					linkedInURL="https://www.linkedin.com/in/yair-sageev-61a166a/"
					details="Yair leads all technology design, development and deployment related efforts at CMC. Yair also is a key contributor in the strategic planning process.An innovative software engineer, system architect and IT expert, Yair possesses more than 25 years of systems and software experience. Yair's background spans mobile apps to databases, utilizing a wide variety of languages, platforms and toolsets. Yair's previous work includes positions with Sony Research Laboratories, Sonata, Inc. and ThinAir Apps. Yair holds a master’s degree from NYU and performed his undergraduate work at the University of California, Berkeley."
				/>

				<PhotoCard
					photo="/img/services/jeff-charles.png"
					name="Jeff Charles"
					title="Regional Vice President"
					linkedInURL="https://www.linkedin.com/in/jeffreytcharles/"
					details="Jeff is the Regional Vice President, located in Rochester, NY and is involved in many projects with CMC. He has experience with most building types such as new construction, renovation, wood, steel, concrete, pre-cast, historic preservation (NPS/SHPO), hospital, educational, high/low-rise, residential, senior, Affordable Housing (NY HCR), commercial, manufacturing, retail, hotel, and auditorium/theatre. Duties include analysis, review, forecasting, tracking, and the reporting of project schedules, budgets, contingencies, change orders, applications for payment, preconstruction plan review, risk assessment/ management, special inspections (structural, geotechnical, concrete & soils testing etc...), and environmental conditions (asbestos, mold, groundwater, air quality etc...)"
				/>

				<PhotoCard
					photo="/img/services/derek-perry.png"
					name="Derek Perry"
					title="Consultant Team Leader"
					linkedInURL="https://www.linkedin.com/in/derek-perry-cmc/"
					details="Serving as the Senior Construction Consultant for CMC, Derek is responsible for the  monthly oversight reporting on construction activities along with project completion  and closeout. He is also responsible for overseeing analysis, forecasting, and reporting  project schedules, budgets, changes, contingencies, borrower draws, & environmental  considerations.  In addition, Derek serves as the team leader for the video surveyors (responsible for  visiting project sites to capture 360 video) and oversees the onboarding process for  every new employee for both consultants and video surveyors. He is a crucial part to  CMC’s success and has been a part of the team since 2016."
				/>
			</ContentBlock>
		</>
	)
}

export default MeetTheTeam
