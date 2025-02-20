import Layout from "@theme/Layout"
import Leadership from "./Leadership"
import Company from "./Company"

const About = () => {
    return (
        <Layout>
            <div className="container">
                <div className="page-header">
                    <div className="page-header-text">About Us</div>
                    <div className="page-header-details-text">CMC has served the diverse needs of construction lenders for over 35 years.</div>
                    <Company />
                </div>

                <Leadership />
            </div>
        </Layout>
    )
}

export default About
