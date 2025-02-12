function Standards() {
	return (
		<div
			className="blurb-strip"
			style={{
				paddingLeft: 30,
				paddingTop: 20,
				paddingBottom: 30,
				paddingRight: 30,
			}}
		>
			<div
				style={{
					display: "flex",
					flexWrap: "wrap",
					alignItems: "center",
					justifyContent: "space-between",
					gap: 20,
				}}
			>
				<img src="img/assoc/mba.svg" alt="mba logo" style={{ height: "5vh" }} />
				<img src="img/assoc/astm.png" alt="astm logo" style={{ height: "5vh" }} />
				<img src="img/assoc/prosight-logo-square.svg" alt="rma logo" style={{ height: "5vh" }} />
				<img src="img/assoc/fannie-mae.png" alt="fannie-mae logo" style={{ height: "4vh" }} />
				<img src="img/assoc/freddie-mac.png" alt="freddie-mac logo" style={{ height: "5vh" }} />
			</div>
		</div>
	)
}

export default Standards
