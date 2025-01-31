function PhotoCard({ photo, name, title, linkedInURL, details }) {
	return (
		<div style={{ maxWidth: 320 }}>
			<a
				href={linkedInURL}
				target="_blank"
				rel="noreferrer"
				style={{ position: "relative", left: 270, top: 80, zIndex: 1000 }}
			>
				<i className="fa-brands fa-linkedin fa-2x" />
			</a>
			<div
				style={{
					display: "flex",
					alignItems: "center",
					justifyContent: "space-around",
					flexDirection: "column",
					flexWrap: "wrap",
					margin: 10,
					padding: 0,
				}}
			>
				<img src={photo} alt="manager-photo" style={{ width: 240 }} />

				<div style={{ fontWeight: "bold", fontSize: "1.3em", marginTop: 5 }}>
					{name}
				</div>
				<div
					style={{
						fontWeight: "500",
						fontStyle: "italic",
						fontSize: "1em",
						marginTop: 5,
					}}
				>
					{title}
				</div>
				<div
					style={{
						fontSize: ".9em",
						marginTop: 10,
						paddingLeft: 15,
						paddingRight: 5,
					}}
				>
					{details}
				</div>
			</div>
		</div>
	);
}

export default PhotoCard;
