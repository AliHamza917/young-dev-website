import React from 'react';
import HeroSection from "./components/HeroSection";
import HiringSection from "./components/HiringSection";
import AboutSection from "./components/AboutSection";
import OurInternshipSection from "./components/OurInternshipSection";

const HomePage = () => {
    return (
        <div>
            <HeroSection/>
            <HiringSection/>
            <AboutSection/>
            <OurInternshipSection/>

        </div>
    );
};

export default HomePage;