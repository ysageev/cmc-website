import "./css/standards.css"

function Standards() {
    return (
        <div className="standards-bar">
            <a href="https://www.mba.org" rel="noreferrer" target="_blank">
                <img src="img/assoc/mba.svg" alt="mba logo" className="standards-logo" />
            </a>
            <a href="https://www.astm.org" rel="noreferrer" target="_blank">
                <img src="img/assoc/astm.png" alt="astm logo" className="standards-logo" />
            </a>
            <a href="https://www.rmahq.org" rel="noreferrer" target="_blank">
                <img src="img/assoc/prosight-logo-square.svg" alt="rma logo" className="standards-logo" />
            </a>
            <a href="https://www.fanniemae.com" rel="noreferrer" target="_blank">
                <img src="img/assoc/fannie-mae.png" alt="fannie-mae logo" className="standards-logo" />
            </a>
            <a href="https://www.freddiemac.com" rel="noreferrer" target="_blank">
                <img src="img/assoc/freddie-mac.png" alt="freddie-mac logo" className="standards-logo" />
            </a>
        </div>
    )
}

export default Standards
