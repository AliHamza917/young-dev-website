import React from 'react';

const CardWidget = (props) => {
    return (
       <div>
           <div className="flex justify-center ">
               <div className="card bg-[#8e44ad] hover:bg-[#222] w-40 lg:w-44 md:w-44 h-44 flex flex-col items-center justify-center p-2">
                   <img className="w-24 md:w-32 p-2" src={props.Img} alt="icon" />
                   <p className="text-lg md:text-xl font-bold text-white text-center mt-2">{props.title}</p>
               </div>
           </div>
       </div>
    );
};

export default CardWidget;
