import React from 'react';
import Img from '../../../assets/ab.jpg';
import {Link} from "react-router-dom";

const AboutSection = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-36 mb-20">
            {/* Left Column (Image) */}
            <div className="">
                <img src={Img} className="w-full h-auto" alt="About Us" />
            </div>
            {/* Right Column (Text Content) */}
            <div className="flex flex-col justify-center px-4 py-8 sm:py-0">
                <div className='bg-[#eee] dark:bg-darkModeColor p-10 -ml-4'>
                    <h1 className="text-3xl font-bold mb-4">About Us</h1>
                    <p className="text-lg mb-4">
                        Welcome to YoungDev Interns – Your Gateway to Skill Development!
                    </p>
                    <Link to='/about-us-page' className="bg-[#222] dark:bg-[#eee] dark:text-[black] w-56 hover:bg-[#8e44ad] text-white font-bold py-2 px-16 rounded" >
                        Read More
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default AboutSection;
