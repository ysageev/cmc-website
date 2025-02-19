const DEFAULT_STYLE = {
    paddingTop: 20,
    paddingRight: 20,
    maxHeight: 140,
}
const CMCLogoLarge = ({ style }) => {
    const mergedStyle = style ? { ...DEFAULT_STYLE, ...style } : DEFAULT_STYLE
    return <img src="img/cmc-logo-blue.svg" alt="cmc logo" style={mergedStyle} />
}

export default CMCLogoLarge
