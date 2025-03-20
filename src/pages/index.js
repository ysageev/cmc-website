import Layout from "@theme/Layout"
import Hero from "./main/Hero.jsx"
import Consultation from "./main/Consultation.jsx"
import Services from "./main/Services.jsx"
import PipelineCarousel from "./main/PipelineCarousel.jsx"
import Standards from "./main/Standards.jsx"
// import OurClients from "./main/OurClients.jsx"
import ApprovedVendor from "./main/ApprovedVendor.jsx"
import PoweredByStructDB from "./main/PoweredByStructDB.jsx"
import Advantages from "./main/Advantages.jsx"
// import RotatingClients from "./main/RotatingClients.jsx"
function Home() {
    return (
        <Layout>
            <div className="container">
                <Hero />
                <Services />
                {/* <RotatingClients /> */}
                <Consultation />
                <Advantages />
                {/* <OurClients /> */}
                <ApprovedVendor />
                <PipelineCarousel />
                <PoweredByStructDB />
                <Standards />
                <br />
            </div>
        </Layout>
    )
}

export default Home
