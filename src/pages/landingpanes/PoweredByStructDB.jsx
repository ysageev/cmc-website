import Link from "@docusaurus/Link"
import BlurbStrip from "./BlurbStrip"

const left = <div>CMC is powered by:</div>
const center = <img src="img/struct-pms.svg" alt="rma logo" style={{ width: 300 }} />
const right = (
    <Link className="button button--primary button--lg" to="https://structdb.net">
        More info <i className="fa-duotone fa-solid fa-right-from-line" />
    </Link>
)

function PoweredByStructDB() {
    return <BlurbStrip left={left} center={center} right={right} />
}
export default PoweredByStructDB
