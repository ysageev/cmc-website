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
				<a href="https://www.mba.org" rel="noreferrer" target="_blank">
					<img src="img/assoc/mba.svg" alt="mba logo" style={{ height: "5vh" }} />
				</a>
				<a href="https://www.astm.org" rel="noreferrer" target="_blank">
					<img src="img/assoc/astm.png" alt="astm logo" style={{ height: "5vh" }} />
				</a>
				<a href="https://www.rmahq.org" rel="noreferrer" target="_blank">
					<img src="img/assoc/prosight-logo-square.svg" alt="rma logo" style={{ height: "5vh" }} />
				</a>
				<a href="https://www.fanniemae.com" rel="noreferrer" target="_blank">
					<img src="img/assoc/fannie-mae.png" alt="fannie-mae logo" style={{ height: "4vh" }} />
				</a>
				<a href="https://www.freddiemac.com" rel="noreferrer" target="_blank">
					<img src="img/assoc/freddie-mac.png" alt="freddie-mac logo" style={{ height: "5vh" }} />
				</a>
			</div>
		</div>
	)
}

export default Standards
