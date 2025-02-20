import PhotoCard from "./PhotoCard"

function Leadership() {
    return (
        <div className="page-section">
            <div className="page-section-header">Leadership</div>
            <div className="leadership-content-block ">
                <PhotoCard
                    photo="/img/about/peter-schregel.png"
                    name="Peter Schregel"
                    title="President"
                    linkedInURL="https://www.linkedin.com/in/peter-mark-schregel-pub/"
                    details="As President of CMC, Peter provides overall leadership for the company and oversees the project management teams. With over 30 years experience, Peter is recognized as an industry expert and has forged long-standing relationships with some of the nation's largest banks and institutional investors. Since its founding in 1988, CMC has has expanded both its service offerings and its geographical footprint. With Peter's vision and focus on technology, CMC has emerged as a leader in construction oversight services and risk management. Peter received his MBA from Canisius College and multiple undergraduate degrees from the State University of New York."
                />

                <PhotoCard
                    photo="/img/about/yair-sageev.png"
                    name="Yair Sageev"
                    title="Senior Vice President, Technology"
                    linkedInURL="https://www.linkedin.com/in/yair-sageev-61a166a/"
                    details="Yair heads all design, development and deployment of technology at CMC. He also is a key contributor in the strategic planning process. Yair has more than 30 years of software development experience. Yair's background spans mobile apps to databases, utilizing a wide variety of languages, platforms and toolchains. Yair's previous work includes positions with Sony Research Laboratories and various NYC startups. Yair holds a master’s degree from NYU and bachelor's from the University of California, Berkeley."
                />

                <PhotoCard
                    photo="/img/about/jeff-charles.png"
                    name="Jeff Charles"
                    title="Regional Vice President"
                    linkedInURL="https://www.linkedin.com/in/jeffreytcharles/"
                    details="Jeff is Vice President of the central NY region.  He has over 25 years deep experience with nearly every type of complex project, including historic preservation (NPS/SHPO), medical, manufacturing, and large-scale affordable housing. Before joining CMC, Jeff was a construction manager at LeCesse Development. He has a BS from the Univeristy of Hartford, and is certified for OSHA, Asbestos, and Lead Safety assessments."
                />

                <PhotoCard
                    photo="/img/about/derek-perry.png"
                    name="Derek Perry"
                    title="Consultant Team Leader"
                    linkedInURL="https://www.linkedin.com/in/derek-perry-cmc/"
                    details="Derek handles all aspects of construction monitoring and reporting for numerous projects, particularly in Ohio and Pennsylvania. He is also active in pre-shovel due diligence, including property condition assessments (PCA/ASTM), and Plan & Cost reporting. Derek serves as team leader for CMC's 360° video program. He oversees onboarding of all consultants and video surveyors. Finally, Derek plays a key role in CMC's outreach efforts to industry stakeholders. A graduate of SUNY Alfred's construction management program, he has been a part of the team since 2016."
                />
            </div>
        </div>
    )
}

export default Leadership
