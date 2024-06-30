import React from 'react';
import Img1 from '../../../assets/im-1.jpg';
import CardWidget2 from "../../../global/components/Card-Widget2";

const OurInternshipSection = () => {
    return (
        <div >
          <div className="bg-[#eee] dark:bg-darkModeColor">
              <h1 className="py-8 text-4xl md:text-6xl text-center">OUR INTERNSHIPS</h1>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-36">
                  <CardWidget2 />
                  <CardWidget2 />
                  <CardWidget2 />
              </div>
              <div className='w-full flex justify-center py-8'>
                  <div className="w-36 p-3 text-center bg-black hover:#8e44ad  font-bold text-white">Browse More</div>
              </div>

          </div>
            <div className='text-center'>
                <h1 className='text-4xl font-bold pt-8 py-2'>FREE</h1>
                <p>We are Freely Assigning tasks and will guide every student</p>
                <div className='w-full flex justify-center py-6 pb-8'>
                    <div className="w-36 p-3 text-center bg-black hover:#8e44ad  font-bold text-white">Browse More</div>

                </div>
             </div>

        </div>
    );
};

export default OurInternshipSection;
