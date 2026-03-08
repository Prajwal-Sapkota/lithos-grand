import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Hero from "./Journal/Hero";
import Intro from "./Journal/Intro";
import StoriesGrid from "./Journal/StoriesGrid";
import Story from "./Journal/Story";

const Journal = () => {
    return(
        <div className="bg-[#EBE9E4] overflow-x-hidden">
            <Navbar/>
            <Hero/>
            <Intro/>
            <Story/>
            <StoriesGrid/>
           
            <Footer/>
        </div>
    )
}
export default Journal;