import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Amenities from "./Sanctuary/Amenities";
import Experience from "./Sanctuary/Experiences";
import Hero from "./Sanctuary/Hero"
import Intro from "./Sanctuary/Intro";
import Journey from "./Sanctuary/Journey";
import Testimonials from "./Sanctuary/Testimonials";

const Sanctuary = () => {
    return(
        <div className="bg-[#EBE9E4] overflow-x-hidden">
            <Navbar/>
            <Hero/>
            <Intro/>
            <Journey/>
            <Amenities/>
            <Experience/>
            <Testimonials/>
            <Footer/>
        </div>
    )
}
export default Sanctuary;