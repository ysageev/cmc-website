import styled from "styled-components"

const PageHeader = styled.div`
	background-image: url("img/hero-background.png");
	background-size: cover;	
	background-repeat: no-repeat;
	padding-bottom: 30px;
	padding-right:30px;
	padding-left: 20px;

	`

const PageHeaderText = styled.div`
	font-size: 1.8em;
	font-weight: bold;
	font-family: Lexend;
	line-height: 1.3em;
	padding-top: 20px;
`

const PageHeaderDetailsText = styled.div`
	font-size: 1.2em;
	line-height: 1.3em;
	padding-top: 20px;
	padding-bottom: 20px;
`

function Hero() {
	return (
		<PageHeader>
			<PageHeaderText>Find the right service...</PageHeaderText>
			<PageHeaderDetailsText>
				CMC offers reports and services that cover the entire construction process, from Preconstruction assessments to Post-construction and closeouts
			</PageHeaderDetailsText>
		</PageHeader>
	)
}

export default Hero
