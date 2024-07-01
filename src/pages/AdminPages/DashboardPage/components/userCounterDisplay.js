import React from 'react';

const UserCounterDisplay = () => {
    return (
        <div className='py-10 flex justify-center  '>
            <div className="stats shadow w-3/4  p-6 bg-white rounded-lg">
                <div className="stat text-center ">
                    <div className="stat-title text-xs md:text-xl font-semibold">Total Users</div>
                    <div className="stat-value text-sm md:text-4xl font-bold">4,200</div>
                </div>
                <div className="stat text-center ">
                    <div className="stat-title text-xs md:text-xl font-semibold">New Registers</div>
                    <div className="stat-value text-sm md:text-4xl font-bold">1,200</div>
                </div>
            </div>
        </div>
    );
};

export default UserCounterDisplay;
