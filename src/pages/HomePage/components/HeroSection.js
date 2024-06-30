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
                            <h1 className='p-2 text-2xl  font-bold'>Explore  Remote Internship</h1>
                            <div className='p-2 pb-6 text-4xl font-extrabold '>EMPOWERING TOMORROW'S DEVELOPERS<br/> TODAY</div>
                            <div>
                                <Link to='/internship-page' className="w-36 p-3 text-center bg-black hover:#8e44ad  font-bold text-white">Browse More</Link>

                            </div>
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
                        <div className=" text-center text-white ">
                            <h1 className='p-2 text-2xl  font-bold'>Explore  Remote Internship</h1>
                            <div className='p-2 pb-6 text-4xl font-extrabold '>DISCOVER YOUR SKILLS</div>
                            <div>
                                <Link to='/internship-page' className="w-36 p-3 text-center bg-black hover:#8e44ad  font-bold text-white">Browse More</Link>

                            </div>
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
                        <div className=" text-center text-white ">
                            <h1 className='p-2 text-2xl  font-bold'>Explore  Remote Internship</h1>
                            <div className='p-2 pb-6 text-4xl font-extrabold '>APPLY INTERNSHIP FOR FREE<br/> TODAY</div>
                            <div>
                                <Link to='/internship-page' className="w-36 p-3 text-center bg-black hover:#8e44ad  font-bold text-white">Browse More</Link>

                            </div>
                        </div>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>

            </div>

        </>
    );
};

export default HeroSection;