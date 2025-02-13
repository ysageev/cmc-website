import styled from "styled-components"

const PanelContainer = styled.div`
	border: 1px solid lightgray;
	border-radius: 10px;
	min-width: 300px;
	margin-bottom: 10px;
	margin-right: 1em;
	font-size: 1em;

	@media (width <= 600px) {
        width: 100%;
    }
`
export const PanelHeader = styled.div`
	font-weight: bold; 
	font-size: 1.1em;
	text-align: center;
	padding: 8px;
	border-radius: 10px 10px 0px 0px;
	background-color: var(--ifm-color-primary-darkest);
	color: var(--ifm-color-primary-lighter);

`

export const ActionContainer = styled.div`
	padding: 15px;
`

export const ActionLabel = styled.div`
	font-weight: bold; 
	font-size: 1em;
`
export const ActionItemList = styled.div`
	font-size: .9em;
	padding-right: 10px;
	text-wrap: pretty;
`

export default PanelContainer
