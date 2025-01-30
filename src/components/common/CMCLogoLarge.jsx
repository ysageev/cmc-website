import React from "react";

const DEFAULT_STYLE = {
	paddingTop: 20,
	paddingLeft: 20,
	marginBottom: 0,
	maxHeight: 140,
};
const CMCLogoLarge = ({ style }) => {
	const mergedStyle = style ? { ...DEFAULT_STYLE, ...style } : DEFAULT_STYLE;
	return <img src="img/cmc-logo.png" alt="cmc logo" style={mergedStyle} />;
};

export default CMCLogoLarge;
