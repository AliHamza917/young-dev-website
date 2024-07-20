import React from 'react';
import Img1 from "../../assets/im-1.jpg";

const CardWidget2 = (props) => {
    return (
        <div className='flex justify-center'>
            <div className="card bg-base-100 w-96 shadow-xl dark:bg-[#f4f4f557]">
                <figure >
                    <img
                        className='ease-in duration-300 cursor-pointer'
                        src={Img1}
                        alt="Img1" />
                </figure>
                <div className="card-body text-center ">
                    <h2 className=" text-3xl">
                        {props.title}
                    </h2>
                    <p className='text-md'>{props.description}</p>
                    <div className="card-actions justify-center">
                        <div className=" p-3 bg-black hover:#8e44ad  font-bold text-white">Apply Now</div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default CardWidget2;