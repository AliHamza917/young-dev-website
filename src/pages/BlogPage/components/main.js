import React, {useEffect, useState} from 'react';
import headerImg from "../../../assets/blog-img.png";
import CardWidget2 from "../../../global/components/Card-Widget2";
import {Link} from "react-router-dom";
import axios from "axios";
import {FaRegPenToSquare} from "react-icons/fa6";
import {IoTrash} from "react-icons/io5";

const Main = () => {

    const [blogData , setBlogData] = useState([])


    useEffect(()=>{
        axios.get('http://localhost:5000/api/blogs/show-blog').then(response=>{
            setBlogData(response.data)
        })

    },[]);

    // to Remove HTML Tags in Description
    const stripHtml = (html) => {
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = html;
        return tempDiv.textContent || tempDiv.innerText || '';
    };

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
                            {/*Blog Rows*/}
                            {
                                blogData.map((blog , index)=>(
                                    <CardWidget2 key={index} title = {blog.title} description = {stripHtml(blog.description).length > 20
                                        ? `${stripHtml(blog.description).substring(0, 20)}...`
                                        : stripHtml(blog.description)} />

                                ))
                            }




                        </div>


                    </div>


                </div>
            </div><br/><br/>

        </>
    );
};

export default Main;