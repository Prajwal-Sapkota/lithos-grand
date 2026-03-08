import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Hero from "./Wellness/Hero";
import Intro from "./Wellness/Intro";
import Philosophy from "./Wellness/Philosophy";
import WellnessExperience from "./Wellness/WellnessExperience";

const Wellness = () => {
    return(
        <div className="bg-[#EBE9E4] overflow-x-hidden">
            <Navbar/>
            <Hero/>
            <Intro/>
            <WellnessExperience/>
            <Philosophy/>
            <Footer/>
        </div>
    )
}
export default Wellness;