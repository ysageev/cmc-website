function PhotoCard({ photo, name, title, linkedInURL, details }) {
    return (
        <div className="photo-card">
            <a href={linkedInURL} target="_blank" rel="noreferrer">
                <i className="photo-card-icon fa-brands fa-linkedin fa-2x" />
            </a>
            <div className="photo-card-inner">
                <img src={photo} className="photo-card-photo" alt="manager-photo" />

                <div className="photo-card-name">{name}</div>
                <div className="photo-card-title">{title}</div>
                <div className="photo-card-details">{details}</div>
            </div>
        </div>
    )
}

export default PhotoCard
