import Link from "@docusaurus/Link"

const ButtonCard = ({ title, icon, details, buttonLabel, buttonLink }) => {
    return (
        <div
            style={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                padding: 15,
                border: "1px solid gray",
                borderRadius: 7,
                boxShadow: "0px 0px 5px gray",
            }}
        >
            <div
                style={{
                    fontSize: "1.5em",
                    fontWeight: "bold",
                }}
            >
                <span>{title}</span>
            </div>
            <div
                style={{
                    fontSize: ".9em",
                    textWrap: "pretty",
                    padding: 10,
                    textAlign: "center",
                    height: 100,
                    maxWidth: 300,
                }}
            >
                {details}
            </div>
            <Link className="button button--primary button--lg" to={buttonLink}>
                {buttonLabel}
                {icon && (
                    <span>
                        &nbsp;
                        <i className={`fa-duotone fa-solid ${icon}`} />
                    </span>
                )}
            </Link>
        </div>
    )
}

export default ButtonCard
