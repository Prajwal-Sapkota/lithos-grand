import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Featured from "./Travel/Featured";
import Hero from "./Travel/Hero";
import TravelGrid from "./Travel/TravelGrid";

const Travel = () => {
    return(
        <div className="bg-[#EBE9E4] overflow-x-hidden">
            <Navbar/>
            <Hero/>
            <Featured/>
            <TravelGrid/>
            <Footer/>
        </div>
    )
}
export default Travel;