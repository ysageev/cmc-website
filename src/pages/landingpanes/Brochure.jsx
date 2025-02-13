function Brochure() {
	return (
		<div
			className="blurb-strip"
			style={{
				display: "flex",
				alignItems: "center",
				flexWrap: "wrap",
				padding: 30,
				backgroundColor: "#343434",
				color: "white",
			}}
		>
			<span
				style={{
					color: "white",
					fontSize: 28,
					marginRight: 20,
				}}
			>
				<span style={{ color: "#C4F1FF" }}>Download</span> our
				<span style={{ color: "#C4F1FF" }}> brochure</span> &nbsp;
				<span style={{ marginTop: 10, marginBottom: 10 }}>
					<a className="button button--primary button--lg" href="pdf/cmc-services-brochure.pdf" rel="noreferrer" target="_blank">
						PDF <i className="fa-duotone fa-solid fa-download" />
					</a>
				</span>
			</span>
		</div>
	)
}
export default Brochure
