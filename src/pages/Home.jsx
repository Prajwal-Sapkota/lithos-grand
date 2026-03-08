import Boardroom from "../components/Boardroom";
import Collection from "../components/Collection";
import Experiences from "../components/Experiences";
import Footer from "../components/Footer";
import Gastronomy from "../components/Gastronomy";
import Hero from "../components/Hero";
import HotelIntro from "../components/HotelIntro";
import Membership from "../components/Membership";
import Navbar from "../components/Navbar"
import Sanctuary from "../components/Sanctuary";
import Wellness from "../components/Wellness";

const Home = () => {
    return(
        <div className="relative overflow-x-hidden">
            <Navbar/>
            <Hero/>
            <HotelIntro/>
            <Experiences/>
            <Collection/>
            <Sanctuary/>
            <Boardroom/>
            <Gastronomy/>
            <Wellness/>
            <Membership/>
            <Footer/>
        </div>
    )
}
export default Home;