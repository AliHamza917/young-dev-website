import React from 'react'
import SliderImg1 from '../../../assets/home-slide-1.jpg'
import SliderImg2 from '../../../assets/home-slide-2.jpg'
import SliderImg3 from '../../../assets/hom-slide-3.jpg'
import {Link} from "react-router-dom";

const HeroSection = () => {
    return (
        <>
            <div className="carousel w-full h-[40vw]">
                <div id="slide1" className="carousel-item relative w-full">
                    <img
                        src={SliderImg1}
                        className="w-full" />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <div className=" text-center text-white " style={{ transition: 'all 0.3s ease-out' }}>
                            <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-center mb-4 md:mb-6">
                                Explore Remote Internship
                            </h1>
                            <p className="text-xl md:text-3xl lg:text-4xl font-extrabold text-center mb-6">
                                EMPOWERING TOMORROW'S DEVELOPERS<br/> TODAY
                            </p>
                            <Link
                                to="/internship-page"
                                className="w-36 md:w-48 bg-black hover:bg-purple-700 text-white font-bold py-3 px-4 text-center transition duration-300"
                            >
                                Browse More
                            </Link>
                        </div>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img
                        src={SliderImg2}
                        className="w-full" />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <div className=" text-center  " style={{ transition: 'all 0.3s ease-out' }}>
                            <h1 className="text-lg md:text-xl lg:text-3xl font-bold text-center mb-4 md:mb-6">
                                Explore Remote Internship
                            </h1>
                            <p className="text-xl text-white md:text-3xl lg:text-4xl font-extrabold text-center mb-6">
                                DISCOVER YOUR SKILLS
                            </p>
                            <Link
                                to="/internship-page"
                                className="w-36 md:w-48 bg-black hover:bg-purple-700 text-white font-bold py-3 px-4 text-center transition duration-300"
                            >
                                Browse More
                            </Link>
                        </div>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img
                        src={SliderImg3}
                        className="w-full" />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <div className=" text-center  " style={{ transition: 'all 0.3s ease-out' }}>
                            <h1 className="text-lg md:text-xl lg:text-3xl font-bold text-center mb-4 md:mb-6">
                                Explore Remote Internship
                            </h1>
                            <p className="text-xl text-white md:text-3xl lg:text-4xl font-extrabold text-center mb-6">
                                APPLY INTERNSHIP FOR FREE TODAY
                            </p>
                            <Link
                                to="/internship-page"
                                className="w-36 md:w-48 bg-black hover:bg-purple-700 text-white font-bold py-3 px-4 text-center transition duration-300"
                            >
                                Browse More
                            </Link>
                        </div>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>

            </div>

        </>
    );
};

export default HeroSection;