import React from 'react';
import headerImg from "../../../assets/blog-img.png";
import CardWidget2 from "../../../global/components/Card-Widget2";
import {Link} from "react-router-dom";

const Main = () => {
    return (
        <>

            <div className="mx-auto max-w-screen-xl">
                <div className=''>
                    {/* Header Image */}
                    <div className='' >
                        <img src={headerImg} className="w-full" alt="Header" />

                    </div>
                </div><br/>
                {/* Blog Page Main Content */}
                <div className=''>
                    {/* Cards Grid Section */}
                    <div className="bg-[#eee] dark:bg-darkModeColor">
                        <h1 className="py-8 text-4xl md:text-6xl text-center">BLOGS</h1>
                        <div className="grid grid-cols-1 pb-14 sm:grid-cols-2 md:grid-cols-3 gap-4 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-36">
                            <CardWidget2 />
                            <CardWidget2 />
                            <CardWidget2 />

                        </div>


                    </div>


                </div>
            </div><br/><br/>

        </>
    );
};

export default Main;