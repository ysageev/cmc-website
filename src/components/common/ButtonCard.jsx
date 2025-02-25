import Link from "@docusaurus/Link"

const ButtonCard = ({ title, icon, details, buttonLabel, buttonLink }) => {
    return (
        <div className="button-card">
            <div className="button-card-title">{title}</div>
            <div className="button-card-details">{details}</div>
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
