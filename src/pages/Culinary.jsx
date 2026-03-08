import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Hero from "./Culinary/Hero";
import Intro from "./Culinary/Intro";
import RestaurantConcepts from "./Culinary/RestaurantConcepts";
import SignatureDishes from "./Culinary/SignatureDishes";
import Wine from "./Culinary/Wine";

const Culinary = () =>{
    return(
        <div className="bg-[#EBE9E4] overflow-x-hidden">
            <Navbar/>
            <Hero/>
            <Intro/>
            <RestaurantConcepts/>
            <SignatureDishes/>
            <Wine/>
            <Footer/>

        </div>
    )
}
export default Culinary;
