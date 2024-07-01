import React from 'react';
import { FaRegPenToSquare } from "react-icons/fa6";
import { IoTrash } from "react-icons/io5";
import { IoAddCircleOutline } from "react-icons/io5";

const BlogSection = () => {
    return (
        <>
            <div className="overflow-x-auto px-10">
                <div className=' text-center'>
                    <h1 className='text-3xl lg:text-5xl md:text-6xl py-8 font-extrabold'>Manage Blogs </h1>
                </div>
                <div className='bg-green-100 w-full '>
                    <a href="" className="btn btn-md bg-[#ffbc53] me-2 absolute  right-36">
                        <IoAddCircleOutline className='w-20 h-10 text-white'/>
                    </a>
                </div><br/><br/>
                <table className="table">
                    {/* head */}
                    <thead>
                    <tr>
                        <th></th>
                        <th>Blog</th>
                        <th>Date</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {/* row 1 */}
                    <tr>
                        <th>1</th>
                        <td>Cy Ganderton</td>
                        <td>7 July 2024 </td>
                        <td>
                            <div className="actions">
                                <a href="#" className="btn btn-md bg-[#18aefa] me-2">
                                    <FaRegPenToSquare className='w-5 h-5 text-white font-bold'/>
                                </a>
                                <a href="#" className="btn btn-md bg-[#ffbc53]">
                                    <IoTrash className='w-5 h-5 text-white font-bold'/>
                                </a>
                            </div>
                        </td>
                    </tr>
                    {/* row 2 */}
                    <tr>
                        <th>2</th>
                        <td>Hart Hagerty</td>
                        <td>Desktop Support Technician</td>
                        <td> <div className="actions">
                            <a href="edit-student.html" className="btn btn-md bg-[#18aefa] me-2">
                                <FaRegPenToSquare className='w-5 h-5 text-white font-bold'/>
                            </a>
                            <a href="students.html#" className="btn btn-md bg-[#ffbc53]">
                                <IoTrash className='w-5 h-5 text-white font-bold'/>
                            </a>
                        </div></td>
                    </tr>
                    {/* row 3 */}
                    <tr>
                        <th>3</th>
                        <td>Brice Swyre</td>
                        <td>Tax Accountant</td>
                        <td> <div className="actions">
                            <a href="edit-student.html" className="btn btn-md bg-[#18aefa] me-2">
                                <FaRegPenToSquare className='w-5 h-5 text-white font-bold'/>
                            </a>
                            <a href="students.html#" className="btn btn-md bg-[#ffbc53]">
                                <IoTrash className='w-5 h-5 text-white font-bold'/>
                            </a>
                        </div></td>
                    </tr>
                    </tbody>
                </table>
            </div>

        </>
    );
};

export default BlogSection;