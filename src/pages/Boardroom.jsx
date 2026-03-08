import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Clients from "./Boardroom/Clients";
import Hero from "./Boardroom/Hero"
import Intro from "./Boardroom/Intro";
import Security from "./Boardroom/Secuirity";
import Services from "./Boardroom/Services";
import Spaces from "./Boardroom/Spaces";

const Boardroom = () => {
    return (
       

            <div className="relative bg-[#EBE9E4]">
                 <Navbar />
                <Hero />
                <Intro />
                <Spaces/>
                <Security />
                <Services />
                <Clients/>
                <Footer />
            </div>
    )
}
export default Boardroom;