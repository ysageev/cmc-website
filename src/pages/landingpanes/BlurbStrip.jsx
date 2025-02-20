function BlurbStrip({ left, center, right }) {
    return (
        <div
            style={{
                padding: 30,
                backgroundColor: "#343434",
                marginBottom: 40,
                display: "flex",
                justifyContent: "space-between",
                flexWrap: "wrap",
                color: "white",
                fontSize: 28,
            }}
        >
            <div style={{ fontSize: ".6em" }}>{left}</div>

            <div>{center}</div>

            <div style={{ marginTop: 10, marginBottom: 10 }}>{right}</div>
        </div>
    )
}
export default BlurbStrip
