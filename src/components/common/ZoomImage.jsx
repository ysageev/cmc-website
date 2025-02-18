import Zoom from "react-medium-image-zoom"
import "react-medium-image-zoom/dist/styles.css"

const ZoomImage = ({ src, style, altText, figcaption, cn }) => (
    <div className={cn}>
        <Zoom a11yNameButtonZoom="Expand">
            <img alt={altText} src={src} loading="lazy" style={style} />
            {figcaption ? <figcaption style={{ fontSize: ".7em", marginTop: -10, marginBottom: 15 }}>{figcaption}</figcaption> : <div />}
        </Zoom>
    </div>
)

export default ZoomImage
