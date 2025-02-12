import Zoom from "react-medium-image-zoom"
import "react-medium-image-zoom/dist/styles.css"

const ZoomImage = ({ src, width, altText, figcaption }) => (
	<Zoom a11yNameButtonZoom="Expand">
		<img alt={altText} src={src} width={width} loading="lazy" />
		{figcaption ? <figcaption style={{ fontSize: 9 }}>{figcaption}</figcaption> : <div />}
	</Zoom>
)

export default ZoomImage
