import React, {useEffect, useState} from 'react';
import axios from "axios";

const UserCounterDisplay = () => {

    const [blogCount , setBlogCount] = useState()

    useEffect(()=>{
        axios.get('http://localhost:5000/api/blogs/blog-count').then(response=>{
            setBlogCount(response.data)
        })
        console.log("BLOG Count :", blogCount)
        },[])

    return (
        <div className='py-10 flex justify-center  '>
            <div className="stats shadow w-3/4  p-6 bg-white dark:bg-darkModeColor rounded-lg">
                <div className="stat text-center ">
                    <div className="stat-title text-xs md:text-xl font-semibold">Total Users</div>
                    <div className="stat-value text-sm md:text-4xl font-bold">4,200</div>
                </div>
                <div className="stat text-center ">
                    <div className="stat-title text-xs md:text-xl font-semibold">Total Blogs</div>
                    <div className="stat-value text-sm md:text-4xl font-bold">{blogCount}</div>
                </div>
            </div>
        </div>
    );
};

export default UserCounterDisplay;
