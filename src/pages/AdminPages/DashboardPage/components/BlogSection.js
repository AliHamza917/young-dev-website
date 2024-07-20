import React, {useEffect, useState} from 'react';
import { FaRegPenToSquare } from "react-icons/fa6";
import { IoTrash } from "react-icons/io5";
import { IoAddCircleOutline } from "react-icons/io5";
import {Link} from "react-router-dom";
import axios from "axios";
import {toast} from "react-toastify";

const BlogSection = () => {

    const [tableData , setTableData] = useState([])


        useEffect(()=>{
            axios.get('http://localhost:5000/api/blogs/show-blog').then(response=>{
                setTableData(response.data)
            })

        },[])


    const handelDel  = async (b_id ,event)=>{
        event.preventDefault();

        const response = await axios.delete(`http://localhost:5000/api/blogs/del-blog/${b_id}`);

        try {

            if (!response.data.success) {

                toast.error('Failed to Delete Blog');

                // setImgFile(null);
            } else {
                toast.success('Blog Deleted Successfully');
                setTableData(prevTableData => prevTableData.filter(blog => blog._id !== b_id));

            }
        } catch (err) {
            console.error(err);
            toast.error('Error Creating Blog');
        }

    }


    // to Remove HTML Tags in Description
    const stripHtml = (html) => {
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = html;
        return tempDiv.textContent || tempDiv.innerText || '';
    };


    return (
        <>
            <div className="overflow-x-auto px-10">
                <div className=' text-center'>
                    <h1 className='text-3xl lg:text-5xl md:text-6xl py-8 font-extrabold'>Manage Blogs </h1>
                </div>
                <div className='bg-green-100 w-full '>
                    <Link to='/add-blog-form' className="btn btn-md bg-[#ffbc53] me-2 absolute  right-36">
                        <IoAddCircleOutline className='w-20 h-10 text-white'/>
                    </Link>
                </div><br/><br/>
                <table className="table">
                    {/* head */}
                    <thead>
                    <tr>
                        <th></th>
                        <th>Blog Title</th>
                        <th>Description</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {/*Blog Rows*/}
                    {
                        tableData.map((table , index)=>(
                            <tr key={index}>
                                <th>{index+1}</th>
                                <td>{table.title}</td>
                                <td>{stripHtml(table.description).length > 20
                                    ? `${stripHtml(table.description).substring(0, 20)}...`
                                    : stripHtml(table.description)}
                                </td>
                                <td>
                                    <div className="actions">
                                        <Link to={`/get-blog/${table._id}`} className="btn btn-md bg-[#18aefa] me-2">
                                            <FaRegPenToSquare className='w-5 h-5 text-white font-bold'/>
                                        </Link>
                                        <button onClick={(event) => handelDel(table._id, event)} className="btn btn-md bg-[#ffbc53]">
                                            <IoTrash className='w-5 h-5 text-white font-bold'/>
                                        </button>
                                    </div>
                                </td>
                            </tr>

                        ))
                    }



                    </tbody>
                </table><br/>
            </div>

        </>
    );
};

export default BlogSection;