import Link from "@docusaurus/Link"

function PoweredByStructDB() {
    return (
        <div
            className="blurb-strip"
            style={{
                padding: 30,
                backgroundColor: "#343434",
                marginBottom: 40,
            }}
        >
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    flexWrap: "wrap",
                    color: "white",
                    fontSize: 28,
                }}
            >
                <div style={{ fontSize: ".6em" }}>CMC is powered by:</div>

                <div>
                    <img src="img/struct-pms.svg" alt="rma logo" style={{ width: 300 }} />
                </div>

                <div style={{ marginTop: 10, marginBottom: 10 }}>
                    <Link className="button button--primary button--lg" to="https://structdb.net">
                        More info &nbsp;
                        <i className="fa-duotone fa-solid fa-right-from-line" />
                    </Link>
                </div>
            </div>
        </div>
    )
}
export default PoweredByStructDB
