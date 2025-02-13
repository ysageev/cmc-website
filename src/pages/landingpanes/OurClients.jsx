function OurClients() {
	return (
		<div
			style={{
				paddingLeft: 30,
				paddingTop: 0,
				paddingRight: 20,
				marginBottom: 40,
			}}
		>
			<span style={{ fontSize: "2em", fontWeight: "bold" }}>Our Clients</span>

			<div
				style={{
					display: "flex",
					alignContent: "flex-start",
					alignItems: "flex-start",
					justifyContent: "space-between",
					flexWrap: "wrap",
					fontSize: "1em",
					paddingTop: 10,
				}}
			>
				<div style={{ display: "flex", flexWrap: "wrap", width: 300 }}>
					<EntityItem label="National Banks" />
					<EntityItem label="Regional Banks" />
					<EntityItem label="Community Banks" />
				</div>
				<div style={{ display: "flex", flexWrap: "wrap", width: 300 }}>
					<EntityItem label="Credit Unions" />
					<EntityItem label="Nonprofit Lenders" />
					<EntityItem label="Pension Funds" />
				</div>
				<div style={{ display: "flex", flexWrap: "wrap", width: 300 }}>
					<EntityItem label="Institutional Investors" />
					<EntityItem label="Government/Municipalities" />
					<EntityItem label="Mortgage Companies" />
				</div>
			</div>
		</div>
	)
}

const ICON = "fa-duotone fa-solid fa-badge-check fa-xl fa-fw"
const ICON_STYLE = {
	"--fa-primary-color": "green",
	"--fa-secondary-color": "gray",
}

function EntityItem({ label }) {
	return (
		<div style={{ display: "flex", alignItems: "center", padding: 5, fontSize: "1.1em", fontFamily: "Lexend, sans-serif" }}>
			<div>
				<i className={ICON} style={ICON_STYLE} />
			</div>
			<div>&nbsp;{label}</div>
		</div>
	)
}

export default OurClients
