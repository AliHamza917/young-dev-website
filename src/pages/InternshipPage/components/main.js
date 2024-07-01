
import React from 'react';
import headerImg from '../../../assets/header-internship.png';
import CardWidget2 from "../../../global/components/Card-Widget2";
import {Link} from "react-router-dom";

const Main = () => {
    return (
        <div className="mx-auto max-w-screen-xl">
            <div className=''>
                {/* Header Image */}
                <div className='' >
                    <img src={headerImg} className="w-full" alt="Header" />

                </div>
            </div><br/>
            {/* Internship Main Content */}
            <div className=''>
                {/* Cards Grid Section */}
                <div className="bg-[#eee] dark:bg-darkModeColor">
                    <h1 className="py-8 text-4xl md:text-6xl text-center">OUR INTERNSHIPS</h1>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-36">
                        <CardWidget2 />
                        <CardWidget2 />
                        <CardWidget2 />
                    </div>
                    <div className='w-full flex justify-center py-8'>
                        <Link to='/internship-page' className="w-36 p-3 text-center bg-black hover:#8e44ad  font-bold text-white">Browse More</Link>
                    </div>

                </div>


            </div>
        </div>
    );
};

export default Main;

