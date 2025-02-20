function BlurbStrip({ left, center, right }) {
    return (
        <div
            style={{
                padding: 30,
                backgroundColor: "#343434",
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
                flexWrap: "wrap",
                color: "white",
                fontSize: "1.2em",
                fontFamily: "Lexend, sans-serif",
            }}
        >
            <div>{left}</div>

            <div style={{ maxWidth: 640, textAlign: "center", textWrap: "pretty", paddingTop: 20, paddingBottom: 20 }}>{center}</div>

            <div>{right}</div>
        </div>
    )
}
export default BlurbStrip
