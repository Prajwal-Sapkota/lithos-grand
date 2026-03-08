import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ContactForm from "./Contact/ContactForm";
import Hero from "./Contact/Hero";
import Intro from "./Contact/Intro";
import Locations from "./Contact/Locations";

const Contact = () =>{
    return(
        <div className="bg-[#EBE9E4] overflow-x-hidden">
            <Navbar/>
            <Hero/>
            <Intro/>
            <ContactForm/>
            <Locations/>
           
            <Footer/>

        </div>
    )
}
export default Contact;
