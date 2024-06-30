import React from 'react';
import Img1 from '../../../assets/icon-1.png';
import Img2 from '../../../assets/icon-2.png';
import Img3 from '../../../assets/icon-3.png';
import Img4 from '../../../assets/icon-4.png';
import Img5 from '../../../assets/icon-5.png';
import Img6 from '../../../assets/icon-6.png';
import CardWidget from "../../../global/components/Card-Widget";

const HiringSection = () => {
    return (
        <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-36">
            <h1 className="text-4xl md:text-6xl text-center pt-8">WE ARE HIRING</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 place-items-center py-8">
                <div className="flex justify-center">
                    <CardWidget Img={Img1} title="Multitalented" />
                </div>
                <div className="flex justify-center">
                    <CardWidget Img={Img2} title="Title 2" />
                </div>
                <div className="flex justify-center">
                    <CardWidget Img={Img3} title="Title 3" />
                </div>
                <div className="flex justify-center sm:flex-col md:flex-row">
                    <CardWidget Img={Img4} title="Title 4" />
                </div>
                <div className="flex justify-center sm:flex-col md:flex-row">
                    <CardWidget Img={Img5} title="Title 5" />
                </div>
                <div className="flex justify-center sm:flex-col md:flex-row">
                    <CardWidget Img={Img6} title="Title 6" />
                </div>
            </div>
        </div>
    );
};

export default HiringSection;
