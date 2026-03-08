import { useState } from "react";
import collectionData from "../data/collection.json";

import Intro from "./Collection/Intro";
import Hero from "./Collection/Hero";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Monolith from "./Collection/Monolith";
import Brand from "./Collection/Brand";

const Collection = () => {
  const [activeCity, setActiveCity] = useState("paris");
  const { hero, intro, cities, architects } = collectionData;

  return (
    <div className="bg-[#EBE9E4] relative overflow-x-hidden">
        <Navbar/>

      <Hero hero={hero} />
      <Intro intro={intro} />
      <Monolith/>
      <Brand/>
      
      <Footer/>
    </div>
  );
};

export default Collection;