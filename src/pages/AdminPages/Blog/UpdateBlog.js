import React, {useEffect, useRef, useState} from 'react';
import {toast, ToastContainer} from "react-toastify";
import JoditEditor from "jodit-react";
import axios from "axios";
import {useParams} from "react-router-dom";

const UpdateBlog = () => {

    const editor = useRef(null);
    const [content, setContent] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [inputs, setInputs] = useState({ title: '', description: '' });
    const [data , setData] =useState()
    const { b_id } = useParams(); // Get blog ID from URL

    useEffect(() => {
        const fetchBlog = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/api/blogs/get-blog/${b_id}`);

                const blogData = response.data;
                // Check if data exists and set inputs
                if (blogData) {
                    setInputs({ title: blogData.title, description: blogData.description });
                } else {
                    toast.error('No blog data found.');
                }


            } catch (error) {
                console.error('Error fetching the blog:', error);
                toast.error('Failed to fetch blog data.');
            } finally {
                setIsLoading(false);
            }
        };
        fetchBlog();
    }, [b_id]);

    // Log inputs whenever they change
    useEffect(() => {
        console.log('Updated inputs:', inputs);
    }, [inputs]);


    const handleInput = (event) => {
        const { name, value } = event.target;
        setInputs((prevInput) => ({ ...prevInput, [name]: value }));
    };


    const handleSubmit = async (event) => {
        event.preventDefault();

        console.log(data)

    };
    const handleUpdate = async (event)=>{
        event.preventDefault();

        console.log(inputs)

        const response = await axios.put(`http://localhost:5000/api/blogs/update-blog/${b_id}`, inputs);

        try {

            if (response.data.success) {

                toast.error('Failed to Update Blog');

                // setImgFile(null);
            } else {
                toast.success('Blog Updated Successfully');
            }
        } catch (err) {
            console.error(err);
            toast.error('Error Creating Blog');
        }


    }


    const handleReset = () => {
        setInputs({ title: '', description: '' });
        // setImgFile(null);
    };

    if (isLoading) {
        return <div>Loading...</div>; // Display a loading message while fetching
    }

    return (
        <>
            <div className="bg-base-200 min-h-screen flex items-center justify-center">
                <div className="bg-white max-w-lg w-full p-8 rounded-lg shadow-lg">
                    <h1 className="text-3xl sm:text-4xl font-bold text-center mb-4">Add New Blog</h1>

                    <ToastContainer />
                    <form onSubmit={handleSubmit} encType="multipart/form-data">
                        <div className="mb-4">
                            <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                                Blog Title
                            </label>
                            <input
                                type="text"
                                id="title"
                                name="title"
                                value={inputs.title}
                                onChange={handleInput}
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50 dark:bg-black"
                                placeholder="Enter Blog Title"

                            />

                        </div>
                        <div className="mb-4">
                            <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                                Description
                            </label>
                            <JoditEditor
                                ref={editor}
                                name="description"
                                value={inputs.description}
                                tabIndex={1}
                                onBlur={(newContent) => setContent(newContent)}
                                onChange={(newContent) => handleInput({ target: { name: 'description', value: newContent } })}
                            />
                        </div>
                        <div className="mt-8">
                            <button
                                type="submit"
                                className="w-full bg-[#000000] text-white text-lg font-bold py-2 px-4 rounded hover:bg-[#8e44ad] focus:outline-none focus:ring-2 focus:ring-[#8e44ad] focus:ring-opacity-50"
                                onClick={handleUpdate}
                            >
                                Update Blog
                            </button>
                            <div className="py-2 text-md text-center font-bold w-full">
                                <button
                                    type="button"
                                    onClick={handleReset}
                                    className="w-full bg-[#000000] text-white text-lg font-bold py-2 px-4 rounded hover:bg-[#8e44ad] focus:outline-none focus:ring-2 focus:ring-[#8e44ad] focus:ring-opacity-50"
                                >
                                    Reset
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

        </>
    );
};

export default UpdateBlog;