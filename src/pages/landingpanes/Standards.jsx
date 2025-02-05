function Standards() {
	return (
		<div
			className="blurb-strip"
			style={{
				paddingLeft: 30,
				paddingTop: 20,
				paddingBottom: 40,
				paddingRight: 30,
			}}
		>
			<span style={{ fontSize: "1.4em", fontFamily: "Lexend", fontWeight: 500 }}>
				Our reports track leading standards bodies
				<br />
				<br />
			</span>
			<div
				style={{
					display: "flex",
					flexWrap: "wrap",
					alignItems: "flex-start",
					justifyContent: "space-around",
					gap: 20,
				}}
			>
				<img src="img/assoc/mba.svg" alt="mba logo" style={{ height: 80 }} />
				<img src="img/assoc/astm.png" alt="astm logo" style={{ height: 80, paddingLeft: 20 }} />
				<img src="img/assoc/prosight-logo-square.svg" alt="rma logo" style={{ height: 80, paddingLeft: 20 }} />
				<img src="img/assoc/fannie-mae.png" alt="fannie-mae logo" style={{ height: 80 }} />
				<img src="img/assoc/freddie-mac.png" alt="freddie-mac logo" style={{ height: 80 }} />
			</div>
		</div>
	)
}

export default Standards
