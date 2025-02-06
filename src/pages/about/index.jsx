import Layout from "@theme/Layout"
import Leadership from "./Leadership"
import styled from "styled-components"
import Company from "./Company"

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
	font-family: Lexend;
	font-weight: 300;
	font-size: 1em;
	line-height: 1.3em;
	padding-top: 20px;
	padding-left: 20px;
	margin-bottom: 10px;
`

const About = (props) => {
	return (
		<Layout>
			<div className="container">
				<PageHeader>
					<PageHeaderText>About Us</PageHeaderText>
					<PageHeaderDetailsText>CMC has served the diverse needs of construction lenders for over 35 years.</PageHeaderDetailsText>
				</PageHeader>
				<Company />
				<Leadership />
			</div>
		</Layout>
	)
}

export default About
