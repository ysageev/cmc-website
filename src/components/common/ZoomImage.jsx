import Zoom from "react-medium-image-zoom"
import "react-medium-image-zoom/dist/styles.css"

const ZoomImage = ({ src, style, altText, figcaption }) => (
    <Zoom a11yNameButtonZoom="Expand">
        <img alt={altText} src={src} loading="lazy" style={style} />
        {figcaption ? <figcaption style={{ fontSize: ".7em", marginTop: -10, marginBottom: 40 }}>{figcaption}</figcaption> : <div />}
    </Zoom>
)

export default ZoomImage
