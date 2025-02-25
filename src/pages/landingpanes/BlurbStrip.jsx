import "./blurb-strip.css"

function BlurbStrip({ left, center, right }) {
    return (
        <div className="blurb-strip">
            <div>{left}</div>

            <div className="blurb-strip-center">{center}</div>

            <div>{right}</div>
        </div>
    )
}
export default BlurbStrip
