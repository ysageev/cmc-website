import Link from "@docusaurus/Link"

function PoweredByStructDB() {
	return (
		<div
			className="blurb-strip"
			style={{
				padding: 30,
				backgroundColor: "#343434",
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
				<div style={{ fontStyle: "italic", fontSize: ".6em" }}>CMC is powered by:</div>
				<br />
				<div style={{}}>
					<img src="img/structdb-logo-light.png" alt="rma logo" style={{ width: 300 }} />
					<div
						style={{
							color: "#CAF4C0",
							fontSize: ".57em",
							clear: "both",
						}}
					>
						Portfolio Management Software
					</div>
				</div>
				<br />
				<div style={{}}>
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
