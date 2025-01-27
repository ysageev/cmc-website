import React from "react"
import { useColorMode } from "@docusaurus/theme-common"
import clsx from "clsx"

const CompanyLogo = ({ src }) => {
	const colorMode = useColorMode()

	return <img className={clsx("grayimage", colorMode.colorMode === "dark" ? "invertgray" : null)} src={src} alt="Company Logo" />
}

export default CompanyLogo
